import Router from "koa-router";
import axios from "axios";
import {AxiosRequestConfig} from "axios";

const router = new Router();

const {
  REGISTRY_ENDPOINT="http://localhost:5000",
  REGISTRY_USERNAME,
  REGISTRY_PASSWD,
} = process.env;

router.get("/", async (ctx) => {
  ctx.body = {
    success:true,
    data:"hello world"
  };

  return;
});

router.get("/_catalog_list", async (ctx) => {

  const {name:imageName} = ctx.request.query;

  try{

    const requestConfig :AxiosRequestConfig<any> = {
      ...(REGISTRY_USERNAME && REGISTRY_PASSWD)&& ({auth:{username:REGISTRY_USERNAME, password:REGISTRY_PASSWD}}),
      // headers:{
      //   accept: "application/vnd.docker.distribution.manifest.v2+json"
      // },
    };

    let repos;
    if(imageName){
      // if image name specified
      repos = [imageName]
    }
    else{
      const {data: {repositories}} = await axios.get(`${REGISTRY_ENDPOINT}/v2/_catalog`, requestConfig);
      repos = repositories;
    }


    const data = await Promise.all(
      repos
        .filter((name:string)=>!name.includes('emp'))
        .map(async(name:any)=>{

          try {
            const {data: {tags}} = await axios.get(`${REGISTRY_ENDPOINT}/v2/${name}/tags/list`, requestConfig);
            const tag = tags.includes('latest')? 'latest' : tags[0];
            const r = await axios.get(`${REGISTRY_ENDPOINT}/v2/${name}/manifests/${tag}`, requestConfig);

            const { created, author, config } = JSON.parse(r.data.history[0].v1Compatibility);

            return {
              name,
              author,
              lastUpdate: created,
              tags,
              desc: config['Labels']?.['Description'] || undefined
            }
          }
          catch(e){
            console.error(e);
            return {}
          }
      })
    );


    ctx.body = {
      success:true,
      data: (data.length === 1)? data[0]: data,
    };
  } catch (e){
    console.error(e);
  }

  return;
});

router.get("/tag_profile", async(ctx)=>{
  const {name, tag} = ctx.request.query;

  const requestConfig :AxiosRequestConfig<any> = {
    ...(REGISTRY_USERNAME && REGISTRY_PASSWD)&& ({auth:{username:REGISTRY_USERNAME, password:REGISTRY_PASSWD}}),
    headers:{
      accept: "application/vnd.docker.distribution.manifest.v2+json"
    },
  };

  const r = await axios.get(`${REGISTRY_ENDPOINT}/v2/${name}/manifests/${tag}`, requestConfig);
  ctx.body = {
    success:true,
    data:{
      name: tag,
      author:'',
      ...r.data.config,
      digest:r.data.config.digest.slice(7),
    }
  };
  return;


});

export default new Router().use('/api', router.routes()).routes();
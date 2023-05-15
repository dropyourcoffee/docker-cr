import Router from "koa-router";
import axios from "axios";
import {AxiosBasicCredentials, AxiosRequestConfig} from "axios";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = {
    success:true,
    data:"hello world"
  };

  return;
});

router.get("/_catalog_list", async (ctx) => {

  try{
    const {
      REGISTRY_ENDPOINT="http://localhost:5000",
      REGISTRY_USERNAME,
      REGISTRY_PASSWD,
    } = process.env;



    const config :AxiosRequestConfig<any> = {
      ...(REGISTRY_USERNAME && REGISTRY_PASSWD)&& ({auth:{username:REGISTRY_USERNAME, password:REGISTRY_PASSWD}})
    };

    const {data: {repositories:repos}} = await axios.get(`${REGISTRY_ENDPOINT}/v2/_catalog`, config);

    const data = await Promise.all(
      repos
        .filter((name:string)=>!name.includes('emp'))
        .map(async(name:any)=>{

          try {
            const {data: {tags}} = await axios.get(`${REGISTRY_ENDPOINT}/v2/${name}/tags/list`, config);
            const tag = tags.includes('latest')? 'latest' : tags[0];
            const r = await axios.get(`${REGISTRY_ENDPOINT}/v2/${name}/manifests/${tag}`, config);

            const { created, author, config:cfg } = JSON.parse(r.data.history[0].v1Compatibility);

            return {
              name,
              author,
              lastUpdate: created,
              tags,
              desc: cfg['Labels']?.['Description'] || undefined
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
      data,
    };
  } catch (e){
    console.error(e);
  }

  return;
});

export default new Router().use('/api', router.routes()).routes();
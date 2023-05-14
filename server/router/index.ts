import Router from "koa-router";
import axios from "axios";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = {
    success:true,
    data:"hello world"
  };

  return;
});

router.get("/_catalog_list", async (ctx) => {

  const {data: {repositories:repos}} = await axios.get("http://localhost:5000/v2/_catalog");


  const data = await Promise.all(
    repos.slice(1).map(async(name:any)=>{
      const {data: {tags}} = await axios.get(`http://localhost:5000/v2/${name}/tags/list`);
      const r = await axios.get(`http://localhost:5000/v2/${name}/manifests/${tags[0]}`);

      const { created } = JSON.parse(r.data.history[0].v1Compatibility);

      return {
        name,
        lastUpdate: created,
        tags
      }
    })
  );


  ctx.body = {
    success:true,
    data,
  };

  return;
});

export default new Router().use('/api', router.routes()).routes();
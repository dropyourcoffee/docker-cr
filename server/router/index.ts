import Router from "koa-router";
import axios from "axios";

const router = new Router();

router.get("/_catalog_list", async (ctx) => {

  const {data: {repositories:repos}} = await axios.get("http://localhost:5000/v2/_catalog");


  const data = await Promise.all(
    repos.slice(1).map(async(name:any)=>{
      const {data: {tags}} = await axios.get(`http://localhost:5000/v2/${name}/tags/list`);
      console.log(`http://localhost:5000/v2/${name}/manifests/${tags[0]}`);
      const r = await axios.get(`http://localhost:5000/v2/${name}/manifests/${tags[0]}`);
      // console.log('l', r.data);
      // console.log('l', r.data.fsLayers);
      console.log(JSON.parse(r.data.history));
      /**
       * [
       {
    blobSum: 'sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4'
  },
       {
    blobSum: 'sha256:9c87f2223d79afcb573adf0d3679686db4e04d28d2449858bbfddc43cb388e59'
  }
       ]

       * */
      // console.log('l', r.data.history);
      /**
       * l [
       {
    v1Compatibility: '{"architecture":"amd64","config":{"Hostname":"","Domainname":"","User":"","AttachStdin":false,"AttachStdout":false,"AttachStderr":false,"Tty":false,"OpenStdin":false,"StdinOnce":false,"Env":["PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"],"Cmd":["/bin/sh"],"Image":"sha256:baa8bc9be71e79212102d8b115831ca5fd07b21812c4ec56e936d9d7f5b5e3e7","Volumes":null,"WorkingDir":"","Entrypoint":null,"OnBuild":null,"Labels":null},"container":"997b7a8d9507333f46c7c0dd0c26e55a74784d52473a33afab520945e672202d","container_config":{"Hostname":"997b7a8d9507","Domainname":"","User":"","AttachStdin":false,"AttachStdout":false,"AttachStderr":false,"Tty":false,"OpenStdin":false,"StdinOnce":false,"Env":["PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"],"Cmd":["/bin/sh","-c","#(nop) ","CMD [\\"/bin/sh\\"]"],"Image":"sha256:baa8bc9be71e79212102d8b115831ca5fd07b21812c4ec56e936d9d7f5b5e3e7","Volumes":null,"WorkingDir":"","Entrypoint":null,"OnBuild":null,"Labels":{}},"created":"2023-03-29T18:19:20.244268709Z","docker_version":"20.10.23","id":"6345b4df1a56cd3d4c113838026df7d6c8546c67b1223cb61654be4fb3b72e96","os":"linux","parent":"e96ade25a971bddbc0634b25df701561d2d90f5519a383db6c4ec9d6cca325d1","throwaway":true}'
  },
       {
    v1Compatibility: '{"id":"e96ade25a971bddbc0634b25df701561d2d90f5519a383db6c4ec9d6cca325d1","created":"2023-03-29T18:19:20.114197394Z","container_config":{"Cmd":["/bin/sh -c #(nop) ADD file:23044999785b10f3877290bd3c9d8db3c9cb1fac8edfb40c775137ab73e0d41d in / "]}}'
  }
       ]

       * */



      return {
        name,
        tags
      }
    })
  );
  console.log('data', data);



  ctx.body = {
    success:true,
    data,
  };

  return;
});

export default router;
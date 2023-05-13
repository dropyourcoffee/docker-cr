import Koa from "koa";
import cors from "@koa/cors";
import apiRoot from "./router";

const App = new Koa();

const {PORT=3000} = process.env;
App.use(cors())
  .use(apiRoot)

  .listen(PORT, ()=>{
    console.log(`Server listening on port, ${PORT}`);
  });


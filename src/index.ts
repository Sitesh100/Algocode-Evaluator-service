import express from "express";
import serverConfig from "./config/serverConfig";

const app = express();

app.listen(serverConfig.PORT, () =>{
    console.log(`Server is running on port ${serverConfig.PORT}`);
    console.log(`hello world`);
 });
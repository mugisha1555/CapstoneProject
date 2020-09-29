import express from 'express';
import createblogRouters from "./routers/createblogRouters";
require ('../server/config/mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(createblogRouters)



export default app
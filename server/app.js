import express from 'express';
import deleteblogRouters from "./routers/deleteblogRouters";
require ('../server/config/mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(deleteblogRouters)



export default app
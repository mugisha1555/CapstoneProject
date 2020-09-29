import express from 'express';
import contactsRouters from "./routers/contactsRouters";

 require ('./config/mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(contactsRouters)



export default app
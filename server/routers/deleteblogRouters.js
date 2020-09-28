import express from 'express';
import deleteblogControllers from "../controllers/deleteblogControllers";

const deleteblogRouters = express.Router();



deleteblogRouters.delete('/blogs/:id',deleteblogControllers.delete)


export default deleteblogRouters
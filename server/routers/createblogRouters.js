import express from 'express';
import createblogControllers from "../controllers/createblogControllers";

const createblogRouters = express.Router();



createblogRouters.post('/blogs',createblogControllers.save)


export default createblogRouters
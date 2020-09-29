import Blog from '../models/createblog'
export default new class createblogControllers {
    async save(req, res){
        try {
            const blog = new Blog(req.body);
            const createdBlog = await blog.save();
            if(createdBlog){
                return res.status(200).send({
                    message:"Article saved Successifully",
                    data:createdBlog
                });
            }
            else
            {
                return res.status(404).send({
                    error:"Article Not Saved!!"
                });
            }
        } catch (error) {
            return res.status(500).send({
                error:error.message
            });
        }

    }


}
 
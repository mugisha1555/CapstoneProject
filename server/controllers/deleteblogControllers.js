import Blog from '../models/deleteblog'
export default new class deleteblogControllers {
    async delete(req, res){
        try {
            const blog = Blog.findOne({_id:req.params.id});
            if(!blog){
                return res.status(404).send({
                    message:"Blog not Found"
                })
            }
            await blog.remove();
            return res.status(400).send({
                message:"Blog removed "
            })

        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
    }

}
import User from '../models/user'
export default new class userControllers {
    async getbyId(req, res){
        try {
            const user = await User.findOne({_id:req.params.id});
            if(user){
                return res.status(200).send({
                    message: 'User Found',
                    data: {
                        user
                    }})
            }
            else
            {
                return res.status(400).send({
                    message: 'Invalid user'
                })
            }
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
    }

}
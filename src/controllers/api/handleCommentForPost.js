const handleCommentForPost = (req, res) => {
    //get comment msg from req body
    //insert new comment with the userId and postId
    //Comment.create({message, user_id, post_id})
    //post body you get from req.params
    res.json("insert comment to comment table with all data") 
};

module.exports = handleCommentForPost;

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
  
  res.send("This Works");
}

export const createPost = () => {
  res.send("Post Creation");
}

//export default getPosts;
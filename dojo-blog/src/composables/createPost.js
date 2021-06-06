import { ref } from 'vue';

const createPost = id => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await post('http://localhost:3000/posts/');
      if (!data.ok) {
        throw Error('that post does not exist');
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.message);
    }
  };
  return { post, error, load };
};

export default createPost;

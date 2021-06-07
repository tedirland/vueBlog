import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPost = id => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection('posts').get();
      console.log(res);
    } catch (err) {
      error.value = err.message;
      console.log(error.message);
    }
  };
  return { post, error, load };
};

export default getPost;

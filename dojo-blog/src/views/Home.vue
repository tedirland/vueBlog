<template>
  <div class="home">
<h1>Home</h1>
<PostList v-if="showPosts" :posts="posts" />
<button @click="showPosts = !showPosts">toggle posts</button>
<button @click="posts.pop()">delete a post</button>
<p></p>
  </div>
</template>

<script>
import { ref} from 'vue'
import PostList from '../components/PostList.vue'


export default {
  name: 'Home',
  components: {PostList},
  setup() {

 const posts = ref([
   {title: 'welcome to the blog', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quos voluptas recusandae, facilis cumque fugit! Esse quam repellat necessitatibus possimus nisi autem modi, recusandae fugiat deleniti nihil tempora tenetur natus sint animi, delectus dicta blanditiis cumque voluptatum! Laudantium dicta eveniet aliquam. Optio nihil commodi iste placeat, dignissimos deserunt cum, architecto expedita nemo neque, beatae eos omnis deleniti rerum dolorum earum corporis. Dolores, totam? Quasi, natus? Blanditiis, dolorum quisquam deserunt reprehenderit quidem minus nemo harum sunt totam quaerat nostrum. Temporibus quia dicta eaque ducimus eligendi aliquid voluptas corporis praesentium? A voluptatum architecto corrupti officiis adipisci alias dolorum neque necessitatibus itaque maiores?' , id: 1},
   {title: 'top 5 css tips', body: 'Lorem psum', id: 2},

 ])



 const showPosts = ref(true)

 return {posts, showPosts }
  },


  }

</script>

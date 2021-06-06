<template>
 <div class="home">
<h1>Tags</h1>
<div v-if="error">{{error}}</div>
<div v-if="posts.length"><PostList :posts="posts"  /></div>
<div v-else><Spinner /></div>
 </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
export default {
  components: {PostList},

  setup() {
    const {posts, error, load} = getPosts()
    load() //I assume we pass the tag here

    return {posts, error}
  }

}
</script>

<style>

</style>

<template>
 <div class="tag">
<div v-if="error">{{error}}</div>
<div v-if="posts.length"><PostList :posts="postsByTag"  /></div>
<div v-else><Spinner /></div>
 </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import {useRoute} from 'vue-router'
import { computed } from '@vue/runtime-core'
export default {
  components: {PostList, Spinner},

  setup() {
    const route = useRoute()
    const {posts, error, load} = getPosts()
    load()

    const postsByTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })
    //I assume we pass the tag here

    return {posts, error, postsByTag}
  }

}
</script>

<style>

</style>

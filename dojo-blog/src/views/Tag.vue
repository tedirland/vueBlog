<template>
 <div class="tag">
<div v-if="error">{{error}}</div>
<div v-if="posts.length" class="layout">
  <PostList :posts="postsByTag"  />
  <TagCloud :posts='postsByTag' />
  </div>
<div v-else><Spinner /></div>

 </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import {useRoute} from 'vue-router'
import { computed } from '@vue/runtime-core'
export default {
  components: {PostList, Spinner, TagCloud},

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
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>

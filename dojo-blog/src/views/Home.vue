<template>
  <div class="home">
<h1>Home</h1>
<input type="text" v-model="search">
<p>Search Term: {{search}}</p>
<div v-for="name in matchingNames" :key="name">{{name}}</div>
<button @click="handleClick">Stop Watching</button>

  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-dom'
// @ is an alias to /src


export default {
  name: 'Home',
  setup() {

  const search = ref('')
  const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

  const stopWatch = watch(search, () => {
    console.log('watch function run')
  })

//Most common usecase is to get data from a database
  const stopEffect = watchEffect(() => {
    console.log('watchEffect function ran', search.value)
  })

  const handleClick = () => {
    stopWatch()
    stopEffect()


  }

  const matchingNames = computed(() => {
    return names.value.filter((name) => name.includes(search.value))
  })

 return {names,search,matchingNames, handleClick }
  },


  }

</script>

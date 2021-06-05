<template>
  <div class="home">
<h1>Home
  <p ref="p">My name is {{name}} and my age is {{age}}</p>
  <button @click="handleClick">Click meh</button>
  <button @click="age++">Add 1 to age</button>
  <input type="text" v-model="name">

</h1>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
// @ is an alias to /src


export default {
  name: 'Home',
  setup() {

  const p  = ref('hello')
  const name = ref('mario')
  console.log(name)
  const age = ref(30)

  const handleClick = () => {
   name.value=' luigi'
   age.value = 35

  }

  return {name, age, handleClick, p}
  },


  }

</script>

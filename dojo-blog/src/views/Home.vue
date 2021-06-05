<template>
  <div class="home">
<h1>Home
  <p>My name is {{name}} and my age is {{age}}</p>
  <button @click="handleClick">Click meh</button>

</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  setup() {
  let name = 'mario'
  let age = 30

  const handleClick = () => {
    console.log('you clicked meh bruh')
  }

  return {name, age, handleClick}
  },


  }

</script>

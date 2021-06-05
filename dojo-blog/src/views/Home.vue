<template>
  <div class="home">
<h1>Home</h1>
<h2>Refs</h2>
<p>{{ninjaOne.name}} - {{ninjaOne.age}}</p>
<button @click="updateNinjaOne">Update Ninja One</button>
<h2>Reactive</h2>
<p>{{ninjaTwo.name}} {{ninjaTwo.age}} - {{nameTwo}}</p>
<button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
import { vModelRadio } from '@vue/runtime-dom'
// @ is an alias to /src


export default {
  name: 'Home',
  setup() {

 const ninjaOne = ref({name: 'mario', age:30})
 //Drawbacks to using reactive:
 //Can't do this: (can't use primitive values w/ reactives)
 const nameTwo = reactive('luigi')

 const nameOne = ref('mario')
 const ninjaTwo = reactive({name: 'luigi', age: 35})

 const updateNinjaOne = () => {
   ninjaOne.value.age = 40
 }
 const updateNinjaTwo = () => {
   ninjaTwo.age=45
   nameTwo = "mario"
 }
 return {ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameOne, nameTwo}
  },


  }

</script>

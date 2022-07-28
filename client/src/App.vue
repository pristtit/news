<template>
  <div>
    <h2>{{ author?.authors.map(item => item.name) }}</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="name" type="text" placeholder="name">
      <button @click="creteAuthor" >create</button>
      <input v-model="id" type="text" placeholder="name">
      <button @click="delAuthor" >del</button>
    </form> 
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      author: null,
      name: null,
      id: null,
    }
  },
  async created() {
    let author = await fetch('http://localhost:1337/authors/get/');
    this.author = await author.json();
  },

  methods: {
    async creteAuthor() {
      await fetch('http://localhost:1337/authors/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name
        })
      });
    },

    async delAuthor() {
      await fetch(`http://localhost:1337/authors/delete/${ this.id }`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      this.id = '';
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

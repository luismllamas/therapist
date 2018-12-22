<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p>{{message}}</p>
      <button v-on:click="reverseMessage">
      Reverse Message Button
      </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    message: String
  },
  methods: {
  reverseMessage: function(){
    this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

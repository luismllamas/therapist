<template>
<div id="app">
  <img alt="Eliza logo" height="120" src="./assets/logo.png" >
  <div class="chatter">
    <p>Hi, I'm Eliza, your online therapist. What do you want to talk about?</p>
    <div class="controls">
      <input type="text" placeholder="Write here" v-model="message" @keyup.enter="userMessage"/>
      <button v-on:click="userMessage">Send</button>
    </div>
    <div class="messages">
      <div class="message" v-for="message in messages" :key="message.id">
        <p><strong>{{message.sender}}</strong>: {{message.text}} </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      robot: 'Eliza',
      user: 'You',
      messages: [],
      message: null
      }
    },
  methods: {
    userMessage: function() {
      this.sendMessage(this.user, this.message)
      this.parseMessage()
      this.message = null
    },
    robotMessage: function (message, timeout=400) {
      window.setTimeout(()=>{
        this.sendMessage(this.robot, message)
      }, timeout);
    },
    sendMessage: function (sender, message) {
      this.messages.unshift({
        'sender': sender,
        'text': message
      })
    },
    parseMessage: function () {
      if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
        this.robotMessage('I\'m fine thank you.')
      if(this.match('bingo!'))
        this.robotMessage('ding, ding, ding! We have a winner')
    },
    match: function (regex) {
      return new RegExp(regex).test(this.message.toLowerCase())
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
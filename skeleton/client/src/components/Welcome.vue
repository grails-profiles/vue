<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <a href="#" v-on:click="toggleLinks">{{showLinks ? 'View Application Status' : 'View Community Links'}}</a>
    <br/>
    <hr/>

    <div v-if="!showLinks">
      <h2>Application Status</h2>


      <ul v-if="!showLinks">
        <li>Environment: <strong>{{ serverInfo ? serverInfo.environment : 'Loading' }}</strong></li>
        <li>App Profile: <strong>{{ serverInfo ? serverInfo.appprofile : 'Loading' }}</strong></li>
        <br/>
        <li>App version: <strong>{{ serverInfo ? serverInfo.appversion : 'Loading' }}</strong></li>
        <li>Grails version: <strong>{{ serverInfo ? serverInfo.grailsversion : 'Loading' }}</strong></li>
        <br/>
        <li>Groovy version: <strong>{{ serverInfo ? serverInfo.groovyversion : 'Loading' }}</strong></li>
        <li>JVM version: <strong>{{ serverInfo ? serverInfo.jvmversion : 'Loading' }}</strong></li>
        <li>Reloading: <strong>{{ serverInfo ? serverInfo.reloadingagentenabled ? 'active' : 'inactive' : null}}</strong>
        </li>
      </ul>
      <br/>
      <h2>Artefacts</h2>
      <ul>
        <li>Controllers: <strong>{{ serverInfo ? serverInfo.artefacts.controllers : 'Loading' }}</strong></li>
        <li>Domains: <strong>{{ serverInfo ? serverInfo.artefacts.domains : 'Loading' }}</strong></li>
        <li>Services: <strong>{{ serverInfo ? serverInfo.artefacts.services : 'Loading' }}</strong></li>
      </ul>
      <br/>
      <h2>Installed Plugins</h2>
      <ul v-if="serverInfo">
        <li v-for="plugin in serverInfo.plugins">
          {{ plugin.name }} - {{ plugin.version }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data () {
      return {
        msg: 'Welcome to Your Grails & Vue.js App',
        serverInfo: null,
        showLinks: false,
        serverURL: process.env.SERVER_URL
      }
    },
    methods: {
      toggleLinks: function () {
        this.$data.showLinks = !this.$data.showLinks
      }
    },
    created: function () {
      this.$http.get(`${this.$data.serverURL}/application`).then(response => {
        this.$data.serverInfo = response.body
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 800px;
    margin: 0 auto;
  }

  h1, h2 {
    font-weight: normal;
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br/>
    <h2>Application Status</h2>
    <ul>
      <li>Environment: <strong>{{ serverInfo ? serverInfo.environment : 'Loading' }}</strong></li>
      <li>App Profile: <strong>{{ serverInfo ? serverInfo.appprofile : 'Loading' }}</strong></li>
      <br/>
      <li>App version: <strong>{{ serverInfo ? serverInfo.appversion : 'Loading' }}</strong></li>
      <li>Grails version: <strong>{{ serverInfo ? serverInfo.grailsversion : 'Loading' }}</strong></li>
      <br/>
      <li>Groovy version: <strong>{{ serverInfo ? serverInfo.groovyversion : 'Loading' }}</strong></li>
      <li>JVM version: <strong>{{ serverInfo ? serverInfo.jvmversion : 'Loading' }}</strong></li>
      <li>Reloading: <strong>{{ serverInfo ? serverInfo.reloadingagentenabled ? 'active' : 'inactive' : null }}</strong>
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
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Grails & Vue.js App',
        serverInfo: null
      }
    },
    created: function () {
      this.$http.get('http://localhost:8080/application').then(response => {
        this.$data.serverInfo = response.body
      }, response => {
        console.warn(response)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

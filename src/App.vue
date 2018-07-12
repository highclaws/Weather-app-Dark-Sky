<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <a class="navbar-brand" href="#"> Chaine Météo (Dark Sky API)</a>
      <div>
        <router-link to="/home" class="navbar-brand text-white">Home</router-link></a> 
       <router-link to="/weather" class="navbar-brand text-white">Weather</router-link></a> 
        <router-link to="/about" class="navbar-brand text-white">About</router-link></a> 
      </div>
    </nav>

    <main class="container mt-2">
      <router-view/>
    </main>
  </div>
</template>

<style>
h1 {
  color: aliceblue;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/edu">Education</router-link> |
    <router-link to="/interest">Interest</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/guestbook">Guestbook</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
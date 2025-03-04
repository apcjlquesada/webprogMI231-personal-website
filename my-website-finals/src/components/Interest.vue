<template>
  <div>
    <h4>Interest</h4>
    <div class="content-container">
      <div class="content">
        <section id="hobbies">
          <h2>Hobbies & Interests</h2>
          <ul>
            <li>Reading manhuas, mangas, etc</li>
            <li>Watching different kinds of shows and movies</li>
            <li>Solving puzzles</li>
            <li>Digital and traditional drawing</li>
            <li>Travel and spend quality time with my family</li>
          </ul>
        </section>
      </div>

      <div class="content">
        <section id="goals">
          <h2>Goals In Life / Dream</h2>
          <p>
            My goal in life is to finish and graduate college. I also aim to
            find a stable job to support myself and my family. I wish to have
            sufficient resources to build my own house and travel abroad in the
            future.
          </p>
        </section>
      </div>
    </div>

    <div class="menu-container" :class="{ open: isMenuOpen }">
      <div class="menu-button" @click="toggleMenu"></div>
      <div class="menu-items">
        <router-link to="/" class="menu-item">🏠</router-link>
        <router-link to="/edu_exp" class="menu-item">🎓</router-link>
        <router-link to="/interest" class="menu-item">❤️</router-link>
        <router-link to="/gallery" class="menu-item">🖼️</router-link>
        <router-link to="/guestbook" class="menu-item">📝</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
body {
    margin: 0;
    font-family: "Baskerville", serif;
    background: url('https://github.com/MarielleKloieAPC/webprogMI231-personal-website-1/blob/feature/website_finals/home/images/Home3.png?raw=true') center/cover no-repeat;
    min-height: 100vh;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-attachment: fixed;
}

.content-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1200px;
    margin-top: 20px;
}

.content {
    background: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 10px;
    max-width: 40vw;
    width: 40%;
    margin: 20px;
    overflow-y: auto;
    box-sizing: border-box;
}

/* Typography Styles */
section h2, h3, h4, p, li, .paragraph {
    font-family: "Baskerville", serif;
    color: white;
}

section h2 {
    font-size: 20px;
    text-align: left;
}

h1 {
    border-radius: 2px;
    text-align: center;
    padding: 20px;
    margin: 30px 0 40px;
}

h2 {
    border-radius: 2px;
    padding: 10px;
    text-align: left;
    font-size: 20px;
}

h3 {
    padding: 5px;
    margin: 10px 0 0;
    text-align: left;
    font-size: 20px;
}

h4 {
    border-radius: 2px;
    padding: 30px;
    margin: 10px 0 0 10px;
    text-align: center;
    font-size: 30px;
}

p, .paragraph {
    font-size: 15px;
    text-align: justify;
    margin: 30px;
    line-height: 1.5;
}

.paragraph {
    text-align: left;
    margin: 4px 15px 12px;
}

ul {
    list-style-type: square;
}

li {
    margin-top: 10px;
    font-size: 15px;
    text-align: left;
}

/* Floating Menu Styles */
.menu-container {
    position: fixed;
    top: 50px;
    right: 20px;
    z-index: 20;
    transform: translateX(-50%);
}

.menu-button {
    width: 50px;
    height: 50px;
    background-color: #17153b;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
}

.menu-button::before {
    content: "\2729";
    color: white;
}

.menu-button.active {
    transform: rotate(45deg);
}

.menu-items {
    position: absolute;
    top: 70px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.menu-container.open .menu-items {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.menu-item {
    width: 50px;
    height: 50px;
    background-color: #17153b;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.menu-item:hover {
    background-color: #2e295f;
    transform: scale(1.1);
}
</style>
<template>
  <div>
    <h4>Education & Experience</h4>
    <div class="content-container">
      <div class="content">
        <section id="education">
          <h2>Education / Achievements</h2>
          <ul class="a">
            <li>
              <h3>Asia Pacific College</h3>
              <p class="paragraph">College</p>
              <p class="paragraph">BS on Information Technology</p>
              <p class="paragraph">August 2023 – Current.</p>
              <p class="paragraph">Magallanes, Makati</p>
            </li>
            <li>
              <h3>Asia Pacific College</h3>
              <p class="paragraph">Senior High School</p>
              <p class="paragraph">August 2021 – June 2023.</p>
              <p class="paragraph">Magallanes, Makati</p>
            </li>
            <li>
              <h3>St. Theodore School Inc.</h3>
              <p class="paragraph">Junior High School</p>
              <p class="paragraph">June 2017 – March 2021</p>
              <p class="paragraph">Lower Bicutan, Taguig City</p>
            </li>
          </ul>
        </section>
      </div>

      <div class="content">
        <section id="course">
          <h2>Course</h2>
          <p>
            BSIT-MI, Bachelor of Science in Information Technology with
            specialization in Mobile and Internet Technologies
          </p>
        </section>
        <section id="experience">
          <h2>IT Experience</h2>
          <ul class="a">
            <li>Knowledgeable in Mobile Programming in Android Studio</li>
            <li>Experience in developing User Interface</li>
          </ul>
        </section>
      </div>
    </div>

    <div class="menu-container" :class="{ open: isMenuOpen }">
      <div class="menu-button" @click="toggleMenu"></div>
      <div class="menu-items">
        <a href="index.html" class="menu-item">🏠</a>
        <a href="edu_exp.html" class="menu-item">🎓</a>
        <a href="interest.html" class="menu-item">❤️</a>
        <a href="gallery.html" class="menu-item">🖼️</a>
        <a href="guestbook.html" class="menu-item">📝</a>
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

/* Content Layout */
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
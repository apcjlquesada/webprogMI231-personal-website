<template>
  <div class="background background1"></div>
  <div class="background background2"></div>

  <div class="section section1">
    <div class="center-image">
      <img
        src="https://github.com/MarielleKloieAPC/webprogMI231-personal-website-1/blob/feature/website_finals/home/images/port_pic.png?raw=true"
        alt="Your Image Here"
      />
    </div>
  </div>

  <div class="section section2">
    <div class="content">
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello! My username is MarielleKloie, this is my personal profile web
          page.<br /><br />I aspire to be an Information Technology Specialist, a
          position that can hone me into the best employee I can be, versatile
          and efficient enough to be showcased in the industry today. Being in
          a working environment will encourage me to be confident and true to
          myself.
        </p>
      </section>
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
      isSection2Triggered: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      const section1 = document.querySelector(".section1");
      const section2 = document.querySelector(".section2");

      const section1Bottom = section1.getBoundingClientRect().bottom;

      if (section1Bottom < window.innerHeight / 2) {
        this.isSection2Triggered = true;
      } else {
        this.isSection2Triggered = false;
      }
    },
  },
  computed: {
    bodyClasses() {
      return {
        "section2-triggered": this.isSection2Triggered,
      };
    },
  },
  provide() {
    return {
      isSection2Triggered: this.isSection2Triggered
    }
  }
};
</script>

<style scoped>
body {
    margin: 0;
    font-family: "Baskerville", serif;
    min-height: 100vh;
    color: white;
    position: relative;
}

/* Content Styles */
.content {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 90%;
    margin: 20px auto;
    overflow-y: auto;
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
    margin: 10px 0 0 10px;
    text-align: left;
    font-size: 30px;
}

h3 {
    padding: 5px;
    margin: 10px 0 0;
    text-align: left;
    font-size: 20px;
}

h4 {
    border-radius: 2px;
    padding: 15px;
    margin: 10px 0 0 10px;
    text-align: center;
    font-size: 20px;
    color: #4a2a80;
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

/* Reset Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fixed Backgrounds */
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    transition: opacity 0.7s ease-in-out;
}

/* Background Images */
.background1 {
    background-image: url('https://github.com/MarielleKloieAPC/webprogMI231-personal-website-1/blob/feature/website_finals/home/images/Home1.png?raw=true');
}

.background2 {
    background-image: url('https://github.com/MarielleKloieAPC/webprogMI231-personal-website-1/blob/feature/website_finals/home/images/Home2.png?raw=true');
}

/* Content Sections */
.section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Arial, sans-serif;
    color: white;
    position: relative;
    z-index: 1;
    width: 100%;
}

/* Background Switching on Scroll */
.section2-triggered .background1 {
    opacity: 1;
}

.section2-triggered .background2 {
    opacity: 1;
}

.section2 {
    position: relative;
    text-align: center;
    padding-bottom: 60px;
}

/* Adjusted Content Box for Section 2 */
.section2 .content {
    margin-top: 90px;
    margin-left: 25%;
    margin-right: 30%;
}

/* Background Opacity for Non-Triggered Section 2 */
body:not(.section2-triggered) .background2 {
    opacity: 0;
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

/* Center Image and Adjust Size */
.center-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.center-image img {
    max-width: 100vw;
    max-height: 100vh;
    width: auto;
    height: auto;
    display: block;
}
</style>
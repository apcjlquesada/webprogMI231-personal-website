<template>
  <div>
    <div class="content">
      <h2>Gallery</h2>
      <div class="gallery-container">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="Gallery Image"
          class="gallery-image"
          @click="enlargeImage(image)"
        />
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
    <div class="overlay" :class="{ active: showOverlay }" @click="closeEnlarged">
      <img v-if="enlargedImage" :src="enlargedImage" class="gallery-image enlarged" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(1).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(2).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(3).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(4).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(5).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(6).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(7).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(8).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(9).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(10).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(11).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(12).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(13).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(14).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(15).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(16).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(17).jpg",
        "https://github.com/MarielleKloieAPC/webprogMI231-personal-website-finals/raw/feature/website_finals/home/images/gallery/Image%20(18).jpg",
      ],
      isMenuOpen: false,
      enlargedImage: null,
      showOverlay: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    enlargeImage(imageSrc) {
      this.enlargedImage = imageSrc;
      this.showOverlay = true;
    },
    closeEnlarged() {
      this.enlargedImage = null;
      this.showOverlay = false;
    },
  },
};
</script>

<style scoped>
    /* Image Styles */
    .gallery-image {
        width: 100%; /* Make images responsive within their grid cell */
        height: auto;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.3s ease;
        margin: 5px;
        border: 2px solid transparent;
        object-fit: contain; /* Maintain aspect ratio */
        max-width: 300px; /* Prevent images from becoming too large */
        max-height: 300px;
    }

    .gallery-image:hover {
        border-color: #cfc6e1;
    }

    .gallery-image.enlarged {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        max-width: 90vw; /* Adjust percentage as needed */
        max-height: 90vh;
        width: auto;
        height: auto;
    }

    /* Modal Overlay (Optional, for background dimming when enlarged) */
    .overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 300%;
        height: 300%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 999;
        cursor: pointer;
}

    .overlay.active {
        display: block;
    }

    /* Gallery Container */
    .gallery-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 5px;
        margin-top: 20px;
    }


    body {
        margin: 0;
        font-family: "Baskerville", serif;
        background: url('https://github.com/MarielleKloieAPC/webprogMI231-personal-website-1/blob/feature/website_finals/home/images/Home3.png?raw=true') center/cover no-repeat;
        min-height: 100vh;
        color: white;
        position: relative;
        background-attachment: fixed;
    }

    .content {
        background: rgba(0, 0, 0, 0.5);
        padding: 20px;
        border-radius: 10px;
        max-width: 1000px;
        width: 90%;
        margin: 20px auto;
        overflow-y: auto;
    }

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

    p,.paragraph {
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
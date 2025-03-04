<template>
  <div>
    <h4>Guestbook</h4>
    <div class="content-container">
      <div class="content-form">
        <section id="comments-form">
          <form @submit.prevent="submitEntry">
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="newEntry.name" required />
            </div>
            <div>
              <label for="message">Comments:</label>
              <textarea id="message" v-model="newEntry.message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>

      <div class="content">
        <section id="comments">
          <strong v-if="entry.name">{{ entry.name }}:</strong><br />
          {{ entry.message }}
        </section>
      </div>
    </div>

    <div class="menu-container" :class="{ open: menuOpen }">
      <div class="menu-button" @click="toggleMenu" :class="{ active: menuActive }"></div>
      <div class="menu-items">
        <router-link to="/" class="menu-item">🏠</router-link>
        <router-link to="/edu_exp" class="menu-item">🎓</router-link>
        <router-link to="/interest" class="menu-item">❤️</router-link>
        <router-link to="/gallery" class="menu-item">🖼️</router-link>
        <router-link to="/guestbook" class="menu-item">📝</router-link>
      </div>
    </div>

    <div id="successModal" class="modal" v-if="showModal">
      <div class="modal-content">
        <p>Message successfully submitted!</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { supabase } from '../supabaseClient';

export default {
  setup() {
    const name = ref('');
    const message = ref('');
    const guestbookEntries = ref([]);

    const addMessage = async () => {
      await supabase.from('guestbook').insert([{ name: name.value, message: message.value }]);
      name.value = '';
      message.value = '';
      fetchMessages();
    };

    const fetchMessages = async () => {
      const { data } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false });
      guestbookEntries.value = data;
    };

    onMounted(fetchMessages);

    return { name, message, guestbookEntries, addMessage };
  },
};
</script>
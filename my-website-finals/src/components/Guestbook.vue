<template>
  <div>
    <h2>Guestbook</h2>
    <form @submit.prevent="addMessage">
      <input v-model="name" placeholder="Name" />
      <textarea v-model="message" placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
    <ul>
      <li v-for="entry in guestbookEntries" :key="entry.id">
        {{ entry.name }}: {{ entry.message }}
      </li>
    </ul>
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
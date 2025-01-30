  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const comments = ref([])

  async function getComments() {
    const { data } = await supabase.from('comments').select()
    comments.value = data
  }

  onMounted(() => {
    getComments()
  })
  </script>

  <template>
  <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }} </li>
    </ul>
  <h2>comments</h2>
  </template>
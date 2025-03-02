import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sczhptobsckhkricuxnh.supabase.co'; // Replace with your actual URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjemhwdG9ic2NraGtyaWN1eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTI4MTEsImV4cCI6MjA1NjQ2ODgxMX0.NWPH8WpZlZPbSld9vWFNgrFbvvsDRcSZpPANUPIFaCs'; // Replace with your actual key
const supabase = createClient(https://sczhptobsckhkricuxnh.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjemhwdG9ic2NraGtyaWN1eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTI4MTEsImV4cCI6MjA1NjQ2ODgxMX0.NWPH8WpZlZPbSld9vWFNgrFbvvsDRcSZpPANUPIFaCs);

createApp({
    data() {
        return {
            newEntry: { name: '', message: '' },
            entries:,
        };
    },
    async mounted() {
        await this.fetchEntries();
    },
    methods: {
        async fetchEntries() {
            // Supabase logic will go here later
        },
        async submitEntry() {
            // Supabase logic will go here later
        },
    },

    async fetchEntries() {
        const { data, error } = await supabase.from('guestbook').select('*');
        if (error) {
            console.error(error);
        } else {
            this.entries = data;
        }
    },
    async submitEntry() {
        const { error } = await supabase.from('guestbook').insert([this.newEntry]);
        if (error) {
            console.error(error);
        } else {
            this.newEntry = { name: '', message: '' };
            await this.fetchEntries();
        }
    },
}).mount('#app');
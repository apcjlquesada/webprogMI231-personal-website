const { createApp } = Vue;
const { createClient } = supabase;

const supabaseUrl = 'https://sczhptobsckhkricuxnh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjemhwdG9ic2NraGtyaWN1eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTI4MTEsImV4cCI6MjA1NjQ2ODgxMX0.NWPH8WpZlZPbSld9vWFNgrFbvvsDRcSZpPANUPIFaCs';

const supabaseClient = createClient(supabaseUrl, supabaseKey);


createApp({
    data() {
        return {
            newEntry: { name: '', message: '' },
            entries: [],
            menuOpen: false, // Add menuOpen property
            menuActive: false, // Add menuActive property
        };
    },
    async mounted() {
        await this.fetchEntries();
    },
    methods: {
        async fetchEntries() {
            // ... (your fetchEntries logic) ...
        },
        async submitEntry() {
            // ... (your submitEntry logic) ...
        },
        closeModal() {
            // ... (your closeModal logic) ...
        },
        toggleMenu() { // Add toggleMenu method
            this.menuOpen = !this.menuOpen;
            this.menuActive = !this.menuActive;
        },
    },
}).mount('#app');
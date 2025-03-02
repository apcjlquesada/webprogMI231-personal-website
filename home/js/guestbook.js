const { createApp } = Vue;
const { createClient } = supabase;

const supabaseUrl = 'https://sczhptobsckhkricuxnh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjemhwdG9ic2NraGtyaWN1eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTI4MTEsImV4cCI6MjA1NjQ2ODgxMX0.NWPH8WpZlZPbSld9vWFNgrFbvvsDRcSZpPANUPIFaCs';

const supabaseClient = createClient(supabaseUrl, supabaseKey);


createApp({
    data() {
        return {
            newEntry: { name: '', message: '' },
            entries: "",
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
            const { error } = await supabaseClient.from('guestbook').insert([this.newEntry]);
            if (error) {
                console.error(error);
            } else {
                this.newEntry = { name: '', message: '' };
                await this.fetchEntries();

                // Show the modal
                document.getElementById("successModal").style.display = "block";

                // Close the modal after a delay (e.g., 3 seconds)
                setTimeout(() => {
                    this.closeModal();
                }, 3000); 
            }
        },
        closeModal() { // closeModal is now inside methods
            document.getElementById("successModal").style.display = "none";
        }
    },
}).mount('#app');
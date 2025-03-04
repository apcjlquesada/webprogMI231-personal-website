

const { createApp } = Vue;
const { createClient } = supabase;

const supabaseUrl = 'https://sczhptobsckhkricuxnh.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjemhwdG9ic2NraGtyaWN1eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTI4MTEsImV4cCI6MjA1NjQ2ODgxMX0.NWPH8WpZlZPbSld9vWFNgrFbvvsDRcSZpPANUPIFaCs'; // Replace with your Supabase Key

const supabaseClient = createClient(supabaseUrl, supabaseKey);

createApp({
    data() {
        return {
            newEntry: { name: '', message: '' },
            entries: [],
            menuOpen: false,
            menuActive: false,
        };
    },
    async mounted() {
        await this.fetchEntries();
    },
    methods: {
        async fetchEntries() {
            const { data, error } = await supabaseClient.from('guestbook').select('*');
            if (error) {
                console.error(error);
            } else {
                this.entries = data;
            }
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
        closeModal() {
            document.getElementById("successModal").style.display = "none";
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
            this.menuActive = !this.menuActive;
        },
    },
}).mount('#app');

document.addEventListener("DOMContentLoaded", function () {
            const menuButton = document.getElementById("menuButton");
            const menuContainer = document.querySelector(".menu-container");

            menuButton.addEventListener("click", function () {
                menuContainer.classList.toggle("open");
                menuButton.classList.toggle("active");
            });
        });

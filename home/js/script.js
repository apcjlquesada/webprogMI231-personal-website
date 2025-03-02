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
            }
        },
    },
}).mount('#app');

window.addEventListener('scroll', function() {
    const triggerPoint = window.innerHeight / 2;
    const section2 = document.querySelector('.section2');
    if (section2.getBoundingClientRect().top < triggerPoint) {
        document.body.classList.add('section2-triggered');
    } else {
        document.body.classList.remove('section2-triggered');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuContainer = document.querySelector(".menu-container");

    menuButton.addEventListener("click", function () {
        menuContainer.classList.toggle("open");
        menuButton.classList.toggle("active");
    });
});
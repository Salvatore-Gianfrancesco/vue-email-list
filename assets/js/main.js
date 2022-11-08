const { createApp } = Vue;

createApp({
    data() {
        return {
            max: 100,
            emails: [],
        }
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < this.max; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    // console.log(response.data.response);
                    this.emails.push(response.data.response);
                })

        }
    }
}).mount('#app');
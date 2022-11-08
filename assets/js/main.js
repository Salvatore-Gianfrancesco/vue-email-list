const { createApp } = Vue;

createApp({
    data() {
        return {
            max: 10,
            emails: [],
            tempArr: []
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
                    this.tempArr.push(response.data.response);
                    if (this.tempArr.length === this.max) {
                        this.emails = this.tempArr;
                    }
                })

        }
    }
}).mount('#app');
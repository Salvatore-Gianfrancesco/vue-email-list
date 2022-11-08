const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: null,
            tempArr: []
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    // console.log(response.data.response);
                    this.tempArr.push(response.data.response);
                })
        }
        // console.log(this.tempArr);

        this.emails = this.tempArr;
        // console.log(this.emails);
    }
}).mount('#app');
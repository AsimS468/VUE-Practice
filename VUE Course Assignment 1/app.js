const app = Vue.createApp({
    data() {
        return {
            myName: 'Asim',
            myAge: 20,
            myAgePlusFive: 20 + 5,
            favNum: 'Favorite Number: ' + Math.random(),
            imgLink: 'icon.png'
        };
    }
});
app.mount('#assignment');
const app = Vue.createApp({
    data() {
        return {
            title: `Contador Vuew Js`,
            count: 0
        }
    },
    methods: {
        modCount(instruccion = "add", limit = 1) {
            if (instruccion === "less") {
                this.count -= limit;
            } else {
                this.count += limit;
            }
        }
    }

})
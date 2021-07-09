const app = Vue.createApp({
    data() {
        return {
            user: {
                title: "Hola Mundo desde Vue",
                name: "Marco Antonio Barrios Molina",
                age: 100
            },
            movies: [
                "Volver al futuro 1",
                "Rocky 2",
                "Rapido y Furioso 4"
            ],
            url: "https://www.chinelo.io",
            img: "https://scontent.fcvj2-1.fna.fbcdn.net/v/t1.6435-9/55443343_1754524011314187_7245656454516965376_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHJQccLAJyxdipZCH37DJiQDHHLV2iQJUgMcctXaJAlSEHBlOqLsHZb4A1LqAMst_2EpoPsJQDniATK0SVHC442&_nc_ohc=sRkojsiP8pIAX-CxxsI&_nc_ht=scontent.fcvj2-1.fna&oh=28dc70e981e93edbe7abd92a1658d916&oe=60ECAA3C",
            // classVue: "good"
            classVue: "error"
        }
    }
})
Vue.createApp({
  data() {
    return {
      test: "Hello world",
    };
  },
  methods: {},
  created: function () {},
})
  .use(Vuetify.createVuetify())
  .mount("#app");

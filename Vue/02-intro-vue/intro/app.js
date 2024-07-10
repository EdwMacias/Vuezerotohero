const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref("I'm Batman");
      const author = ref("Bruce Wayne");


    const changeQuote = () => {
        message.value = "Soy Goku";
        author.value = "Kakaroto";
    }

      //setTimeout(() => {
      //  message.value = "Soy Goku";
      //  author.value = "GOKU";
      //}, 2000);
      return {
        message, author, changeQuote
      }
    }
  }).mount('#app')
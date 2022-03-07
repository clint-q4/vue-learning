const FlashcardApp = {
  data() {
    return {
      deckName: 'Vue.js Fundamentals',
      cards: cards,
      flipped: false,
      readMoreUrl: 'https://blog.vuejs.org/posts/vue-3-as-the-new-default.html',
      userInput: 'default'
    }
  }
};

const app = Vue.createApp(FlashcardApp).mount('#app');
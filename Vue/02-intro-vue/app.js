const originalQuotes = [
  { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
  { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
  { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
  { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

const { createApp, ref, computed } = Vue;

const app = createApp({

  setup(){
    const newMesssage = ref('');
    const showAuthor = ref(false);
    const quotes = ref(originalQuotes);
    const totalQuotes = computed(() => quotes.value.length);
    const toggleAuthor = () => {
      showAuthor.value = !showAuthor.value
    };

    const addQuote = () => {
      if (newMesssage.value === '') {
        alert('Please enter a quote');
        return;
      }
      quotes.value.unshift({ quote: newMesssage.value, author: 'Batman' });
      newMesssage.value = '';
      console.log(quotes);
    };
    
    return {
      quotes, showAuthor, toggleAuthor, addQuote, totalQuotes, newMesssage
    }
  }
}).mount('#myApp')
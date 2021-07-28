Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    currentIndex: 0,
    images: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'],
  },
  methods: {
    isActive(index) {
      return this.currentIndex === index ? 'active' : '';
    },
    toLeftIndex() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    toRightIndex() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
});
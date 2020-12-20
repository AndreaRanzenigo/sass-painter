//Main JS
import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data: {
        indexPhoto: 0,
        slide: [
            './img/before-04.jpg',
            './img/before-01.jpg',
            './img/before-03.jpg',
            './img/clown.jpg',
            './img/before-02.jpg',
            './img/orange.jpg'
        ]
    },
    methods: {
        nextImage() {
            this.indexPhoto += 1;
            if(this.indexPhoto > (this.slide.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        prevImage() {
            this.indexPhoto -= 1;
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.slide.length - 1;
            }
        }
    }
});
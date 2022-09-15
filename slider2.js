var slider2 = {
    imagesUrls: [],
    currentImageIndex: 0,
    prevBtn: null,
    nextBtn: null,
    slideImage: null,


    start: function () {
        var that = this;

        var el = document.querySelector('#slider2');

        this.prevBtn = el.querySelector('.show-prev');
        this.nextBtn = el.querySelector('.show-next');
        this.slideImage = el.querySelector('.slide-img');

        this.prevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.nextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });


        this.imagesUrls.push('https://i.pinimg.com/originals/b4/c4/7e/b4c47ec02c2a86a4e96d239e6d926b7f.jpg');
        this.imagesUrls.push('https://cdnb.artstation.com/p/assets/images/images/008/395/253/4k/khyzyl-saleem-myrex-smooth-2-final.jpg?1512495176');
        this.imagesUrls.push('https://rare-gallery.com/thumbs/988381-Nissan-Mazda-car-vehicle-Nissan-Skyline-Toyota-Supra.jpg');


        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.prevBtn.disabled = true;
    },


    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.nextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
            this.prevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.prevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.nextBtn.disabled = true;
        }
    }


};
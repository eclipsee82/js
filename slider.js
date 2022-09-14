var slider1 = {
    prevBtn: document.getElementById('show-prev'),
    nextBtn: document.getElementById('show-next'),
    slideImage: document.getElementById('slide-img'),
    imagesUrls: [],
    currentImageIndex: 0,

    start: function () {
        this.prevBtn.addEventListener('click', this.onShowPrevBtnClick);
        this.nextBtn.addEventListener('click', this.onShowNextBtnClick);


        this.imagesUrls.push('https://www.kverner.ru/wp-content/uploads/2020/02/luchii-javascript-kursi.png');
        this.imagesUrls.push('https://miro.medium.com/1*79n12W8P4jqfQhHD4_Rd1A.jpeg');
        this.imagesUrls.push('https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png');


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
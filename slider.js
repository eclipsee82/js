var sliderFactory = {
    createNewSlider: function() {
        var newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
            prevBtn: null,
            nextBtn: null,
            slideImage: null,
        
        
            start: function (elId) {
                var that = this;
        
                var elSelector = '#' + elId;
                var el = document.querySelector(elSelector)
        
                this.prevBtn = el.querySelector('.show-prev');
                this.nextBtn = el.querySelector('.show-next');
                this.slideImage = el.querySelector('.slide-img');
        
                this.prevBtn.addEventListener('click', function (e) {
                    that.onShowPrevBtnClick(e);
                });
        
                this.nextBtn.addEventListener('click', function (e) {
                    that.onShowNextBtnClick(e);
                });
        
        
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
    
        return newSlider;
    }
};


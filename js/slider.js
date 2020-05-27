const slider = document.querySelector('.services__list');
const slides = [...document.querySelectorAll('.services__item')];

let left = 0;
let reminder = 0;
let step = 0;

const slidesWidthArray = [0];
let slidesWidthSum = 0;

slides.forEach(item => {
    slidesWidthArray.push(item.offsetWidth);
    slidesWidthSum = slidesWidthArray.reduce((acc, width) => {
        return acc + width;
    }, 0);
});

function getSliderWidth() {
    return slider.offsetWidth;
}

function clickHandler() {
    reminder = slidesWidthSum - getSliderWidth() - (left + slidesWidthArray[step]);
    
    if (reminder >= slidesWidthArray[step + 1]) {
        left += slidesWidthArray[step];
        slider.style.left = `-${left}px`;
    } else {
        slider.style.left = `-${(slidesWidthSum - getSliderWidth())}px`;
        left = 0;
        step = -1;
    }

    if (step === slides.length - 1) {
        step = 0;
        left = 0;
    } else {
        step++;
    }
}

clickHandler();
slider.addEventListener('click', clickHandler);
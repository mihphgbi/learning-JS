const listBox = document.querySelectorAll('.slide-box');
const wrapperBox = document.querySelector('.slide-listbox');
const btnLeft = document.querySelector('.btn-control-left');
const btnRight = document.querySelector('.btn-control-right');
const slideDiv = document.querySelector('.slider');

function make_slide(amountSlideAppear){
    //set witdh for slide
    const widthItemAndMargin = slideDiv.offsetWidth / amountSlideAppear;
    let widthAllBox = widthItemAndMargin * listBox.length;
    wrapperBox.style.width = `${widthAllBox}px`;
    
    //set margin right for each item in slide
    listBox.forEach((element) =>{
        element.style.width = `${widthItemAndMargin }px`;
    });

    //find locate of last box
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    let count = 0;
    //handle-button
    btnRight.addEventListener('click', function(){
        count += widthItemAndMargin;
        if (count > spacing){
            count = 0;
        }
        wrapperBox.style.transform =`translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function(){
        count -= widthItemAndMargin;
        if (count < 0){
            count = spacing;
        }
        wrapperBox.style.transform =`translateX(${-count}px)`;
    });

    

}

document.addEventListener('DOMContentLoaded',function(){
    //responsive
    window.addEventListener('resize',function(){
        if(window.innerWidth >=1366){
            make_slide(5);
        } else if (window.innerWidth >=800){
            make_slide(3);
        } else if (window.innerWidth >=500){
            make_slide(2);
        } else{
            make_slide(1);
        }
    });

    const media = [
        window.matchMedia('(min-width: 1366px)'),
        window.matchMedia('(min-width: 800px)'),
        window.matchMedia('(min-width: 500px)'),
    ];

    if(media[0].matches) {
        make_slide(5);
    } else if(media[1].matches) {
        make_slide(3);
    } else if(media[2].matches) {
        make_slide(2);
    }else {
        make_slide(1);
    }
});
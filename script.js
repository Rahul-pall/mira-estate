const cancel=document.querySelector('.exit');
const menu=document.querySelector('.menuscreen');
const hamberger=document.querySelector('.hamberger');
cancel.addEventListener("click",function(){
    console.log("first")
    menu.style.left="-100%";
})

menu.addEventListener('click',function(){
    menu.style.left="-100%";
})

hamberger.addEventListener("click",function(){
    menu.style.left="0%";
})

const icross=document.querySelector('.i_cross');
const main_inquery=document.querySelector('.main_inquery');
const btnX=document.querySelector('.btnX');
const container=document.querySelector('.container');

icross.addEventListener("click",function(){
    main_inquery.style.left="-100%";
})


btnX.addEventListener("click",function(){
    main_inquery.style.left="0%";
})

const loder=document.querySelector('.loder');

setTimeout(() => {
    loder.style.top="-100%"
}, 3000);


//add cursor to page
const cursor=document.querySelector('.cursor');

window.addEventListener('mousemove',function(e){
    const posx=e.clientX;
    const posy=e.clientY;

    cursor.style.left=`${posx}px`;
    cursor.style.top=`${posy}px`;
})


// add animation to home page
document.addEventListener('DOMContentLoaded',function(){
    const element=document.querySelector('.right_img>img');
    const contacts=document.querySelector('.text_btn');
    element.classList.add('right_img1');
    contacts.classList.add('contacts1');
    setTimeout(() => {
        element.classList.remove('right_img1')
        contacts.classList.remove('contacts1');
    }, 8000);
})
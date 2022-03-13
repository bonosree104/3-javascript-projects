const closedFace = document.querySelector('.closed');
//console.log(closedFace);
const openFace = document.querySelector('.open');
//console.log(openFace);

//add eventlistner
closedFace.addEventListener('click', ()=>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
})

openFace.addEventListener('click',()=>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
})
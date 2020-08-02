
const closeButton =document.querySelector('.close-btn');
const openButton=document.querySelector('.open-btn');
const index=document.querySelector('.indice');






openButton.addEventListener("click",()=>{
   index.classList.add('abrir-indice');
});
closeButton.addEventListener("click",()=> {
   index.classList.remove('abrir-indice');
});




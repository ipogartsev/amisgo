
let btn = document.querySelectorAll(".filter-button");
let article = document.querySelector('article');

btn.forEach(element => {
  element.addEventListener('click', displayChoice);
});
function displayChoice(e){
  /*if(article.dataset.category!==e.currentTarget.id){
    article.style.value = "display:none";
  }
   console.log(e.currentTarget.id); */

   let allElement = document.querySelectorAll('.data');
   allElement.forEach(element => {
     element.style.display = 'none !important';
   })
   /*let elementToShow = document.querySelectorAll('.'+e.currentTarget.id);
   elementToShow.forEach(element => {
     element.style.display = 'block !important';
   })*/
}


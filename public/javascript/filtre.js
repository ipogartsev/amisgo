// Selectionner les butons du filtre
let btn = document.querySelectorAll(".filter-button");

//let article = document.querySelector('article');

btn.forEach(element => {
  element.addEventListener('click', displayChoice);
});

function displayChoice(e){
  /*if(article.dataset.category!==e.currentTarget.id){
    article.style.value = "display:none";
  }*/
   console.log(e.currentTarget.id); 

   let allElements = document.querySelectorAll('[data-category]');
   
   console.log(allElements);
   allElements.forEach(element => {
    console.log(element.dataset.category);
    if(element.dataset.category!==e.currentTarget.id){
      element.style = "display:none !important";
    
   }else{
    element.style ="display:block";
   }

  })
}


form = document.querySelector('form')

 form.addEventListener('submit', (e) => {    
    e.preventDefault();
     inpVal = e.target.querySelector('input').value;
        console.log(inpVal)
     
     fetchValue();
 })

 async function fetchValue() {
  app_id = 'b3a572a3';
  app_key = '757e7e018f3135ed0c4bb7c2f0f40b07';
     baseUrl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=4`

     resp = await fetch(baseUrl)
     data = await resp.json();
     console.log(data)
     genrateHT(data.hits);
     
 }
 function genrateHT(result){
   showinhtml='';
   result.map(result=>{
     showinhtml +=`
     <div class="col-3 my-3">
     <div class="card">
         <div class="card-body">
             <img src="${result.recipe.image}" alt="" class='img-fluid'>
             <h6 class=' text-center my-2'>${result.recipe.label}</h6>
             <h6 class=' text-center my-2'>${result.recipe.healthLabels[0]}</h6>
             <h6 class=' text-center my-2'>Cuisine type:${result.recipe.cuisineType}</h6>
             <div class="d-flex justify-content-between align-items-center">
                 <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                 <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
             </div>
         </div>
     </div>
 </div>
     `
     document.querySelector('#showRecipe').innerHTML = showinhtml;
    
     
 })
}
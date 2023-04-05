let tggl = document.getElementById('range_tggl')
let max_input=document.getElementById('max')
let minus=document.querySelectorAll('h2')
let price_cnt=document.querySelectorAll('#price_content')



  
tggl.addEventListener("input",()=>{
    max_input.value=tggl.value;
}
);

for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",()=>{
        minusfunc(i)
    })
}

function minusfunc(i){
    if (price_cnt[i].style.display === "none"){
        price_cnt[i].style.display='block'
        minus[i].innerHTML='-';
    }
    else{
        price_cnt[i].style.display='none'
        minus[i].innerHTML='+';
    }
};








// Get the search results from local storage
const searchResults = JSON.parse(localStorage.getItem("searchResults"));

// Get a reference to the container for the search results
const showsearch = document.querySelector('#search-section_search')

// Check if searchResults is not null before looping through it
if (searchResults) {
// Loop through the search results and display them
for (let i = 0; i < searchResults.length; i++) {
    // Create a new card element for each product
    
        showsearch.innerHTML += `
    
        <div class="search-section ">
        <div class="card position-relative m-3 " style="width:280px;">
        <div class="badge-overlay">
            <!-- Change Badge Position, Color, Text here-->
            <span class="top-left badge ">${searchResults[i].off}</span>
        </div>
        <span
            class="position-absolute top-10 start-100 translate-middle badge1  badge-danger" id="disc_search">
            ${searchResults[i].discount}
        </span>
        <img src=${searchResults[i].img} class="card-img-top" width="100%" height="300px">
        <div class="card-body pt-0 px-0">
            <div class="d-flex flex-row justify-content-between p-3 mid">
                <a class="d-flex flex-column text-muted mb-1">
                    ${searchResults[i].brand}
                </a>
                <p class="d-flex flex-column text-muted mb-2">${searchResults[i].model}
                </p>
            </div>
            <strong class="pl-3">${searchResults[i].name}</strong>
            <p>${searchResults[i].price} &nbsp; <s>${searchResults[i].cutprice}</s></p>
            <div class=" add mx-3 mt-3 d-block">
                <input type="number" class="quantity__input" value="1">
                
                <button type="button" onclick="addToCart(event,${searchResults[i].id},'cart')" class="btn btn-danger btn-block mb-1"><small>ADD TO
                        CART</small></button>&nbsp; &nbsp; &nbsp;
                <i class="fa-regular fa-heart mb-2 " onclick=" addToCart(event,${searchResults[i].id},'wishlist')"></i> &nbsp; &nbsp;
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div class="d-flex flex-row justify-content-between p-3 mid">
                <p class="d-flex flex-column mb-1">
                    <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
                </p>
                <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                        style="color: red;"></i>Question
                </p>
            </div>
        </div>
    </div>
    `
}
}

window.onload = () => {
    const product = JSON.parse(localStorage.getItem('product'));
    const showsearch = document.querySelector('#search-section_search');
    showsearch.innerHTML = `
      <div class="card position-relative m-3 " style="width:280px;">
        <div class="badge-overlay">
          <span class="top-left badge ">${product.off}</span>
        </div>
        <span class="position-absolute top-10 start-100 translate-middle badge1  badge-danger" id="disc_search">
          ${product.discount}
        </span>
        <img src=${product.img} class="card-img-top" width="100%" height="300px">
        <div class="card-body pt-0 px-0">
          <div class="d-flex flex-row justify-content-between p-3 mid">
            <a class="d-flex flex-column text-muted mb-1">
              ${product.brand}
            </a>
            <p class="d-flex flex-column text-muted mb-2">${product.model}</p>
          </div>
          <strong class="pl-3">${product.name}</strong>
          <p>${product.price} &nbsp; <s>${product.cutprice}</s></p>
          <div class=" add mx-3 mt-3 d-block">
            <input type="number" class="quantity__input" value="1">
            <button type="button" onclick="addToCart(event,${product.id},'cart')" class="btn btn-danger btn-block mb-1"><small>ADD TO CART</small></button>&nbsp; &nbsp; &nbsp;
            <i class="fa-regular fa-heart mb-2 " onclick=" addToCart(event,${product.id},'wishlist')"></i> &nbsp; &nbsp;
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div class="d-flex flex-row justify-content-between p-3 mid">
            <p class="d-flex flex-column mb-1">
              <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
            </p>
            <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question" style="color: red;"></i>Question</p>
          </div>
        </div>
      </div>`;
  };
  
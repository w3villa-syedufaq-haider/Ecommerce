fetch("product.json")
.then(response => response.json())
.then(data => {


     for(let i=0;i<data.product.length;i++){
           
          let product = data.product[i];
            
          let items  = document.getElementById("product-list");

          let item = document.createElement("div");
          

          item.innerHTML=`
          <div class="card position-relative m-4" style="width: 300px;">
          <div class="badge-overlay">
              <!-- Change Badge Position, Color, Text here-->
              <span class="top-left badge ">${product.off}</span>
          </div>
          <span
              class="position-absolute top-0 start-100 translate-middle badge1  badge-danger">
              ${product.discount}
          </span>
          <img src="${product.img}" class="card-img-top" width="100%" height="300px>
          <div class="card-body pt-0 px-0">
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <a class="d-flex flex-column text-muted mb-1">
                      ${product.brand}
                  </a>
                  <p class="d-flex flex-column text-muted mb-2">${product.model}
                  </p>
              </div>
              <div id="buy">
              <strong class="pl-3">${product.name}</strong>
              <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
              </div>
              <div class=" add mx-3 mt-3 d-block">
                  <input type="number" class="quantity__input" value="1">

                  <button type="button" class="btn btn-danger mb-1" onclick="getprodData(event,${product.id})">ADD TO
                          CART</button>&nbsp; &nbsp; &nbsp;
                <button type="button" class="btn btn-danger mb-1" onclick="getwishData(event,${product.id})"><i class="fa-regular fa-heart mb-2"></i></button> &nbsp; &nbsp;
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <p class="d-flex flex-column mb-1">
                    <p>Buy Now</p>
                  </p>
                  <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                          style="color: red;"></i>Question
                  </p>
              </div>
          </div>
      </div>
          `
          items.appendChild(item);
     }
})


async function getprodData(event,prodid){
    event.preventDefault();

    const response = await fetch("product.json");
    const data = await response.json();

        const product =   data.product.find(product=> prodid === product.id)
        console.table(product);


        let carts = document.getElementById("cart-container");



        let cart = document.createElement("div");
        
        cart.innerHTML=`   
        <table>
        <tbody>
            <tr>
                <td><a href="#"><i class="fas fa-trash-alt fa-2x"></i></a></td>
                <td><img src="${product.img}" alt=""></td>
                <td class="w-25"><h5>${product.name}</h5></td>
                <td><h5>${product.price}</h5></td>
                <td><h5>1</h5></td>
                <td><h5>${product.price}</h5></td>
            </tr>     
            
        `
        carts.appendChild(cart);
}
async function getwishData(event,prodid){
    event.preventDefault();

    const response = await fetch("product.json");
    const data = await response.json();

        const product =   data.product.find(product=> prodid === product.id)
        console.table(product);


        let wishes = document.getElementById("wish-container");



        let wish = document.createElement("div");
        
        wish.innerHTML=`   
        <table>
        <tbody>
            <tr>
                <td><a href="#"><i class="fas fa-trash-alt fa-2x"></i></a></td>
                <td><img src="${product.img}" alt=""></td>
                <td class="w-25"><h5>${product.name}</h5></td>
                <td><h5>${product.price}</h5></td>
            </tr>     
            
        `
        wishes.appendChild(wish);
}





// Register


const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const modalBg = document.getElementById('LoginModal');            
const login_logo=document.getElementById("main_login");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("email").value;
  const password = document.getElementById("psw").value;
  const storedPassword = localStorage.getItem(username);
  if (storedPassword) {
    alert("Username already exists. Please choose a different username.");
  } else {
    localStorage.setItem(username, password);
    alert("Signup successful!");
    signupForm.reset();
  }
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("login-email").value;
  const password = document.getElementById("login-psw").value;
  const storedPassword = localStorage.getItem(username);
  if (password === storedPassword) {
    alert("Login successful!");
    modalBg.style.display="none";
  } else {
    alert("Incorrect username or password.");
  }
  loginForm.reset();


});








// for search results

const searchInput = document.querySelector("#input_srch");
const input = searchInput.querySelector('input');
const results = searchInput.querySelector("#resultBox");

// Listen for the enter key to be pressed in the search input
input.addEventListener("keydown", function (event) {
    localStorage.clear("searchResults")

    if (event.keyCode === 13) {
        // Prevent the form from submitting and navigating away from the page
        event.preventDefault();
        
        // Get the search term from the input field
        const searchTerm = event.target.value.toLowerCase();
        
        // Clear the search results container
        results.innerHTML = '';
        
        // Fetch the product data from the JSON file
        fetch('product.json')
            .then(response => response.json())
            .then(data => {
                // Filter the products based on the search term
                const matches = data.product.filter(item => {
                    const matches_cat = item.cat.toLowerCase().startsWith(searchTerm);
                    return matches_cat;
                  });
               console.log(matches)
                
                // Store the matches in local storage
                localStorage.setItem("searchResults", JSON.stringify(matches));
                
                // Redirect the user to the search results page
               window.location.href = "search.html";
            });
    }
});



input.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    results.innerHTML = '';
    console.log(searchTerm)

    if (searchTerm.length >= 1) {
        fetch('product.json')
            .then(response => response.json())
            .then(data => {
                console.log("hello")
                const matches=data.product.filter(item=>{
                const matches_name = item.name.toLowerCase().startsWith(searchTerm);
                return matches_name;
            });

                console.log('bye')
                matches.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                   
                    <div onclick="search(event,${item.id})"><img src="${item.img}" style="height:50px";"width:50px">   ${item.name}</div>`;
                    results.appendChild(li);
                });
            });
    }
});






async function search(event, productId) {
    event.preventDefault();
    const response = await fetch("product.json")
    const data = await response.json();
    const product = data.product.find(product => product.id === productId);
    console.log(product)

  
    localStorage.setItem('product', JSON.stringify(product));
  
    window.location.href = 'search.html';
  
   
  }
  


























// async function search(event, productId) {
//     window.location.href = "search.html";
//     const showsearch = document.querySelector('.search-section')
//     event.preventDefault();
//     const response = await fetch("product.json")
//     const data = await response.json();
//     const product = data.product.find(product => product.id === productId);
   
//     console.log(product)
//     document.getElementById("hide-section").style.display = "none";
//     document.getElementById("filter_sec").style.display="block";
//     showsearch.innerHTML = `

//      <div class="search-section ">
//      <div class="card position-relative m-3 " style="width:280px;">
//     <div class="badge-overlay">
//         <!-- Change Badge Position, Color, Text here-->
//         <span class="top-left badge ">${product.off}</span>
//     </div>
//     <span
//         class="position-absolute top-10 start-100 translate-middle badge1  badge-danger">
//         ${product.discount}
//     </span>
//     <img src=${product.img} class="card-img-top" width="100%" height="300px">
//     <div class="card-body pt-0 px-0">
//         <div class="d-flex flex-row justify-content-between p-3 mid">
//             <a class="d-flex flex-column text-muted mb-1">
//                 ${product.brand}
//             </a>
//             <p class="d-flex flex-column text-muted mb-2">${product.model}
//             </p>
//         </div>
//         <strong class="pl-3">${product.name}</strong>
//         <p>${product.price} &nbsp; <s>${product.cutprice}</s></p>
//         <div class=" add mx-3 mt-3 d-block">
//             <input type="number" class="quantity__input" value="1">
            
//             <button type="button" onclick="addToCart(event,${product.id},'cart')" class="btn btn-danger btn-block mb-1"><small>ADD TO
//                     CART</small></button>&nbsp; &nbsp; &nbsp;
//             <i class="fa-regular fa-heart mb-2 " onclick=" addToCart(event,${product.id},'wishlist')"></i> &nbsp; &nbsp;
//             <i class="fa-solid fa-arrow-right-arrow-left"></i>
//         </div>
//         <div class="d-flex flex-row justify-content-between p-3 mid">
//             <p class="d-flex flex-column mb-1">
//                 <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
//             </p>
//             <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
//                     style="color: red;"></i>Question
//             </p>
//         </div>
//     </div>
// </div>

// `

// }







// input.addEventListener('input', function (event) {
//     const input = event.target.value.toLowerCase();
//     searchResults.innerHTML = '';

//     if (input.length >= 1) {
//         fetch('product.json')
//             .then(response => response.json())
//             .then(data => {
//                 console.log("hello")
//                 const matches = data.product.filter(item => item.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
//                 matches.forEach(item => {
//                     const li = document.createElement('li');
//                     li.innerHTML = `
//                     <div onclick="search(event,${item.id})">${item.name}</div>`;
//                     results.appendChild(li);
//                 });
//             });
//     }
//     else{
//         searchInput.classList.remove("active"); //hide autocomplete box
//     }
// });

// // if user press any key and release
// input.onkeyup = (e)=>{
//     let userData = e.target.value.toLocaleLowerCase(); 
//     //user enetered data
//     let emptyArray = [];
//     if(userData){
//         fetch("product.json")
//         .then(response => response.json())
//         .then(data => {
        
//         emptyArray = data.product.filter((item) =>{
//             //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
//             return item.name.toLowerCase().startsWith(userData.toLowerCase()); 
//         });
//         emptyArray = emptyArray.map((item)=>{
//             // passing return data inside li tag
//             return item.name = '<li>'+ item.name +'</li>';
//         });
//         searchInput.classList.add("active"); //show autocomplete box
//         showSuggestions(emptyArray);
//         let allList = results.querySelectorAll("li");
//         console.log("hhhhhhhhhh",allList);
//         for (let i = 0; i < allList.length; i++) {
//             //adding onclick attribute in all li tag
//             allList[i].setAttribute("onclick", "select(this)");
//         }
//     })
//     }
    

// function showSuggestions(list){
//     let listData;
//     if(!list.length){
//         userValue = inputBox.value;
//         listData = '<li>'+ userValue +'</li>';

//     }else{
//         listData = list.join('');
//     }
//     results.innerHTML =`<div onclick="search(event)">${listData}</div>`;
//     console.log(listData)

// }


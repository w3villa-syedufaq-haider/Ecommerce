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
      </div
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
let umail = document.getElementById('email');
let upass = document.getElementById('psw');
let urepass = document.getElementById('psw-repeat');
let add = document.getElementById('btnsubmit');

let array = [];

function register(e){
         console.log(umail.value,upass.value,urepass.value);
         let acceptData = () => {
            array_user={
              mail: umail.value,
              pass: upass.value,
              repass: urepass.value
            };

            array.push(array_user);

            localStorage.setItem("array", JSON.stringify(array));
          
            console.log(array);


          };
        
         let formValidation = () => {
       
            if (umail.value.trim() === "" || upass.value.trim() === "" || urepass.value.trim() === "") {
              console.log("failure");
              alert("Please fill all fields")
            } 
            else if(upass.value.trim() != urepass.value.trim()){
                alert("password not match")
            }
              else {
                console.log("success");
                acceptData();   
            }
          };
          formValidation();
          document.getElementById("id01").style.display="none" ;     
}
function login(){
   let enter_mail = document.getElementById('login-email').value ;
   let enter_pass = document.getElementById('login-psw').value
   let str = JSON.parse(localStorage.getItem("array"));
   for(let i =0; i<str.length;i++){
    if(enter_mail === str[i].mail && enter_pass === str[i].pass){
        alert("success")
    }
    else{
        alert("enter correct credentials")
    }
   }
}



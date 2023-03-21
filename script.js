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
              class="position-absolute top-10 start-100 translate-middle badge1  badge-danger">
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
              <strong class="pl-3">${product.name}</strong>
              <div class=" add mx-3 mt-3 d-block">
                  <input type="number" class="quantity__input" value="1">
                  
                  <button type="button" class="btn btn-danger btn-block mb-1"><small>ADD TO
                          CART</small></button>&nbsp; &nbsp; &nbsp;
                  <i class="fa-regular fa-heart mb-2"></i> &nbsp; &nbsp;
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                  <p class="d-flex flex-column mb-1">
                    <p> <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>${product.price} &nbsp; <s>${product.preprice}</s></p>
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
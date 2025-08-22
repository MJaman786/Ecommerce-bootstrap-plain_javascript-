let cartList = [];
let counter = 0;
window.onload = function () {

    cartList = JSON.parse(localStorage.getItem("cartItems")) || [];
    counter = JSON.parse(localStorage.getItem("countItems")) || 0;
    let cartContainer = document.querySelector('.cart-container');

    if (cartList.length === 0) {
        cartContainer.innerHTML = `
            <div class="container p-3 d-flex flex-column align-items-center justify-content-center">
                <p class="fs-4 font-monospace text-center text-info">There is no item present </p>
                <span class="material-symbols-outlined text-light fs-1" style="display:block;">shopping_cart_off</span>
            </div>
        `;
        return;
    }
    // localStorage.clear();
    displayCart(cartContainer);
}

function displayCart(cartContainer) {
    for (let index = 0; index < cartList.length; index++) {
        // displaying all the products
        cartContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
            <div class="card" style="max-width: 540px; background-color: #1b262c;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${cartList[index].img}" class="img-fluid card-img rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-light">Card title</h5>
                            <p class="card-text text-info">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-light">Last updated 3 mins ago</small></p>
                            <button onclick="removeItems(${index})" type="button" class="btn btn-outline-danger">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    }
}

function removeItems(index) {
    cartList.splice(index, 1);
    counter = counter - 1;
    localStorage.setItem("cartItems", JSON.stringify(cartList));
    localStorage.setItem("countItems", JSON.stringify(counter));
    location.reload();
    displayCart();
}

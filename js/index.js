let productList = [
    {
        title: 'lkamcs',
        desc: 'alkcsmlkanscjancslkanjscnalknclaksncl',
        img: '../img/1pc_white_cabinate-removebg-preview.png'
    },
    {
        title: 'lkamcs',
        desc: 'alkcsmlkanscjancslkanjscnalknclaksncl',
        img: '../img/2pc_white_cabinate-removebg-preview.png'
    },
    {
        title: 'lkamcs',
        desc: 'alkcsmlkanscjancslkanjscnalknclaksncl',
        img: '../img/71RLDLA00HL._SX466_-removebg-preview.png'
    },
    {
        title: 'lkamcs',
        desc: 'alkcsmlkanscjancslkanjscnalknclaksncl',
        img: '../img/pc_black_cabinate-removebg-preview.png'
    },
    {
        title: 'lkamcs',
        desc: 'alkcsmlkanscjancslkanjscnalknclaksncl',
        img: '../img/pc_white_cabinate-removebg-preview.png'
    },
    {
        title: 'lkamcs',
        desc: 'alkcsmlkanscjancslkanjscnalknclaksncl',
        img: '../img/Waterpc_white_cabinate-removebg-preview.png'
    }
];

// displaying cabinates products: 
for (let index = 0; index < productList.length; index++) {
    let productContainer = document.querySelector('.product-container');
    productContainer.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div class="card" style="background-color: #1b262c;">
                <img src="${productList[index].img}" class="card-img-top card-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-light">Card title</h5>
                    <p class="card-text text-info">Some quick example text to build on the card title and make
                        up the bulk
                        of the card's content.</p>
                    <a onclick="incrementCount(); addToCart(${index})" class="btn btn-primary shop-btn" style="background-color: #031119; border: none;">
                        <span class="material-symbols-outlined" style="font-size: 20px;">
                            shopping_cart
                        </span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

let count = document.querySelector('sup')
let shopBtn = document.querySelector('.shop-btn');
let counter = 0;

function incrementCount() {
    counter++;
    count.innerText = `${counter}`
    localStorage.setItem("countItems", JSON.stringify(counter));
}

// adding the productItems in cart

let productCart  = [];

function addToCart(index) {
    productCart.push(productList[index]);
    localStorage.setItem("cartItems", JSON.stringify(productCart));
}

window.onload = function () {
    // localStorage.clear();
    productCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    counter = JSON.parse(localStorage.getItem("countItems")) || 0;
    count.innerText = counter;
}
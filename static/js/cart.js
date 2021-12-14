if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}



let carts = document.querySelectorAll('.btn-theme3');
let products = [

    {
        name: "Lawn",
        tag: 'lawn-fabric-mobile_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 3500,
        incart: 0
    },
    {
        name: "Cotton Lace",
        tag: 'lace-fabric-mobile_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 4000,
        incart: 0
    },
    {
        name: "Gingham",
        tag: 'cotton-fabrics-header-mobile-Gingham-5110-2-v1_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 3850,
        incart: 0
    },
    {
        name: "Canvas",
        tag: 'canvas-fabric-mobile_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 5000,
        incart: 0
    },
    {
        name: "Organdy",
        tag: 'organdy-fabric-mobile_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 6300,
        incart: 0
    },
    {
        name: "Oxford",
        tag: 'oxford-fabric-mobile_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 2500,
        incart: 0
    },
    {
        name: "Velvet",
        tag: 'cotton-fabrics-header-mobile-Velvet-v3-7039-A_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 3000,
        incart: 0
    },
    {
        name: "Ombre",
        tag: 'cotton-fabrics-header-mobile-ombre-7271-v1_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 3000,
        incart: 0
    },
    {
        name: "Pique",
        tag: 'cotton-fabrics-header-mobile-Pique_SK-1929-2b_aa93d8ee9a3cc573b9a01b328410e8b2.webp',
        price: 3000,
        incart: 0
    },


    {
        name: "Universal Needles",
        tag: 'Universal-Double-Sewing-Machine-Needle-100-6-0-5206234.jpg',
        price: 2800,
        incart: 0
    },
    {
        name: "Leather Jacket",
        tag: 'leather-jacket.jpeg',
        price: 12000,
        incart: 0
    },
    // {
    //     name: "",
    //     tag: '',
    //     price: ,
    //     incart: 0
    // },
    // {
    //     name: "",
    //     tag: '',
    //     price: ,
    //     incart: 0
    // },
    // {
    //     name: "",
    //     tag: '',
    //     price: ,
    //     incart: 0
    // },
    // {
    //     name: "",
    //     tag: '',
    //     price: ,
    //     incart: 0
    // },



    {
        name: "Target Ankara Print",
        tag: 'Target Ankara Print.jpg',
        price: 7000,
        incart: 0
    },
    {
        name: "African Ankara Fabric",
        tag: 'African Ankara Fabric2.jpg',
        price: 4000,
        incart: 0
    },
    {
        name: "Ankara Fabrics",
        tag: '185823_1638555390.jpg',
        price: 3300,
        incart: 0
    },
    {
        name: "Hitarget Ankara Print",
        tag: '112749_1596813207.jpg',
        price: 3000,
        incart: 0
    },
    {
        name: "Ankara Print",
        tag: '152714_1621789568.jpg',
        price: 5500,
        incart: 0
    },
    {
        name: "Hollandaise Ankara",
        tag: '143429_1539775175.jpg',
        price: 6000,
        incart: 0
    },
    {
        name: "Quality Ankara",
        tag: '192030_1629369553.jpg',
        price: 3800,
        incart: 0
    },
    {
        name: "Cotton Ankara",
        tag: '192030_1634636129.jpg',
        price: 3000,
        incart: 0
    },
    {
        name: "Ankara - 6 Yards",
        tag: '136364_1532272722.jpg',
        price: 3000,
        incart: 0
    }

];
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i])
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if (productNumbers) {
        document.querySelector('li span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('li span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('li span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)




    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart += 1;
    } else {
        product.incart = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }
}


    function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        
    }


function displayCart() {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    let productContainer = document.querySelector('.cart-items')
    let cartCost = localStorage.getItem('totalCost');
    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-row d-flex">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="./static/img/${item.tag}" width="100" height="100">
                        <span class="cart-item-title">${item.name}</span>
                    </div>
                    <span class="cart-price cart-column">${item.price}</span>
                    <div class="cart-quantity cart-column">
                    <span>${item.incart}</span>
                        <button class="btn mx-4 btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
            `
        })
        productContainer.innerHTML += `
        <div class="cart-total">
                    <strong class="cart-total-title">Total</strong>
                    <span class="cart-total-price">$${cartCost}</span>
                </div>

        `
    }
}
onLoadCartNumbers();
displayCart();
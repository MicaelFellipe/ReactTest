let cart = [];
initCart();

export default function addProduct(product){

    if(localStorage.getItem('cart')){
        localStorage.removeItem('cart');
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify({value:cart}));
    
}

function initCart(){
    if(localStorage.getItem('cart')){
        cart = JSON.parse( localStorage.getItem('cart')).value;
    }
}
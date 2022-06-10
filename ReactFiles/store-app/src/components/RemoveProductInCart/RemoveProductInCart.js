let cart = [];
initCart();

export default function removeProduct(passedId){
    console.log(passedId)
    let cartLocal = localStorage.getItem('cart');
    if(cartLocal){
        cartLocal= JSON.parse(cartLocal).value;
    }

    let productFounded= {product:null, state:false, iProduct:null}
    cartLocal.forEach( (product,iProduct) => {  
      if(product.id==passedId){
        productFounded.product= product;
        productFounded.state= true;
        productFounded.iProduct= iProduct;
      }
    })
  
    if(productFounded.state){
      // removeProduct(productFounded.product);
      cartLocal.splice(productFounded.iProduct,1);
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify({value:cartLocal}))
      document.querySelector(`#${productFounded.product.id}__big`).remove();
      document.querySelector(`#${productFounded.product.id}__small`).remove();
  
      console.log('Excluded product',productFounded.product)
    }
}

function initCart(){
    if(localStorage.getItem('cart')){
        cart = JSON.parse( localStorage.getItem('cart')).value;
    }
}

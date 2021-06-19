let carts = document.querySelectorAll('.add-cart'); //apunto a todos los add-cart
let products = [
  {
    name:"Puma T-shirt",
    tag:'pumaTshirt',
    price: 35,
    inCart:0
  },
  {
    name:"Red Nike T-shirt",
    tag:'redNikeTshirt',
    price: 35,
    inCart:0
  },
  {
    name:"Black Nike T-shirt",
    tag:'blackNikeTshirt',
    price: 45,
    inCart:0
  },
  {
    name:"Air Nike T-shirt",
    tag:'airNikeTshirt',
    price: 60,
    inCart:0
  }
];

for(let i = 0; i<carts.length; i++){
  carts[i].addEventListener('click',()=>{
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

const onLoadCartNumbers = () =>{ //mnatiene el contador de los productos al refrescar la pagina
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

const cartNumbers = (product) =>{
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers); //converir de cadena a numero
    if(productNumbers){
      localStorage.setItem('cartNumbers',productNumbers + 1); //almacenar datos persistentes
      document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
      localStorage.setItem('cartNumbers',1);
      document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

}

const setItems = (product) =>{
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems)
  console.log("My cartItems are", cartItems);

  if(cartItems != null){
    
    if(cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems, //agarrar cualquier elemento de cartItems
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart += 1;
  }else{
    product.inCart = 1; //si ya esta en el carrito
    cartItems = {
      [product.tag]:product
    }

  }

 
  localStorage.setItem("productsInCart", JSON.stringify(cartItems)); //pasar los objetos en formato json

}

onLoadCartNumbers();

//Calcular el costo total de los productos del carrito
const totalCost = product =>{
  let cartCost = localStorage.getItem('totalCost');
  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost + product.price);
  }else{
    localStorage.setItem("totalCost",product.price);
  }

}

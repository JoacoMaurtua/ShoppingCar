let carts = document.querySelectorAll('.add-cart'); //apunto a todos los add-cart
let products = [
  {
    name:"Puma T-shirt",
    tag:'pumaTshirt',
    price: 35,
    inCart:false
  },
  {
    name:"Red Nike T-shirt",
    tag:'redNikeTshirt',
    price: 35,
    inCart:false
  },
  {
    name:"Black Nike T-shirt",
    tag:'blackNikeTshirt',
    price: 45,
    inCart:false
  },
  {
    name:"Air Nike T-shirt",
    tag:'airNikeTshirt',
    price: 60,
    inCart:false
  }
]

for(let i = 0; i<carts.length; i++){
  carts[i].addEventListener('click',()=>{
    cartNumbers();
  });
}

const cartNumbers = () =>{
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers); //converir de cadena a numero

  
  localStorage.setItem('cartNumbers',1); //almacenar datos persistentes
}


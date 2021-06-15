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
    cartNumbers();
  });
}

const onLoadCartNumbers = () =>{ //mnatiene el contador de los productos al refrescar la pagina
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

const cartNumbers = () =>{
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

}

onLoadCartNumbers();


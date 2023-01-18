// console.log("Doubts");

// 1. URL or Endpoing (https://jsonplaceholder.typicode.com/todos/)
// 2 . Method : GET

// function onReadyStateChange(e) {
//   //   console.log(e);
//   const ul = document.getElementById("myList");
//   if (e.currentTarget.readyState === 4 && e.currentTarget.status === 200) {
//     const list = JSON.parse(e.currentTarget.response);
//     for (let i = 0; i < list.length; i++) {
//       const toDo = list[i];
//       const li = document.createElement("li");
//       li.innerText = toDo.title;
//       ul.append(li);
//     }
//   }
// }

// const ajax = new XMLHttpRequest();

// ajax.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// ajax.send();

// ajax.addEventListener("readystatechange", onReadyStateChange);

function onDone(list) {
  console.log(list);
}

$.get("https://jsonplaceholder.typicode.com/todos/").done(onDone).fail();

/**
 * 1. Get the product details on click on add to cart button
 * 2. Create a JSON of data with quantity
 * 3. Store it in local storage
 * 4. (When you are on checkout page) Get the data from local storage and run a loop on it
 */

let productObject = {
  quantity: 2,
  product: {
    id:"",
    name:"",
  }
}
let cartItem = [];
// Click on ATC button
cartItem.push(productObject)

localStorage.setItem('cart',cartItem);


let cart = localStorage.getItem('cartItems');
// 
/**
 * Find the item if it exists in cart
 * If yes, then increase the quantity using splice function
 * If no, just push the item to the cart array
 * Set the cart to local storage again
 */
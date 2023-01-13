// console.log("Product details script loaded");

// Extract the value from query params in the URL
const params = new URLSearchParams(window.location.search);

const pId = params.get("productId");

// $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + pId)
//   .done()
//   .fail();
const cartItem = [
  {
    // item object,
    quantity: 2,
  },
];
localStorage.setItem("cart", cartItem);

localStorage.getItem("cart");

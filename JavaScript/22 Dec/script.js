// console.log("DOM");
/**
 * DOM (Document = HTML Object Model)
 */

// console.log(document);

/**
 * Find/Search :
 * getElementById()
 */

var heading = document.getElementById("subHeading");
console.log(heading);

var card = document.getElementById("sampleCard");
console.log(card);

var newCard = document.getElementById("test");
console.log(newCard);
console.log("-------------------");
/**
 * getElementsByClassName()
 */

var paraArticle = document.getElementsByClassName("paragraph-article");
console.log(paraArticle);

var cardClassElements = document.getElementsByClassName("card");
console.log(cardClassElements);

var temp = document.getElementsByClassName("abcd");
console.log(temp);

console.log("-------------------------");

/**
 * getElementsByTagName()
 */

var div = document.getElementsByTagName("div");
console.log(div);

var p = document.getElementsByTagName("p");
console.log(p);

var article = document.getElementsByTagName("article");
console.log(article);

var header = document.getElementsByTagName("header");
if (header.length === 0) {
  alert("No header element found!");
}

console.log("---------------------");

/**
 * querySelector()
 */

var pInArticle = document.querySelector(".my-article p");
console.log(pInArticle);

/**
 * querySelectorAll()
 */

var allPInArticle = document.querySelectorAll(".my-article > p");
console.log(allPInArticle);

console.log("---------------------");
/**
 * updation of elemnts
 */

// var heading = {
//   innerText: "Ssample Heading of Article",
// };

var heading = document.getElementById("subHeading");
setTimeout(function () {
  heading.innerText = "Lorem Ipsum";
}, 5000);
// heading.innerText = "ABC";
// console.log(heading.innerText);
// console.log(heading);

// var img = document.getElementById("cardImg");
// console.log(img);
// setTimeout(function () {
//   if (img) {
//     img.src =
//       "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200";
//     img.alt = "Cars";
//   }
// }, 5000);
// console.log(img);

// var card = document.getElementById("sampleCard");
// setTimeout(function () {
//   card.innerHTML = "<span>Test Span here</span><div>ABCD</div>";
// }, 5000);
// console.log(card.innerHTML)

var counter = 10;
var timer = document.getElementById("timer");
var interval = setInterval(function () {
  if (counter === 0) {
    alert("Happy New Year!!!");
    // Stop condition
    clearInterval(interval); // Stop the timer
    // Stop the execution
  }
  timer.innerText = counter;
  //   console.log("Hello");
  counter--;
}, 1000);

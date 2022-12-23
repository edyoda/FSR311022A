// console.log("DOM");

var h2 = document.createElement("h2");
h2.innerText = "Article Heading";

var paragraph = document.createElement("p");
paragraph.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga ad impedit, cupiditate cumque molestias itaque iste dolorem enim quo incidunt aperiam ipsam? Odit ut illum quis magnam perferendis qui?";

/**
 * Syntax : append(newElement1, newElement2,...) // Multiple items
 * Syntax : appendChild(newElement) // Only 1 item
 */
var article = document.getElementById("article");
// console.log(article);
article.append(h2, paragraph);
// article.append(h2);
// article.append(paragraph);

var span = document.createElement("span");
span.innerText = "Hey there, this span is created using JS";

var body = document.body;
// body.append(span);
body.appendChild(span);

var envArticle = document.getElementById("envArticle");
console.log(envArticle.children);

var div = document.createElement("div");
div.innerText = "Test values added to div from JavaScript";

// envArticle.append(div);

/**
 * Syntax : insertBefore(newElement,elemnent before which you want the newElement to be inserted)
 */
envArticle.insertBefore(div, envArticle.children[3]);

/**
 * Updating the styles of an element
 */

envArticle.style.color = "#ff8800";
envArticle.style.fontSize = "40px";
envArticle.style.backgroundColor = "rgb(0,255,120)";
// rgb(0, 255, 120);

// var counter = 1;
// var interval = setInterval(function () {
//   if (counter > 10) {
//     clearInterval(interval); // Stop the interval timer
//   }
//   var randomColorCode = parseInt(Math.random() * 255);
//   document.body.style.backgroundColor = `rgb(${randomColorCode},200,150)`;
//   counter++;
// }, 2000);

// font-size : 40px
// background-color: green;

/**
 * Add/remove css classed from an element : classList.add() and classList.remove()
 */

envArticle.classList.add("my-article");
envArticle.classList.add("testcls");

envArticle.classList.remove("abc");
envArticle.classList.remove("testcls");

envArticle.remove(); // Delete an element from DOM

//-------------------------------------------------------
/**
 * Events : Any activity happening on the web page is referred to as event
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

function onButtonClick() {
  var randomColorCode = parseInt(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${randomColorCode},200,150)`;
}

function onButtonClick2() {
  console.log("Btn clicked 2");
}

var btn = document.getElementById("btn");
// console.log(btn);

/**
 * Syntax :
 * 1. element.eventName = eventListener;
 * 2. element.addEventListener("eveentName",eventLientener);
 */
// btn.onclick = onButtonClick; // This allows only 1 event listener for an event on an element
// btn.onclick = onButtonClick2;
btn.addEventListener("click", onButtonClick); // This allows multiple envents linsterns for an evenet on an elemnet
// btn.addEventListener("click", onButtonClick2);

// var btn = {
//     onclick: "ABC"
// }

// btn.onclick = "123";
// btn.onclick = "456";
// console.log(btn.onclick);

var myDiv = document.getElementById("mouse-exp");

function onMouseEnter(e) {
  console.log("Mouse entered");
  console.log(e);
  myDiv.style.backgroundColor = "yellow";
}

function onMouseLeave() {
  console.log("Mouse leave");
  myDiv.style.backgroundColor = "red";
}

myDiv.addEventListener("mouseenter", onMouseEnter);
myDiv.addEventListener("mouseleave", onMouseLeave);

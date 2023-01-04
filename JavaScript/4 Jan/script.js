// console.log("jQuery...");

// const result = add(5, 15);
// console.log(result);

// const diff = subtract(50, 15);
// console.log(diff);

// const element = find("heading");
// console.log(element);

const element = $("#article"); // getElementById()
console.log("Get element By Id", element);

const element2 = $(".article-paragraph"); // getElementsByClassName
console.log("Get Element by Class name", element2);

const element3 = $("div"); // getElementsByTagName
console.log("Get elements by tag name", element3);

const element4 = $("#article p"); // querySelector and querySelectorAll
console.log("Query Selector ", element4);

const toDo = $("#todo");
console.log(toDo);

// Vanilla JS
// const li = document.createElement("li");
// li.innerText = "Drink Water";
// toDo.append(li);

// jQuery
$("#todo").html("<li>Drink Water</li>");
// toDo.html("<li>Drink Water</li>");

console.log($("#todo").html()); // Get us the HTML inside todo
$("#todo").html("<li>Attend Classes</li>"); // Set the HTML inside todo

$("#todo").append("<li>Drink Water</li>");
$("#todo").append("<li>Go to market</li>");
$("#todo").append("<li>Buy grocieris</li>");
$("#todo").append("<li>Watch movie</li>");

// Vanilla js innerText
const heading = document.getElementById("artHead");
console.log(heading.innerText);
heading.innerText = "Updated article heading using vanilla js";

// jQuery
console.log($("#artHead").text());
$("#artHead").text("Updated article heading using jQuery");

// function onBtnClick() {
//   alert("Button is clicked");
// }

// $("#btn").on("click", onBtnClick);
$("#btn").addClass("my-btn newcls custom");
// $("#btn").addClass("custom");

// $("#btn").removeClass("my-btn");

// element.attr(attributeName,attributeValue);
$("#btn").attr("type", "submit");
$("#btn").attr("data-label", "submit button");

// Toggle between dark and light mode
// Vanilla JS

// function onBtnClick() {
//   //   console.log("Button clicked");
//   if (document.body.classList.contains("dark")) {
//     // Currently we are into dark mode
//     document.body.classList.remove("dark");
//   } else {
//     // Currently we are into light mode
//     document.body.classList.add("dark");
//   }
// }

// const btn = document.getElementById("btn");
// btn.addEventListener("click", onBtnClick);
// btn.removeEventListener("click", onBtnClick);
// jQUery

function onBtnClickJQ() {
  $("body").toggleClass("dark");
}

$("#btn").on("click", onBtnClickJQ);
$("#btn").off("click");

$("body").append(`
<div class="card">
<h1>Hello there</h1>
<p>lorem ipsum lorem ipsum dor sit amet..</p>
</div>
`);

$("#heading").css("color", "red");
$("#heading").css("background-color", "blue");

// $('#heading').remove();
console.log($('div').children());

console.log($('#heading').parent());
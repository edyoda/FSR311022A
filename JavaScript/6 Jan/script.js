// console.log("Ajax using jQuery");

const API_END_POINT = "https://jsonplaceholder.typicode.com/todos";

function onReadyStateChange(e) {
  if (e.target.readyState === 4) {
    if (e.target.status === 200) {
      // Successful request
      console.log(JSON.parse(e.target.response));
    } else if (e.target.status >= 400 && e.target.status <= 599) {
      // Error received
      console.log("ERROR IN API CALL");
    }
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   //   const heading = document.getElementById("heading");
//   //   console.log(heading);

//   const ajax = new XMLHttpRequest();

//   ajax.open("GET", API_END_POINT);

//   ajax.send();

//   ajax.addEventListener("readystatechange", onReadyStateChange);
// });

function onApiCallSucess(todoList) {
  //   console.log(data);
  $("#todoList").html(""); // To remove the older elements from the list
  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
    $("#todoList").append(`<li>${todo.title}</li>`);
    // console.log(todo.title);
  }
}

function onApiCallError(error) {
  console.log("ERROR IN API CALL USING JQUERY", error);
  alert("Something went wrong, please try again after sometime");
}

$(document).ready(function () {
  // ready() = DomContentLoaded

  const newTodo = {
    title: "Drink Water",
  };

  $("#btn").on("click", function () {
    // $.ajax({
    //   method: "GET",
    //   url: API_END_POINT,
    //   success: onApiCallSucess,
    //   error: onApiCallError,
    // });

    $.ajax({
      method: "POST",
      url: API_END_POINT,
      data: JSON.stringify(newTodo),
      success: onApiCallSucess,
      error: onApiCallError,
      headers: {
        "content-type": "application/json",
      },
    });

    // Newer versions of jQuery
    // Syntax : $.methodName(API URL).done(success callback fn).fail(error callback fn)
    // $.get(API_END_POINT).done(onApiCallSucess).fail(onApiCallError);

    // Ex : Find out how to pass data in post reqeust using $.post() syntax

    // React API call uisng axios
    // axios.get(API_END_POINT).then().catch()
    // axios.post(API_END_POINT).then().catch()
  });
});

/**
 * Regex => Regualr Expressions (Patterns) written within /regex/ => Validation
 */

const userName = "John";

/**
 * \w => Words
 * \W => Non words
 * \d => Digits
 * \D => Non digits
 * \s => Spaces
 * \S => Not a space
 * [] => Range
 * * => 0 or more
 * + => 1 or more
 */

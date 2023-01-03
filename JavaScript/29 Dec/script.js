// console.log("AJAX");

function onReadyStateChange(e) {
  //   console.log("Ready state changed", e.target.readyState);

  if (e.target.readyState === 4) {
    // Order delivered
    console.log("Order has been delivered by..", e.target);
    if (e.target.status === 200) {
      // Item is present in the box and is in fine condition
      console.log("Item is present in box and is in fine condition");
      var data = JSON.parse(e.target.response); // To convert response string into actual JSON
      console.log(data);
      // Run a loop on data and create ul li or card on UI
    }
  }
}

function onBtnClick() {
  //   console.log("Btn is clicked");
  // Ajax

  // Step 1 : Create an instance of ajax(xhr)
  var ajax = new XMLHttpRequest();

  // Step 2 : Mention the end point and method
  ajax.open("POST", "https://jsonplaceholder.typicode.com/todos");

  // Step 3 : Place a request
  ajax.send(
    JSON.stringify({
      title: "Test ToDo",
    })
  );

  // Step 4 : Wait for the response (Keep tracking the dispatched SMS)
  ajax.addEventListener("readystatechange", onReadyStateChange);
}

var btn = document.getElementById("btn");
btn.addEventListener("click", onBtnClick);

// https://jsonplaceholder.typicode.com/todos

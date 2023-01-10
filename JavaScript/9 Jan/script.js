/**
 * 1. Always write the HTML of the screen in html file along with CSS
 * 2. Identify the repeating element in the UI (LOOP)
 * 3. Remove that structure from the HTML file and put it in JS file with comments
 * 4. One by one create the elemetns using JS method with starts form Parent to child.
 * 5. Create the repeting element using JS and append them into the container
 * 6. Put the item from Step 5 into Loop
 * 7. The loop in Step 6 should run on the JSON provided (either hard coded or using Ajax call)
 * 8. Create the non repeating seperate element using JS and append them to specific parent
 */

$(document).ready(function () {
  function onFormSubmit(e) {
    e.preventDefault();
    // Logic to match the marks given as inputs
  }

  function onApiDataSuccess(questionsList) {
    console.log(questionsList);
    // Step 1 - 7 should go here
    for (let i = 0; i < questionsList.length; i++) {
      // Create the question HTML and append it to form
    }

    $("#form").on("submit", onFormSubmit);
  }

  //   $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
  //     .done(onApiDataSuccess)
  //     .fail();

  function onReadyStateChange(e) {
    if (e.target.readyState === ajax.DONE) {
      if (e.target.status === 200) {
        const questionsList = JSON.parse(e.target.response);
        // console.log(JSON.parse(e.target.response));
      }
    }
  }

  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz");
  ajax.send();

  ajax.addEventListener("readystatechange", onReadyStateChange);
});

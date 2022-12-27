/**
 * DOM Based Events
 * DOMContentLoaded
 */

function onDOMContentLoaded() {
  console.log("DOM Content Loaded");
  // console.log("Events Part 2");
  var userNameInputField = document.getElementById("userName");
  // console.log(userNameInputField);

  function onKeyUp(e) {
    //   e.preventDefault();
    //   console.log("Key up event triggered", e.target.value);
    console.log("change event triggered", e);
    // Validation : Only alphabets are allowed range of alphabets A-Z => 65-90 & a-z => 97-122
    if ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)) {
    } else {
      alert("Only alphabets are allowed");
    }
  }

  // Keyboard events :
  /**
   * keyup
   * keydown
   */
  userNameInputField.addEventListener("keyup", onKeyUp);

  /**
   * Form events :
   * change
   * focus
   * blur
   * submit
   */
  // Exercise : Find out the working of keypress event

  // userNameInputField.addEventListener("change", onKeyUp);

  function onFocus() {
    console.log("On Focus event triggred");
  }

  function onBlur() {
    console.log("On Blur event triggered");
  }

  userNameInputField.addEventListener("focus", onFocus);
  userNameInputField.addEventListener("blur", onBlur);

  function onFormSubmit(e) {
    // e.preventDefault();
    console.log("On submit event trigerred", e);
  }

  var form = document.getElementById("registrationForm");
  console.log(form);
  form.addEventListener("submit", onFormSubmit);

  function onImgLoadFailure() {
    console.log("Image load failure");
  }

  function onImgLoadSuccess() {
    console.log("Image loaded");
  }

  var img = document.createElement("img");
  img.src =
    "https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg";
  img.addEventListener("error", onImgLoadFailure);
  img.addEventListener("load", onImgLoadSuccess);
  document.body.append(img);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

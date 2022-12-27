// console.log("BOM");

var btn = document.getElementById("locateMeBtn");
// console.log(btn);

function onLocationSuccess(location) {
  console.log("Location retrieved successfully");
  console.log(location.coords.latitude, location.coords.longitude);
}

function onLocationFailure(err) {
  console.log("Location retrieval failed", err);
}

function onLocationListener() {
  //   console.log("On location clicked");
  //   navigator.geolocation.getCurrentPosition(
  //     onLocationSuccess,
  //     onLocationFailure
  //   );
//   for (var i = 0; i < 100; i++) {
//     open("https://google.com");
//   }
}

// onLocationListener();

btn.addEventListener("click", onLocationListener);

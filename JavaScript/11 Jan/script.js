document.addEventListener("DOMContentLoaded", function () {
  const src = [
    {
      artist: "John Coltrane",
      album: "My Favorite Things",
      trackSrc:
        "https://ia803202.us.archive.org/10/items/cd_john-coltrane-my-favorite-things_john-coltrane/disc1/01.%20John%20Coltrane%20-%20My%20Favorite%20Things_sample.mp3",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/9/9b/My_Favorite_Things.jpg",
    },
    {
      artist: "Stan Getz",
      album: "Winter Wonderland",
      trackSrc:
        "https://ia800100.us.archive.org/20/items/cd_west-coast-live_stan-getz-chet-baker/disc1/01.06.%20Stan%20Getz;%20Chet%20Baker%20-%20Winter%20Wonderland_sample.mp3",
      thumbnail:
        "https://ia800100.us.archive.org/20/items/cd_west-coast-live_stan-getz-chet-baker/cd_west-coast-live_stan-getz-chet-baker_itemimage.png",
    },
    {
      artist: "Monty Alexander",
      album: "Pure Imagination",
      trackSrc:
        "https://ia800107.us.archive.org/9/items/cd_steamin_monty-alexander/disc1/01.%20Monty%20Alexander%20-%20Pure%20Imagination_sample.mp3",
      thumbnail:
        "https://ia800107.us.archive.org/9/items/cd_steamin_monty-alexander/cd_steamin_monty-alexander_itemimage.png",
    },
    {
      artist: "Ella Fitzgerald",
      album: "Sleigh Ride",
      trackSrc:
        "https://ia800801.us.archive.org/27/items/cd_ella-wishes-you-a-swinging-christmas_ella-fitzgerald/disc1/05.%20Ella%20Fitzgerald%20-%20Sleigh%20Ride_sample.mp3",
      thumbnail:
        "https://ia800801.us.archive.org/27/items/cd_ella-wishes-you-a-swinging-christmas_ella-fitzgerald/cd_ella-wishes-you-a-swinging-christmas_ella-fitzgerald_itemimage.png",
    },
    {
      artist: "Dave Brubeck",
      album: "Greensleeves",
      trackSrc:
        "https://ia800705.us.archive.org/16/items/cd_a-dave-brubeck-christmas_dave-brubeck/disc1/07.%20Dave%20Brubeck%20-%20What%20Child%20Is%20This_%20%28Greensleeves%29_sample.mp3",
      thumbnail:
        "https://ia800705.us.archive.org/16/items/cd_a-dave-brubeck-christmas_dave-brubeck/cd_a-dave-brubeck-christmas_dave-brubeck_itemimage.png",
    },
  ];

  for (let x = 0; x < src.length; x++) {
    let s = src[x];
    console.log(s);

    let number = parseInt(x) + 1;
    // let artist = document.createTextNode(number + ": " + s.artist);
    // 1: John Coltrane
    // 2: Stan Getz
    // let track_name = document.createTextNode(s.album);

    // <div>
    //   <h3>1: John Coltrane</h3>
    //   <p>My Favorite Things</p>
    // </div>;
    let card = document.createElement("div");

    let artist_text = document.createElement("h3");
    artist_text.innerText = number + ": " + s.artist;

    let track_text = document.createElement("p");
    track_text.innerText = s.album;

    card.appendChild(artist_text);
    card.appendChild(track_text);

    card.classList.add("item");
    card.dataset.index = x;

    document.getElementById("list").appendChild(card);
  }

  displayTrack(0);

  let listItems = document.querySelectorAll(".item");
  for (let i = 0; i < listItems.length; i++) {
    const card = listItems[i];
    card.addEventListener("click", function () {
      displayTrack(card.dataset.index);
    });
  }

  function displayTrack(x) {
    // Remove the active class from the previuosly selected element
    // Add the active class to the current selected element
    let active = document.querySelector(".is-active");
    if (active) {
      active.classList.remove("is-active");
    }

    // Found the elemnent on which we have clicked and add the active class to ti
    let el = document.getElementById("list").children[x];
    el.classList.add("is-active");
    //---------------------------------------

    let s = src[x],
      artist = s.artist,
      track = s.album,
      audio = s.trackSrc,
      img = s.thumbnail,
      number = parseInt(x) + 1;

    document.getElementById("title").innerText = number + ": " + artist;
    document.getElementById("song_title").innerText = track;
    let thumbnail = document.getElementById("art");
    thumbnail.src = img;
    thumbnail.alt = artist + " " + track;
    document.getElementById("audio").src = audio;
  }
});

// Error handling example

// const userName = "Alex";

// try {
//   userName.push("ABCD");
// } catch (error) {
//   console.log(error);
// }
// console.log("ABCDEFGH");

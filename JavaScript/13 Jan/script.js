// console.log("Netflix");
const movies = {
  type: "Success",
  data: [
    {
      id: 315162,
      title: "Puss in Boots: The Last Wish",
      rating: 8.6,
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      poster: "https://image.tmdb.org/t/p/w500/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 16,
          name: "Animation",
        },
      ],
    },
    {
      id: 76600,
      title: "Avatar: The Way of Water",
      rating: 7.7,
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
    },
    {
      id: 899112,
      title: "Violent Night",
      rating: 7.7,
      overview:
        "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
      poster: "https://image.tmdb.org/t/p/w500/1XSYOP0JjjyMz1irihvWywro82r.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/zrnzWEQSJ0jtufPGR4SEnB6s1q1.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
      ],
    },
    {
      id: 536554,
      title: "M3GAN",
      rating: 7.1,
      overview:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      poster: "https://image.tmdb.org/t/p/w500/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg",
      genre: [
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
    },
    {
      id: 411,
      title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      rating: 7.1,
      overview:
        "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
      poster: "https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/AuV99eQivVWuk2AOSM6hYh9QRPQ.jpg",
      genre: [
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
    },
    {
      id: 736526,
      title: "Troll",
      rating: 6.7,
      overview:
        "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
      poster: "https://image.tmdb.org/t/p/w500/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
    },
    {
      id: 436270,
      title: "Black Adam",
      rating: 7.2,
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      poster: "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
    },
    {
      id: 19995,
      title: "Avatar",
      rating: 7.6,
      overview:
        "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
    },
    {
      id: 661374,
      title: "Glass Onion: A Knives Out Mystery",
      rating: 7.1,
      overview:
        "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
      poster: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
      genre: [
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 9648,
          name: "Mystery",
        },
        {
          id: 53,
          name: "Thriller",
        },
      ],
    },
    {
      id: 724495,
      title: "The Woman King",
      rating: 7.8,
      overview:
        "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
      poster: "https://image.tmdb.org/t/p/w500/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/gkseI3CUfQtMKX41XD4AxDzhQb7.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 36,
          name: "History",
        },
      ],
    },
    {
      id: 877269,
      title: "Strange World",
      rating: 6.5,
      overview:
        "A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
      poster: "https://image.tmdb.org/t/p/w500/fHMqfsYyl3lskPK2RiFRwhzwuep.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg",
      genre: [
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 16,
          name: "Animation",
        },
        {
          id: 10751,
          name: "Family",
        },
      ],
    },
    {
      id: 668482,
      title: "Roald Dahl's Matilda the Musical",
      rating: 6.8,
      overview:
        "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
      poster: "https://image.tmdb.org/t/p/w500/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/nWs0auTqn2UaFGfTKtUE5tlTeBu.jpg",
      genre: [
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
    },
    {
      id: 1041513,
      title: "Encanto at the Hollywood Bowl",
      rating: 6.9,
      overview:
        "A taped performance of the Encanto Live-to-Film Concert Experience at the Hollywood Bowl. The original cast puts on a miracle of a concert as they sing the favorite songs, accompanied by a full orchestra and 50 person ensemble, and the Hollywood Bowl transforms into Casita!",
      poster: "https://image.tmdb.org/t/p/w500/sa3Ku5yNVjp8NloWxJoI9dQjvOi.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/7tfQMNy63H4PxuFkp52I7aEkrcW.jpg",
      genre: [
        {
          id: 10402,
          name: "Music",
        },
      ],
    },
    {
      id: 740952,
      title: "Savage Salvation",
      rating: 5.5,
      overview:
        "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
      poster: "https://image.tmdb.org/t/p/w500/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 80,
          name: "Crime",
        },
        {
          id: 18,
          name: "Drama",
        },
      ],
    },
    {
      id: 676547,
      title: "Prey for the Devil",
      rating: 7.2,
      overview:
        "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
      poster: "https://image.tmdb.org/t/p/w500/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/7dm64SW5L5CCg47kAEAcdCGaq5i.jpg",
      genre: [
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 53,
          name: "Thriller",
        },
      ],
    },
    {
      id: 1015963,
      title: "High Heat",
      rating: 4.9,
      overview:
        "When the local mafia shows up to burn down her restaurant, Ana, a chef with a meticulous past, defends her turf and proves her knife skills both in and out of the kitchen.",
      poster: "https://image.tmdb.org/t/p/w500/mmD0NVdhiRiCu64YKem5GK5PSfy.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/mYQSbZdGX0JJb49NLO04UA0iFEU.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
      ],
    },
    {
      id: 873126,
      title: "My Name Is Vendetta",
      rating: 6.7,
      overview:
        "After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.",
      poster: "https://image.tmdb.org/t/p/w500/7l3war94J4tRyWUiLAGokr3ViF2.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/edOt2jNyCbb8SQSvulD2sRRJhmA.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 80,
          name: "Crime",
        },
        {
          id: 53,
          name: "Thriller",
        },
      ],
    },
    {
      id: 683328,
      title: "The Big 4",
      rating: 6.9,
      overview:
        "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
      poster: "https://image.tmdb.org/t/p/w500/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
      ],
    },
    {
      id: 505642,
      title: "Black Panther: Wakanda Forever",
      rating: 7.5,
      overview:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
      genre: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
    },
    {
      id: 943221,
      title: "Mal de ojo",
      rating: 6.8,
      overview:
        "Nala, a thirteen-year-old girl from the city, travels with her family to her grandmother's home in the countryside, to try to find a cure for her little sister's mysterious illness - But she'll soon find her granny is not exactly what she seems...",
      poster: "https://image.tmdb.org/t/p/w500/sChhX2wWgVbTd6j38ADrAfHd4mE.jpg",
      banner:
        "https://image.tmdb.org/t/p/original/xOcwcyLM2lqXCrZG8AIHC8DXElF.jpg",
      genre: [
        {
          id: 27,
          name: "Horror",
        },
      ],
    },
  ],
};

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card");
  console.log(movie.genre);
  let genre = "";
  //   for (let i = 0; i < movie.genre.length; i++) {
  //     const g = movie.genre[i];
  //     genre += g.name;
  //     genre += " ";
  //   }

  movie.genre.forEach(function (g) {
    genre += g.name;
    genre += " ";
  });

//   console.log(genre);
  card.innerHTML = `
    <img src="${movie.poster}" />
    <div class="info">
      <div class="cta-container">
        <div>
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-plus"></i>
          <i class="fa-thin fa-thumbs-up"></i>
          <i class="fa-thin fa-thumbs-down"></i>
        </div>
        <div>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <h4 class="title">${movie.title}</h4>
      <h4 class="match">Ratings : ${movie.rating}/10</h4>
      <span class="genere">${genre}</span>
    `;
  return card;
}

$(document).ready(function () {
  //   function onMoviesListReceived(moviesList) {
  //     console.log(moviesList);
  //   }
  //   $.get("https://nextflix-azure.vercel.app/api/popular?type=movie")
  //     .done(onMoviesListReceived)
  //     .fail();

  const moviesList = movies.data;
  console.log(moviesList);
  const genreSection = document.getElementById("genreSection");
  for (let i = 0; i < moviesList.length; i++) {
    const movie = moviesList[i];
    const card = createMovieCard(movie);
    genreSection.append(card);
    if (i > 4) {
      break;
    }
  }

  //   const movie;

  // For poster image
  //   movie.poster => For image on card
  // movie.title
  // movie.genre
});

// Exercise (Array methods): map, forEach, find, findIndex

// options for API request
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9587df2e4emsh9bcd9fb242a1547p13743djsnf478d98256c9',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

// parameters for API request
const params = new URLSearchParams({
  startYear: '2015',
  list: 'most_pop_series'
});

const url = `https://moviesdatabase.p.rapidapi.com/titles/random?${params.toString()}`;
const moviesContainer = document.querySelector(".movies_container");
let series;

// function to fetch data from API endpoint
async function fetchData(tileNumber) {
  try {
    const response = await fetch(url, options);
    const series = Object.values(await response.json())[1];
    
    moviesContainer.innerHTML = ""; // Clear container before appending tiles
    
    for (let i = 0; i < tileNumber; i++) {
      const movieTile = createTile(
        series[i]["titleText"]["text"],
        series[i]["titleType"]["text"],
        series[i]["primaryImage"]["url"],
        series[i]["primaryImage"]["caption"]["plainText"]
      );
      moviesContainer.appendChild(movieTile);
    }
  } catch (error) {
    console.error(error);
  }
}

// create movie tile
function createTile(title, showType, image, alt) {
  const container = document.createElement('div');
  const imageElement = document.createElement('img');
  container.classList.add("movie-tile");
  imageElement.classList.add("movie_banner");
  imageElement.src = image;
  imageElement.alt = alt;
  const header3Element = document.createElement('h3');
  const header4Element = document.createElement('h4');
  header4Element.textContent = showType;
  header3Element.textContent = title;
  container.appendChild(imageElement);
  container.appendChild(header4Element);
  container.appendChild(header3Element);

  return container;
}

// handle swiper activating for movie tiles
async function handleViewportChange() {
  const swiper = document.querySelector(".swiper");
  
  if (window.innerWidth < 1420) {
    if(!swiper.classList.contains("active")) {
        swiper.classList.add("active");
        await fetchData(10);
    }
  } else {
    if(swiper.classList.contains("active")) {
        swiper.classList.remove("active");
        await fetchData(4);
    }
  }
}

// event listeners
document.addEventListener("DOMContentLoaded", async () => {
  await fetchData(4); 
  handleViewportChange();
});

window.addEventListener("resize", () => {
  handleViewportChange();
});
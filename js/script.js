"use strict";

let _contents1= [];
let _contents2 = [];
let _contents3 = [];
let _contents4 = [];

//fetching restaurants
fetch("js/restaurants.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents1 = data;
  appendRestaurants(_contents1);
  appendRestaurantsSection(_contents1);
});



//fetching sightseeing
fetch("js/sightseeing.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents2 = data;
  appendSightseeing(_contents2);
  appendSightseeingSection(_contents2);
});

//fetching cafes
fetch("js/cafes.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents3 = data;
  appendCafes(_contents3);
  appendCafesSection(_contents3);
});

//fetching activities
fetch("js/activities.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents4 = data;
  appendActivities(_contents4);
  appendActivitiesSection(_contents4);
});

//123



//detail view
function showDetailView1(id) {
  const content = _contents1.find(content => content.id == id);
  document.querySelector("#detailView").innerHTML = /*html*/`
  <div>
  <input name="action" onclick="history.back()" type="submit" value="Tilbage"/>
  <img src="${content.image}" class="detail-img">
  <h1 class="detail-header">${content.name}</h1>
  <h2 class="detail-subheader">${content.category}</h2>
  <p class="detail-description">${content.description}</p>
  <div class="price-time">
  <p class="detail-price-time">${content.price}</p>
  <p class="detail-price-time">${content.time}</p>
  <div class="button-div">
  <button class="detail-btn1">FØJ TIL KALENDER</button>
  <button class="detail-btn2">BOOK NU</button>
  </div>
  </div>
  <address class="detail-address"><i class="fas fa-map-marker-alt fa-lg"></i> ${content.address}</address>
  
`;
  navigateTo("detailView");
} 

//detail view
function showDetailView2(id) {
  const content = _contents4.find(content => content.id == id);
  document.querySelector("#detailView").innerHTML = /*html*/`
  <div>
  <input name="action" onclick="history.back()" type="submit" value="Tilbage"/>
  <img src="${content.image}" class="detail-img">
  <h1 class="detail-header">${content.name}</h1>
  <h2 class="detail-subheader">${content.category}</h2>
  <p class="detail-description">${content.description}</p>
  <div class="price-time">
  <p class="detail-price-time">${content.price}</p>
  <p class="detail-price-time">${content.time}</p>
  <div class="button-div">
  <button class="detail-btn1">FØJ TIL KALENDER</button>
  <button class="detail-btn2">BOOK NU</button>
  </div>
  </div>
  <address class="detail-address"><i class="fas fa-map-marker-alt fa-lg"></i> ${content.address}</address>
`;
  navigateTo("detailView");
} 

//detail view
function showDetailView3(id) {
  const content = _contents3.find(content => content.id == id);
  document.querySelector("#detailView").innerHTML = /*html*/`
  <div>
  <input name="action" onclick="history.back()" type="submit" value="Tilbage"/>
  <img src="${content.image}" class="detail-img">
  <h1 class="detail-header">${content.name}</h1>
  <h2 class="detail-subheader">${content.category}</h2>
  <p class="detail-description">${content.description}</p>
  <div class="price-time">
  <p class="detail-price-time">${content.price}</p>
  <p class="detail-price-time">${content.time}</p>
  <div class="button-div">
  <button class="detail-btn1">FØJ TIL KALENDER</button>
  <button class="detail-btn2">BOOK NU</button>
  </div>
  </div>
  <address class="detail-address"><i class="fas fa-map-marker-alt fa-lg"></i> ${content.address}</address>
`;
  navigateTo("detailView");
} 

//detail view
function showDetailView4(id) {
  const content = _contents2.find(content => content.id == id);
  document.querySelector("#detailView").innerHTML = /*html*/`
  <div>
  <input name="action" onclick="history.back()" type="submit" value="Tilbage"/>
  <img src="${content.image}" class="detail-img">
  <h1 class="detail-header">${content.name}</h1>
  <h2 class="detail-subheader">${content.category}</h2>
  <p class="detail-description">${content.description}</p>
  <div class="price-time">
  <p class="detail-price-time">${content.price}</p>
  <p class="detail-price-time">${content.time}</p>
  <div class="button-div">
  <button class="detail-btn1">FØJ TIL KALENDER</button>
  <button class="detail-btn2">BOOK NU</button>
  </div>
  </div>
  <address class="detail-address"><i class="fas fa-map-marker-alt fa-lg"></i> ${content.address}</address>
`;
  navigateTo("detailView");
} 


//showing detail view for the sections 
//restaurants 
function appendRestaurantsSection(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/` 
    <article class="section-style">
    <img src="${content.image}" onclick="showDetailView1('${content.id}')">
    <h1>${content.name}</h1>
    <p class="detail-description">${content.descriptionshort}</p>
    </article>
    `;
  }
  document.querySelector("#detailSectionRestaurants").innerHTML = htmlTemplate;
};

//cafes

function appendCafesSection(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/` 
    <article class="section-style">
    <img src="${content.image}" onclick="showDetailView3('${content.id}')">
    <h1>${content.name}</h1>
    <p class="detail-description">${content.descriptionshort}</p>
    </article>
    `;
  }
  document.querySelector("#detailSectionCafes").innerHTML = htmlTemplate;
};

//sightseeing

function appendSightseeingSection(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/` 
    <article class="section-style">
    <img src="${content.image}" onclick="showDetailView4('${content.id}')">
    <h1>${content.name}</h1>
    <p class="detail-description">${content.descriptionshort}</p>
    </article>
    `;
  }
  document.querySelector("#detailSectionSightseeing").innerHTML = htmlTemplate;
};

//activities 
function appendActivitiesSection(contents) {
  let htmlTemplate = "";
  for (let content of contents) {
    htmlTemplate += /*html*/` 
    <article class="section-style">
    <img src="${content.image}" onclick="showDetailView2('${content.id}')">
    <h1>${content.name}</h1>
    <p class="detail-description">${content.descriptionshort}</p>
    </article>
    `;
  }
  document.querySelector("#detailSectionActivities").innerHTML = htmlTemplate;
};


  //appending cafés
  function appendRestaurants(contents) {
    let htmlTemplate = "";
    for (let content of contents) {
      htmlTemplate += /*html*/` 
      <article>
      <img src="${content.image}" onclick="showDetailView1('${content.id}')">
      <h1>${content.name}</h1>
      </article>
      `;
    }
    document.querySelector("#restaurants").innerHTML = htmlTemplate;
  };

   //appending activities
   function appendActivities(contents) {
    let htmlTemplate = "";
    for (let content of contents) {
      htmlTemplate += /*html*/` 
      <article>
      <img src="${content.image}" onclick="showDetailView2('${content.id}')">
      <h1>${content.name}</h1>
      </article>
      `;
    }
    document.querySelector("#activities").innerHTML = htmlTemplate;
  };

    //appending cafes
    function appendCafes(contents) {
        let htmlTemplate = "";
        for (let content of contents) {
          htmlTemplate += /*html*/` 
          <article>
          <img src="${content.image}" onclick="showDetailView3('${content.id}')">
          <h1>${content.name}</h1>
          </article>
          `;
        }
        document.querySelector("#cafes").innerHTML = htmlTemplate;
      };

          //appending activities
    function appendSightseeing(contents) {
        let htmlTemplate = "";
        for (let content of contents) {
          htmlTemplate += /*html*/` 
          <article>
          <img src="${content.image}" onclick="showDetailView4('${content.id}')">
          <h1>${content.name}</h1>
          </article>
          `;
        }
        document.querySelector("#sightseeing").innerHTML = htmlTemplate;
      };

alert("This is for mobile view only!");
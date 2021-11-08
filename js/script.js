"use strict";

let _contents = [];

fetch("js/restaurants.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents = data;
  appendRestaurants(_contents);
});

fetch("js/sightseeing.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents = data;
  appendSightseeing(_contents);
});

fetch("js/cafes.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents = data;
  appendCafes(_contents);
});

fetch("js/activities.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  _contents = data;
  appendActivities(_contents);
});


  //appending cafés
  function appendRestaurants(contents) {
    let htmlTemplate = "";
    for (let content of contents) {
      htmlTemplate += /*html*/` 
      
      <h1>${content.name_r}</h1>
      <img src="${content.image_r}">
      
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
      <h1>${content.name_a}</h1>
      <img src="${content.image_a}">
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
          <h1>${content.name_c}</h1>
          <img src="${content.image_c}">
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
          <h1>${content.name_s}</h1>
          <img src="${content.image_s}">
          </article>
          `;
        }
        document.querySelector("#sightseeing").innerHTML = htmlTemplate;
      };


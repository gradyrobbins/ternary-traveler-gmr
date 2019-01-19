// author: Grady R with lots of help from Jisie David/fridgify
// This component will get the data, build the HTML from the data and append it to the DOM.

// To get the data, we will use the dataManager component.
import dataManager from "./dataManager"
// To build the HTML for each object in the array of places(which is what the data coming from the API becomes once we parse it), we will use the food component.
import interests from "./interests"

const domBuilder = {


    appendPlaces(){
        // 1. Get data
        dataManager.getAllPlaces()
        // 2. Iterate over data and build HTML for each item
        .then(allPlaces => {

            allPlaces.forEach(place => {
                // console.log("forEach places: ", place)
                let placesDiv = document.getElementById("places");
                placesDiv.innerHTML += `<a href="${place.name}" id="${place.id}">${place.name} <br/>`
            })
        })
    },
  appendInterests(){
    // 1. Get data
    // The getAllInterests method will do a fetch and return a promise. This call will return the data from the API in the response.
    dataManager.getAllInterests()
    .then(allInterests => {

      // Begin building An empty document fragment
      let interestsDocFragment = document.createDocumentFragment()

      // 2. Iterate over data and build HTML for each item
      // We loop over the array of objects returned from our API and for each obect, we make a call to the newsBuider method in the news module. This method takes a news object as an argument and returns an HTML component. Once we have that HTML, we append it to our document fragment so that it is slowly built up. By the end of the forEach loop, our document fragment contains all the HTML for all our data.
      allInterests.forEach(newsObject => {
          console.log("forEach interestsObject: ", newsObject)
        let interestsHTML = interests.interestsBuilder(newsObject)
        interestsDocFragment.appendChild(interestsHTML)
      })

      // 3. Append the HTML to the DOM
      // We get a reference to a HTML element with the class "output" and append our document fragment to that element. Because the HTML element with class "output" is already on the DOM, the HTML in the document fragment is appended to the DOM.
      let outputArticle = document.querySelector(".output-container")

      outputArticle.appendChild(interestsDocFragment)
    })
  }
  // location.reload(true)
}

export default domBuilder
console.log("Hello main.js")


import dataManager from "./dataManager";
import eventListeners2 from "./eventListeners2"
// import form from "./form"
// import interestsList from "./interestsList"
import domBuilder from "./domBuilder"


eventListeners2.renderForm();
// interestsList.newsify()
domBuilder.appendInterests();
domBuilder.appendPlaces();

dataManager.getAllPlaces()
// .then(response =>
    // console.log("getAllPlaces" , response)
    // )


dataManager.getAllInterests();







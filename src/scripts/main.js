console.log("Hello main.js")


import dataManager from "./dataManager";
import eventListeners2 from "./eventListeners2"
// import form from "./form"
import interestsList from "./interestsList"


eventListeners2.renderForm();
interestsList.newsify()

dataManager.getAllPlaces();
dataManager.getAllInterests();







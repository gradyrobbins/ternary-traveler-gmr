console.log("Hello main.js")


import dataManager from "./dataManager";
import eventListeners2 from "./eventListeners2"
// import form from "./form"
import newsList from "./newsList"


eventListeners2.renderForm();
newsList.newsify()

dataManager.getAllPlaces();
dataManager.getAllInterests();


// var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};
// dataManager.yayNewPal(myHonda)






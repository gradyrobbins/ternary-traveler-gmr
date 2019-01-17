//author: Grady R.
// purpose: Forms module, object with methods to retrieve misc forms.

import dataManager from "./dataManager";
import eventListeners2 from "./eventListeners2";


// This module will build a form and append it to the DOM. The form will contain input fields for a user to add a new interest to their places-list and a button with an event listener that will listen for the click
    // 1. Build HTML form
    // 2. Attach event listener to button in form
    // 3. Append the HTML form to the DOM

// This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
// 1. Get user input that user entered
// 2. Create a new object with the same structure we have been using throughout the application to represent a interest item:
// {
//   name: "user input name",
//   description: "user input description",
//   cost: "user input cost",
//   place: "user select  place from dropdown",
// }
// 3. Call the method(postNewInterest) with the fetch request to POST to the API and pass it the object we created in the previous step

const form = {
    renderForm() {

    // 1. Build HTML form see fridgify:// createAndAppendForm () {
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add a new interest"

    let NameField = document.createElement("fieldset")
        let NameLabel = document.createElement("label")
            NameLabel.textContent = "Name"
            NameLabel.setAttribute("for", "interest__name__label")

        let NameInput = document.createElement("input")
            NameInput.setAttribute("id", "interest__name__input")
            NameInput.setAttribute("name", "interest__name__input")

    NameField.appendChild(NameLabel)
    NameField.appendChild(NameInput)

    let placeTypeSelect = document.createElement("select")
    placeTypeSelect.setAttribute("id", "place__type__select")

    //     <select>
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>




    let submitButton = document.createElement("button")
        submitButton.setAttribute("id", "saveInterestsButton")
        submitButton.textContent = "Add New Interest"

    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewInterest)

    // 3. Append the HTML form to the DOM
    //Notice that I have added an article element to my index.html with the class "form".

    let FormFragment = document.createDocumentFragment()
    FormFragment.appendChild(formHeader)
    FormFragment.appendChild(NameField)
    FormFragment.appendChild(placeTypeSelect)
    FormFragment.appendChild(submitButton)

    let formArticle = document.querySelector("#forms")
    formArticle.appendChild(FormFragment)


    //see add-product from C29 repo; trying to populate dropdown select fields via fetch


    // fetch("http://localhost:8088/places")
    // .then(response => response.json())
    // .then(places => {
    //     console.log(places)
        // let productTypesOptionFragment = document.createDocumentFragment()
        // productTypes.forEach(productType => {
        //     let productTypeOption = document.createElement("option")
        //     productTypeOption.setAttribute("value", productType.productTypeId)
        //     productTypeOption.textContent = productType.name
        //     productTypesOptionFragment.appendChild(productTypeOption)
        // }
        // )

        // FormFragment.appendChild(placeTypeSelect)
//   productTypeSelect.appendChild(productTypesOptionFragment)

// })


},

// This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
handleAddNewInterest (event) {
    // 1. Get user input that user entered
    let interestName = document.querySelector("#interest__name__input").value
    // console.log("interestName")
    // console.log(interestName)
    // 2. Create a new object with the same structure we have been using throughout the application to represent a news item:
    // {
        //   name: "user input name",
        //   description: "user input description",
        //   cost: "user input cost",
        //   place: "user select  place from dropdown",
        // }


    let newInterest = {
        name: interestName,
        // description: "user input description",
        //   cost: "user input cost",
        //   place: "user select  place from dropdown",
      }
    //   console.log("newInterest as object " , newInterest)
    // 3. Call the method(postnewNews) with the fetch request to POST to the API and pass it the object we created in the previous step
      dataManager.postNewInterest(newInterest)
      eventListeners2.clearForm();
    // Notice the import statement at the top of the module so I can call a method in the dataCollection module.



    eventListeners2.clearForm()
    // newsList.newsify()

}


}

export default form
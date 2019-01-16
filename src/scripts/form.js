//author: Grady R.
// purpose: Forms module, object with methods to retrieve misc. forms.

// This module will build a form and append it to the DOM. The form will contain input fields for a user to add a new food to their refrigerator and a button with an event listener that will listen for the click
// 1. Build HTML form
// 2. Attach event listener to button in form
// 3. Append the HTML form to the DOM

// This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
// 1. Get user input that user entered
// 2. Create a new object with the same structure we have been using throughout the application to represent a news item:
// {
    //   name: "user input name",
    //   synopsis: "user input synopsis",
    //   type: "user input type"
    // }
    // 3. Call the method(postNewFood) with the fetch request to POST to the API and pass it the object we created in the previous step


// import dataCollection2 from "./dataCollection2";
// import newsList from "./newsList"

const form = {
    renderForm() {

    // 1. Build HTML form see fridgify:// createAndAppendForm () {
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add a new interest"

    let NameField = document.createElement("fieldset")

        let NameLabel = document.createElement("label")
            NameLabel.textContent = "Title"
            NameLabel.setAttribute("for", "x__title")

        let NameInput = document.createElement("input")
            NameInput.setAttribute("id", "x__title")
            NameInput.setAttribute("name", "x__title")

    NameField.appendChild(NameLabel)
    NameField.appendChild(NameInput)


    let submitButton = document.createElement("button")
        submitButton.setAttribute("id", "saveNewsButton")

    submitButton.textContent = "Add New Interest"

    // 2. Attach event listener to button in form
    // submitButton.addEventListener("click", this.handleAddNewNews)
    submitButton.addEventListener("click", console.log("submit new interest button clicked"))


}

}

export default form
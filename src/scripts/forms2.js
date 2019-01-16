import dataCollection2 from "./dataCollection2";
import newsList from "./newsList"
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



const forms2 = {
    

    renderNewsForm2() {

    // 1. Build HTML form see fridgify:// createAndAppendForm () {
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add a new news article"

    let newsNameField = document.createElement("fieldset")

        let newsNameLabel = document.createElement("label")
            newsNameLabel.textContent = "Title"
            newsNameLabel.setAttribute("for", "news__title")

        let newsNameInput = document.createElement("input")
            newsNameInput.setAttribute("id", "news__title")
            newsNameInput.setAttribute("name", "news__title")

    newsNameField.appendChild(newsNameLabel)
    newsNameField.appendChild(newsNameInput)

    let newsURL = document.createElement("fieldset")

        let newsURLlabel = document.createElement("label")
        newsURLlabel.textContent = "URL"
        newsURLlabel.setAttribute("for", "news__url")

        let newsURLinput = document.createElement("input")
        newsURLinput.setAttribute("id", "news__url")
        newsURLinput.setAttribute("name", "news__url")

    newsURL.appendChild(newsURLlabel)
    newsURL.appendChild(newsURLinput)

        // let foodTypeField = document.createElement("fieldset")

        // let foodTypeLabel = document.createElement("label")
        // foodTypeLabel.textContent = "Type"
        // foodTypeLabel.setAttribute("for", "food__type")
        // let foodTypeInput = document.createElement("input")
        // foodTypeInput.setAttribute("id", "food__type")
        // foodTypeInput.setAttribute("name", "food__type")

        // foodTypeField.appendChild(foodTypeLabel)
        // foodTypeField.appendChild(foodTypeInput)

        let submitButton = document.createElement("button")
        submitButton.setAttribute("id", "saveNewsButton")

    submitButton.textContent = "Add News"

            // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewNews)

    // 3. Append the HTML form to the DOM
    //Notice that I have added an article element to my index.html with the class "form".
    let newsFormFragment = document.createDocumentFragment()
    newsFormFragment.appendChild(formHeader)
    newsFormFragment.appendChild(newsNameField)
    newsFormFragment.appendChild(newsURL)
    // newsFormFragment.appendChild(foodTypeField)
    newsFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector("#formsContainer")
    formArticle.appendChild(newsFormFragment)

  },

  // This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
  handleAddNewNews (event) {
    // 1. Get user input that user entered
    let newsTitle = document.querySelector("#news__title").value
    let inputNewsurl = document.querySelector("#news__url").value
    // let inputNewsurl = document.querySelector("#news__url").value
    console.log("Title " , newsTitle)
    console.log("URL ", inputNewsurl)
    // 2. Create a new object with the same structure we have been using throughout the application to represent a news item:
    // {
      //   name: "user input name",
      //   synopsis: "user input synopsis",
      //   url: "user input url"
    // }

    let newNews = {
      title: newsTitle,
      url: inputNewsurl,
    //   url: inputNewsurl
    }
    console.log("newNews object just created :", newNews)

    // 3. Call the method(postnewNews) with the fetch request to POST to the API and pass it the object we created in the previous step

    // Notice the import statement at the top of the module so I can call a method in the dataCollection module.
    dataCollection2.postNewsEntry(newNews)

    forms2.clearForm()
    newsList.newsify()
  },


  clearForm() {
      // console.log("save news button clicked");
      document.getElementById("news__title").value = "";
      document.getElementById("news__url").value = "";
    //   document.getElementById("newsURL").value = "";

      // return
    },





}

    export default forms2
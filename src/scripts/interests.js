// author : Grady R. and lots of credit due to Jisie David/fridgify app
//Given a single  object, this component builds out the HTML and returns it
import dataManager from "./dataManager"
import interestsList from "./interestsList";
import form from "./form"

const interests = {

// This method takes one argument, which we expect to be an object that represents a interests article that will have the following structure:
// {
//     "id": 1,
//     "placeId": 1,
//     "name": "Local Market",
//     "description": "Local market where you can try purchase local products and try the local food",
//     "cost": 0,
//     "review": ""
//   },

    // Given this object, the method will build HTML elements and append them appropriately so that it will look like this:
    // <article>
    //   <h3>name</h3>
    //   <p>description</p>
    //   <p>cost</p>
    //   <p>review</p>
    // </article>

    // This HTML is then returned to the point from where this method was called
    interestsBuilder(interestsObject) {

      let interestsArticle = document.createElement("article")
      interestsArticle.setAttribute("class", "interestsCard")

      let interestsName = document.createElement("h3")
      interestsName.textContent = `${interestsObject.name}`

      let interestsPlace = document.createElement("h5")
      interestsPlace.textContent = `Place (id# only): ${interestsObject.placeId}`

      let interestsDescription = document.createElement("p")
      interestsDescription.textContent = `Description: ${interestsObject.description}`

      let interestsCost = document.createElement("p")
      interestsCost.textContent = `Cost: ${interestsObject.cost}`

      let interestsReview = document.createElement("p")
      interestsReview.textContent = `Review: ${interestsObject.review}`

      //Jisie's from fridgify
          // In order to change the data for an existing  item in our API, we need to provide the user with a way to edit the existing values. This means we will show the user a form with the existing values already populated. Once again, we want our data to be our point of truth. So we make a HTTP GET request targeting the specific  item the user wants to edit to get the data that will be populated in the form. Once we have that data, we can build the form, populate the input fields with our data form the GET request and then append that form to the appropriate place on the DOM.
          let editButton = document.createElement("button")
          editButton.setAttribute("id", `editInterestsButtonid#--${interestsObject.id}`)
          editButton.textContent = "Edit"
        editButton.addEventListener("click", () => {
          // let interestId = event.target.parentNode.id
          let interestId = `${interestsObject.id}`
          // let foodId = interestId.split("--")[1]
          dataManager.seeksInterestsId(interestId)
          .then(response => {
            form.renderEditForm(response)
            // foodEditForm.createAndAppendForm(articleId, response)
          })
        })






      let deleteinterestsButton = document.createElement("button")
      deleteinterestsButton.setAttribute("id", `deleteinterestsid#--${interestsObject.id}`)
      deleteinterestsButton.textContent = "Delete "

      deleteinterestsButton.addEventListener("click", () => {
          alert("delete button clicked, are you sure you want to delete this entry?")
          let interestsId = event.target.id.split("--")[1]
          dataManager.deleteInterestItem(interestsId)
          .then(response => {
                interestsList.newsify()
              })
            })

    interestsArticle.appendChild(interestsName);
    interestsArticle.appendChild(interestsPlace);
    interestsArticle.appendChild(interestsDescription)
    interestsArticle.appendChild(interestsCost)
    interestsArticle.appendChild(interestsReview)
      interestsArticle.appendChild(editButton)
      interestsArticle.appendChild(deleteinterestsButton)


    return interestsArticle
  }
}
  export default interests
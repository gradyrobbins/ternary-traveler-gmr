import dataManager from "./dataManager"
import interestList from "./interestsList"

const interestEditForm = {
  // This module will build an edit form and append it to the DOM. The form will contain input fields with existing values from the API and an Update button. The user can edit the values in the input fields. An event listener on the Update button will handle taking the new values entered by the user and calling the API to update the data.
  createAndAppendEditForm (arg1, arg2) {

    // Building the edit form with fields for the cost and review of the interest object. Each of the input fields contains the existing values from the database.
    let interestCostField = document.createElement("h4")

    let interestCostLabel = document.createElement("label")
    interestCostLabel.textContent = "Cost"
    let interestCostInput = document.createElement("input")
    interestCostInput.value = arg2.cost

    interestCostField.appendChild(interestCostLabel)
    interestCostField.appendChild(interestCostInput)

    let interestReviewField = document.createElement("h4")

    let interestReviewLabel = document.createElement("label")
    interestReviewLabel.textContent = "Review"
    let interestReviewInput = document.createElement("input")
    interestReviewInput.value = arg2.review

    interestReviewField.appendChild(interestReviewLabel)
    interestReviewField.appendChild(interestReviewInput)




    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    // There is an event listener on the Update button which will take the new values in the input fields and build an object for the food item to be edited. Then we make a HTTP PUT request where we target the food item we want to edit by specifying the id in the URL. We also pass the object representing the food item with the new values as data in our HTTP request. Once again, because our data has been modified, we make an HTTP GET request to get all the food items and display them.
    updateButton.addEventListener("click", () => {
        let editedInterest = {

          cost: interestCostInput.value,
          review: interestReviewInput.value,
          place: arg2.placeId,
          description: arg2.description

        }

        dataManager.thingsChange(arg1, editedInterest)
        .then(response => {
          interestList.newsify()
        })
      })

      // We passed in the id of the article so we know exactly where to append the edit form.
      let foodItemArticle = document.querySelector(`#editForm`)

      // Because we want to replace what is currently in the article element with the edit form, we clear out all children HTML elements in our targeted element before appending our edit form to it.
      while (foodItemArticle.firstChild) {
        foodItemArticle.removeChild(foodItemArticle.firstChild);
      }

      foodItemArticle.appendChild(interestCostField)
      foodItemArticle.appendChild(interestReviewField)
      foodItemArticle.appendChild(updateButton)
    }
  }
  export default interestEditForm
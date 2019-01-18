// author : Grady R. and lots of credit due to Jisie David/fridgify app
//Given a single  object, this component builds out the HTML and returns it
import dataManager from "./dataManager"
// import newsList from "./newsList";

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

      let interestsName = document.createElement("h3")
      interestsName.textContent = interestsObject.name

      let interestsDescription = document.createElement("p")
      interestsDescription.textContent = interestsObject.description

      let interestsCost = document.createElement("p")
      interestsCost.textContent = interestsObject.cost

      let interestsReview = document.createElement("p")
      interestsReview.textContent = interestsObject.review


        let editButton = document.createElement("button")
        editButton.setAttribute("id", `editInterestsButtonid#--${interestsObject.id}`)
        editButton.textContent = "Edit This Entry"

        editButton.addEventListener("click", () => {
            console.log("edit button clicked")
            let editinterestsId = event.target.id.split("--")[1]
            dataManager.seeksUserId(editinterestsId)
            .then(response => {
                  console.log(response)
                // interestsList.newsify()
                })


              })

      let deleteinterestsButton = document.createElement("button")
      deleteinterestsButton.setAttribute("id", `deleteinterestsid#--${interestsObject.id}`)
      deleteinterestsButton.textContent = "Delete this interests article"

      deleteinterestsButton.addEventListener("click", () => {
          console.log("delete button clicked")
          let interestsId = event.target.id.split("--")[1]
          dataManager.deleteInterestItem(interestsId)
        //   .then(response => {
        //         interestsList.newsify()
        //       })


            })

    interestsArticle.appendChild(interestsName);
    interestsArticle.appendChild(interestsDescription)
    interestsArticle.appendChild(interestsCost)
    interestsArticle.appendChild(interestsReview)
    interestsArticle.appendChild(editButton)
    interestsArticle.appendChild(deleteinterestsButton)


    return interestsArticle
  }
}
  export default interests
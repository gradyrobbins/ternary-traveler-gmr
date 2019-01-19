// Grady
// Grab some data
import form from "./form"


const dataManager = {

    // FETCH CALLS
      getAllPlaces() {
        return fetch("http://localhost:8088/places")
        .then(response => response.json())
        // .then(response => console.log(response))
      },

      getAllInterests() {
        return fetch("http://localhost:8088/interests")
        .then(response => response.json())
        // .then(response => console.log(response))
      },



      //POST
      postNewInterest(newInterestToSave) {
        return fetch("http://localhost:8088/interests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newInterestToSave)
        })
      },



      //***** TEST *****/
      // DELETE NEWS item
      deleteInterestItem(id) {
        return fetch(`http://localhost:8088/interests/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
      },

      //***** TEST *****/
      // EDIT USER - 2 STAGES

      //STAGE 1 - Get the id of the item.
      seeksInterestsId(id) {
        return fetch(`http://localhost:8088/interests/${id}`)
        .then(response => response.json())
        // .then(response => form.renderEditForm(response))
      },
      // //STAGE 2 - Do some stuff to the item.
      thingsChange(interestObjToEdit, editedObject) {
        return fetch(`http://localhost:8088/interests/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        })
      },


//       Make a request to the following URL: http://localhost:3000/products/1?_expand=productType
// Notice how we are getting all data about the product with id 1 but instead of the productTypeId, we get the data for the associated product type.



    }

    export default dataManager

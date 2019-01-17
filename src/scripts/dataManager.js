// Grady
// Grab some data
const dataManager = {

    // FETCH CALLS
      getAllPlaces() {
        return fetch("http://localhost:8088/places")
        .then(response => response.json())
        .then(response => console.log(response))
      },

      getAllInterests() {
        return fetch("http://localhost:8088/interests")
        .then(response => response.json())
        .then(response => console.log(response))
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
      // seeksUserId(id) {
      //   return fetch(`http://localhost:8088/users/${id}`)
      //   .then(response => response.json())
      // },
      // //STAGE 2 - Do some stuff to the item.
      // thingsChange() {
      //   return fetch(`http://localhost:8088/users/${id}`, {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(newUser)
      //   })
      // },






    }

    export default dataManager

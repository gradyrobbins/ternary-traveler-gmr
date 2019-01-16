// Grady
// Grab some data
const dataCollection2 = {
    //********* USERS TABLE *********//
    // Grab all user data
    // soManyFriend() {
    //   return fetch("http://localhost:8088/users")
    //   .then(response => response.json())
    //   // .then(response => {
    //   //   // WORKS
    //   //   console.log(response)
    //   // })
    // },
    //***** TEST *****/
    // ADD USER
    // yayNewPal(newUser) {
    //   return fetch("http://localhost:8088/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(newUser)
    //   })
    // },
    //News feature- gmr
    // getAllNews() {
    //   return fetch("http://localhost:8088/articles")
    //   .then(response => response.json())
    //   // .then(response => {
    //   // //   WORKS
    //   //   console.log("articles endpoint: " + response)
    //   // })
    // },

    postNewsEntry(newNewsEntry) {
      return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newNewsEntry)
      })
    },
  // *** EXPORT to registration.js (eventually forms.js) ***

    //***** TEST *****/
    // DELETE NEWS item
    deleteNewsItem(id) {
      return fetch(`http://localhost:8088/articles/${id}`, {
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

    //TASK FETCH CALLS
      getAllPlaces() {
        return fetch("http://localhost:8088/places")
        .then(response => response.json())
        .then(response => console.log(response))
      },

      postNewtask(newtaskToSave) {
        return fetch("http://localhost:8088/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newtaskToSave)
        })
      }
  }

  export default dataCollection2

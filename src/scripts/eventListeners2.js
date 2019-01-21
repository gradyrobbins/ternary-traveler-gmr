// All event listeners
// name: Grady R.
// purpose: build and export an object with methods allowing for eventlisteners.


import form from "./form"
// import dataManager from "./dataManager"



const eventListeners2 = {

    // when user clicks on "News" in NavBar, execute a function
    renderForm() {

        let formsPlaceholder = document.getElementById("formsPlaceholder");
        formsPlaceholder.addEventListener("click", () => {
            // console.log("click formsPlaceholder")
            let bloop = document.getElementById("forms")
            while (bloop.firstChild) {
                bloop.removeChild(bloop.firstChild);
              }

            form.renderForm();
            }
        );
    },

    // deleteNewsButton() {
    //         let deleteNewsButton = document.getElementById()
    //     }


        clearForm() {

                let inputFields = document.querySelectorAll("inputField")
                inputFields.value = ""
                // inputFields.innerHTML = ""
            }

    }

    export default eventListeners2
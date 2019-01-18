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
            form.renderForm();
            }
        );
    },

    // deleteNewsButton() {
    //         let deleteNewsButton = document.getElementById()
    //     }


        clearForm() {

                document.querySelectorAll("inputField").value = "";
            }

    }

    export default eventListeners2
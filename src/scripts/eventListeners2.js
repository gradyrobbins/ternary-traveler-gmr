// All event listeners
// name: Grady R.
// purpose: build and export an object with methods allowing for eventlisteners.


// import forms2 from "./forms2"
import form from "./form"
import dataCollection2 from "./dataCollection2"



const eventListeners2 = {

    // when user clicks on "News" in NavBar, execute a function
    renderForm() {

        let formsPlaceholder = document.getElementById("formsPlaceholder");
        formsPlaceholder.addEventListener("click", () => {
            console.log("click formsPlaceholder")
            // forms2.renderNewsForm2()
            form.renderForm();
        }
        );
    },

    // deleteNewsButton() {
    //     let deleteNewsButton = document.getElementById()
    // }
}

export default eventListeners2
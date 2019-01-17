// author : Grady R. and lots of credit due to Jisie David/fridgify app
//Given a single food object, this component builds out the HTML and returns it
import dataManager from "./dataManager"
import newsList from "./newsList";

const news = {

    // This method takes one argument, which we expect to be an object that represents a news article that will have the following structure:
    // {
    //     "id": 1,
    //     "userId": 2,
    //     "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    //     "title": "Wormholes Allow Information to Escape Black Holes",
    //     "synopsis": "Check out this recent discovery about workholes"
    // };

    // Given this object, the method will build HTML elements and append them appropriately so that it will look like this:
    // <article>
    //   <h3>title</h3>
    //   <p>synopsis</p>
    //   <p>url</p>
    // </article>

    // This HTML is then returned to the point from where this method was called
    newsBuilder(newsObject) {

      let newsArticle = document.createElement("article")

      let newsTitle = document.createElement("h3")
      newsTitle.textContent = newsObject.name

    //   let newsSynopsis = document.createElement("p")
    //   newsSynopsis.textContent = newsObject.synopsis

      // let newsURL = document.createElement("p")
      // newsURL.textContent = newsObject.url


      let deleteNewsButton = document.createElement("button")
      deleteNewsButton.setAttribute("id", `deleteNewsid#--${newsObject.id}`)
      deleteNewsButton.textContent = "Delete this News article"


      deleteNewsButton.addEventListener("click", () => {
        //   console.log("delete button clicked")
          let newsId = event.target.id.split("--")[1]
          dataManager.deleteNewsItem(newsId)
          .then(response => {
                newsList.newsify()
              })


            })

    newsArticle.appendChild(newsTitle);
    //   newsArticle.appendChild(newsSynopsis)
    // newsArticle.appendChild(newsURL)
    newsArticle.appendChild(deleteNewsButton)


    return newsArticle
  }
}
  export default news
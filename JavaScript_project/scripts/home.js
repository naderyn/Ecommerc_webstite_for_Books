let content = document.querySelector("#content");

let out = "";
fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
.then((response) => response.json())
.then((books) => {
  // console.log(books)
    return books.items.map(book => {
      
      // console.log(book.id)

      // console.log(book.volumeInfo.imageLinks)
      
      out += `

      <div class="card col-3">
        <div class="card-header" style="height: 60px;">
          <h5 class="card-title limit-paragraph-line">${book.volumeInfo.title}</h5>
        </div>
        <img class="card-img-top" height="400"  src="${book.volumeInfo.imageLinks.smallThumbnail}" alt="${book.volumeInfo.subtitle}">
        <div class="card-body">
          <p class="card-text limit-paragraph-line">${book.volumeInfo.description}</p>
        </div>
        <div class="card-footer bg-secondary text-white">
          <small class="text-muted "> 
            <button class="btn add-to-plan" id="${book.id}" onClick="singleBook(this.id)" > read More</button>
          </small>
        </div>
      </div>
    
     

    `;
      content.innerHTML = out;
    })
});



function singleBook(id){
  
    window.location.href = "single-page.html?" + id;

}


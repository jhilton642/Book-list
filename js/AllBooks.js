document.getElementById('book-search').addEventListener('click', getBooks);

function getBooks() {
    let bookTable = document.getElementById('row');
    let searchTerm = document.getElementById('searchTerm');
    if (searchTerm.value.length === 0) {
        bookTable.innerHTML = 'Please Enter Something';
        return;
    }
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm.value}&key=AIzaSyDk1o-UXnYwqsdpUdIC4RAZIg94eVUKHyA`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(items => {
            let innerHTML = "";
            for (let book of items.items) {

                innerHTML += 
                `<tr>
                <td>${book.volumeInfo.title}</td>
                <td>${book.volumeInfo.authors}</td>
                <td>${book.volumeInfo.pageCount}</td>
                <td><button><a href = "${book.volumeInfo.infoLink}">Info</a></button></td>
                <td><div class="dropdown">
                <button class="dropbtn">Add to a list</button>
                <div class="dropdown-content">
                  <a href="HomePage.html">Link 1</a>
                  <a href="HomePage.html">Link 2</a>
                  <a href="HomePage.html">Link 3</a>
                </div>
              </div></td>
                </tr>`

            }
            bookTable.innerHTML = innerHTML;
        })
}
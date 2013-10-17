var Book = function(bookTitle, genre, author) {
    this.bookTitle = bookTitle;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.readDate = "";
};

var BookList = function() {
    this.booksRead = 0;
    this.booksNotRead = 0;
    this.bookShelf = [];
    this.currentBook = null;
    this.nextBook = function() {
        for (var i = 0; i < this.bookShelf.length; i++){
            if (this.bookShelf.read === true){
                this.nextBook = this.bookShelf.splice(i, 1);
                return this.nextBook;
            } else {
                continue;
            }
        }
    };
    this.lastBook = this.bookShelf[this.bookShelf.length - 1];
    this.add = function(book) {
        this.bookShelf.push(book);
        if (book.read === false) {
            this.booksNotRead++;
        } else {
            this.booksRead++;
        }
    };
    this.finishCurrentBook = function() {
        book["read"] = true;
        book.readDate = new Date(Date.now());
        this.currentBook();
        this.booksNotRead--;
        this.booksRead++;
    };
};

var the_books = new BookList();

var harry_potter = new Book("Harry Potter and the Deathly Hallows", "Fantasy", "J.K. Rowling");
var tfios = new Book("The Fault in Our Stars", "Young Adult", "John Green");
var lotr = new Book("The Return of the King", "Fantasy", "J.R.R. Tolkien");
var berlin_kitchen = new Book("My Berlin Kitchen", "Non-Fiction", "Luisa Weiss");
var born_to_run = new Book("Born to Run", "Non-Fiction", "Christopher McDougall");

the_books.add(harry_potter);
the_books.add(tfios);
the_books.add(lotr);
the_books.add(berlin_kitchen);
the_books.add(born_to_run);
console.log("The bookshelf: ");
console.log(the_books.bookShelf);
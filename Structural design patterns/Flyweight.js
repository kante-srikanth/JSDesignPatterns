class Book {
    constructor(title, isbn, author, ratings) {
        this.title = title;
        this.isbn = isbn;
        this.author = author;
        this.ratings = ratings;
    }

    getAverageReview() {
        let averageReview =
            this.ratings.reduce((a, b) => a + b) / this.ratings.length;
        return averageReview;
    }
}

class FlyweightBookFactory {
    constructor() {
        this._books = [];
    }

    createBook(title, isbn, author, ratings) {
        let book = this.getBookBy(isbn);
        if (book) {
            return book;
        } else {
            const newBook = new Book(title, isbn, author, ratings);
            this._books.push(newBook);
            return newBook;
        }
    }

    getBookBy(attr) {
        return this._books.find((book) => book.isbn === attr);
    }
}

// Execution

var bf = new FlyweightBookFactory();
bf.createBook(
    "javascript, the definite guide",
    "0596335527",
    "David Flanagan",
    [4, 5, 4, 3]
);
bf.createBook("ruby on rails", "05968053447", "Harry Oliveer", [4, 5, 4, 3]);
bf.createBook(
    "Learning Python: Powerful Object-Oriented Programming",
    "0596805545",
    "Mark Lutz",
    [4, 5, 4, 3]
);
bf.createBook(
    "Learning Python: Powerful Object-Oriented Programming",
    "0596805545",
    "Mark Lutz",
    [4, 5, 4, 3]
);

//Total books count is 3, because there are duplicates books;
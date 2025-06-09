
function objSum(obj){
    let sum = 0;
    for (sal in obj){
        console.log(obj[sal])
        sum += obj[sal];
    }
    return sum
}

function multiplyNumeric(obj){
    for (key in obj){
        if (typeof obj[key] === "number"){
            obj[key] = obj[key]*2
        }
    }
    return obj
}

  function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title}, ${this.author}, ${this.pages} 'pages', ${this.read}`;
    }
  }

  const book1 = new Book("The Hobbit by J.R.R", "Tolkien", "295", "not read yet");

  console.log(book1.info());

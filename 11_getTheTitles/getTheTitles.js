const getTheTitles = function(books) {

    return console.log(books.map((book) => Object.values(book)[0]));
    let titles = [];
    for (book of books) {
        titles.push(Object.values(book)[0]);
    }
    return console.log(titles);
};


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

getTheTitles(books) // ['Book','Book2']

// Do not edit below this line
module.exports = getTheTitles;

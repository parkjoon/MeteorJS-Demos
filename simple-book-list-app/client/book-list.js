Template.bookList.rendered = function() {
  Session.setDefault('books', [
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "1984", author: "George Orwell"},
    {title: "The Lord of the Rings", author: "J. R. R. Tolkien"},
    {title: "The Catcher in the Rye", author: "J. D. Salinger"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
  ]);
};

Template.bookList.helpers({
  books: function () {
    return Session.get('books');
  }
});

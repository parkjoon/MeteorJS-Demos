if (Meteor.isClient) {

  Template.hello.rendered = function() {
    Session.setDefault('books', [
      {title: "To Kill a Mockingbird", author: "Harper Lee"},
      {title: "1984", author: "George Orwell"},
      {title: "The Lord of the Rings", author: "J. R. R. Tolkien"},
      {title: "The Catcher in the Rye", author: "J. D. Salinger"},
      {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
    ]);
  };

  Template.hello.helpers({
    counter: function () {
      return Books.find();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

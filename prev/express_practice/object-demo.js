let nodejsBook = {
  title: "Node.js 공부",
  price: 22000,
  description: "쉽게 접근하는 node",
};

const print = (book) => {
  console.log(book);
  console.log(book.title);
  console.log(book.price);
  console.log(book.description);
};

print(nodejsBook);

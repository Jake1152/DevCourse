let nodejsBook = {
  title: "Node.js 공부",
  price: 20000,
  description: "이 책 좋다. 내가 만듦. 내가 해냄",
};

const print = () => {
  console.log(book.title);
  console.log(book.price);
  console.log(book.description);
};

print();

let youtuber1 = {
  channelTitle: "십오야",
  sub: "593만명",
  videoNum: "993개",
};

let youtuber2 = {
  channelTitle: "침착맨",
  sub: "250만명",
  videoNum: "6600개",
};

let youtuber3 = {
  channelTitle: "테오",
  sub: "120만명",
  videoNum: "512개",
};

app.get(":/nickname", function (req, res) {
  const { nickname } = req.params;

  if (nickname == "@15ya.fullmoon") {
    res.json(youtuber1);
  } else if (nickname == "youtuber2") {
    res.json(youtuber2);
  }
});

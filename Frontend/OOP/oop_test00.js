class Dog {
  //   constructor(eyes, nose, mouse, ears) {
  //     this.eyes = eyes;
  //     this.nose = nose;
  //     this.mouse = mouse;
  //     this.ears = ears;
  //   }

  constructor() {
    this.eyes = 0;
    this.nose = 0;
    this.mouse = 0;
    this.ears = 0;
  }

  bark() {
    console.log("Wall Wall");
  }
}

const dog = new Dog();
dog.bark();

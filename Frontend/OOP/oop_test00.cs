using System;

class Dog{
	private int eyes, nose, mouse, ears;

	Dog() {
		eyes = 0;
		nose = 0;
		mouse = 0;
		ears = 0;

	}

	public void bark(){
		Console.WriteLine("Wall Wall");
	}
}

class HelloWord {
	static void Main() {
		Console.WriteLine("Hello World");
		Dog dog = new Dog();

		dog.bark();
	}
}

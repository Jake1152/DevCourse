using System;

class Dog{
	private int eyes, nose, mouse, ears;
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

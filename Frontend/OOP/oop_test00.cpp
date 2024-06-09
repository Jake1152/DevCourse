#include <iostream>

class Dog{
private:
	int eyes, nose, mouse, ears;
public:
	Dog()
       	: eyes(0), nose(0), mouse(0), ears(0)	{
		std::cout << "eyes : " << eyes << ",\t" << "nose : " << nose << ",\t" << "mouse : " << mouse << ",\t" << "ears : " << ears << std::endl;
	}

	void bark() {
		std::cout << "Wall Wall" << std::endl;
	}
};


int main()
{

	Dog dog;

	dog.bark();
	return 0;
}

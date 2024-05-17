#include <stdio.h>

void hello()
{
	printf("Hello, world!\n");
}

void bonjour()   // 반환값과 매개변수가 없음
{
	printf("boujour le monde!\n");
}

int main()
{
	void (*fp)();
	// fp = fn();

	fp = hello;
	fp();

	fp = bonjour;
	fp();

	return (0);
}

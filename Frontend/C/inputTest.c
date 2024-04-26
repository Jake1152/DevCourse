#include <stdio.h>

int main()
{

  long long input_num;

  scanf("%lld", &input_num);
  printf("input num is : %lld\n",  input_num);

  // overflow 감안
  printf("Multiple result is : %lld\n", input_num * 5);

  return 0;
}

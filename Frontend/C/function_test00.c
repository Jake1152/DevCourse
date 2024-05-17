#include <stdio.h>

void print_coffe_menu(const size_t price)
{
    if (price == 100)
    {
        printf("블랙커피\n");
    }
    else if (price == 200)
    {
        printf("밀크커피\n");
    }
    else
    {
        printf("Unknown menu\n");
    }
}

/**
 * 구구단
*/
int main()
{
    int battery = 1;

    size_t coffee_price_arr[] = {0, 100, 200, 300};

    for (int idx = 0; idx < sizeof(coffee_price_arr) / sizeof(coffee_price_arr[0]); idx++)
        print_coffe_menu(coffee_price_arr[idx]);
    return 0;
}
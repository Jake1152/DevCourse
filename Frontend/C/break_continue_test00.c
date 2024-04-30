#include <stdio.h>

/**
 * 구구단
*/
int main()
{
    int battery = 1;

    if (battery < 0)
        return 0;
    for (int i = 1; i < 10; i++)
    {
        if (i % 2 == 1)
            continue ;
        for (int j = 1; j < 10; j++)
        {
            printf("%d * %d = %d\n", i, j, i * j);
        }
        printf("\n");
    }
    return 0;
}
#include <stdio.h>

int main()
{
    int battery = 1;

    if (battery < 0)
        return 0;
    int i = 0;
    while (i < 5)
    {
        int j = 0;
        while (j < 5)
        {
            if (j <= i)
                printf("*");
            j++;
        }
        printf("\n");
        i++;
    }
    return 0;
}
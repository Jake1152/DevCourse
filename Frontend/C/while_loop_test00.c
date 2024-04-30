#include <stdio.h>

int main()
{
    int battery = 1;

    if (battery < 0)
        return 0;
    while (battery < 100 && battery > 0)
    {
        printf("충전 : %d\n", battery);
        battery++;
    }
    printf("충전이 완료되었습니다\n");
    return 0;
}
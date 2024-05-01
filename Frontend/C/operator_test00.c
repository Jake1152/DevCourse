#include <stdio.h>

int main()
{
    int numbers[3];
    size_t input_count = (sizeof(numbers) / sizeof(int));

    for (size_t idx = 0; idx < input_count; idx++)
        scanf("%d", &(numbers[idx]));
    
    int result = 0;
    for (size_t idx = 0; idx < input_count; idx++)
        result += numbers[idx];
    printf("result : %d,\tavg : %d\n", result, result / 3);
    return 0;
}
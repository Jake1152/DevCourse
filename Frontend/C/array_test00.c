#include <stdio.h>
#include <stdlib.h>

static int read_pages = 0;

void add_read_pages(const int pages)
{
    if (pages < 0)
    {
        printf("더 분발하세요\n");
        return ;
    }
    read_pages += pages;
}

int get_accumulated_read_pages()
{
    return read_pages;
}


void accumulated_read_pages()
{
    static int static_read_pages = 0;
    int read_pages = 0;

    printf("읽은 책의 페이지 수를 입력하시오 : ");
    scanf("%d", &read_pages);
    if (read_pages < 0)
    {
        printf("더 분발하세요\n");
    }
    else
    {
        static_read_pages += read_pages;
        printf("최종 누적 페이지 : %d\n", static_read_pages);
    }
}

// int reverse(const *arr_origin)
// int *reverse(int arr_origin[])
// int *reverse(const int arr_origin[], size_t arr_size)
// int *reverse(const int *arr_origin)
int *reverse(const int *arr_origin, size_t arr_size)
{
    // size_t  arr_size = sizeof(arr_origin) / sizeof(arr_origin[0]); // Error
    int     *reverse_arr = (int *)malloc(sizeof(arr_origin[0]) * arr_size);

    if (reverse_arr == NULL)
        return NULL;

    int idx = 0;
    while (idx < arr_size)
    {
        int reverse_idx = (arr_size - 1) - idx;

        reverse_arr[idx] = arr_origin[reverse_idx];
        idx++;
    }
    return reverse_arr;
}

/**
 * 구구단
*/
int main()
{
    int arr_origin[] = {1,2,3,4,5};
    size_t arr_size = sizeof(arr_origin) / sizeof(arr_origin[0]);

    int *arr_clone = reverse(arr_origin, arr_size);
    // int *arr_clone = reverse(arr_origin);

    
    // for (int idx = 0; idx < sizeof(arr_origin) / sizeof(arr_origin[0]); idx++)
    for (int idx = 0; idx < arr_size; idx++)
    {
        arr_clone[idx];
        printf("arr_clone[%d] : %d\n", idx, arr_clone[idx]);
    }
    free(arr_clone);
    arr_clone = NULL;
    return 0;
}
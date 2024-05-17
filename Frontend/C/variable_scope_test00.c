#include <stdio.h>

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
/**
 * 구구단
*/
int main()
{

    // global
    while (1)
    {
        int read_pages;

        /* global*/
        // printf("읽은 책의 페이지 수를 입력하시오 : ");
        // scanf("%d", &read_pages);
        // add_read_pages(read_pages);
        // printf("최종 누적 페이지 : %d\n", get_accumulated_read_pages());

        /* static variable*/
        accumulated_read_pages();

    }
    return 0;
}
#include <stdio.h>

int main()
{
    int score;
    // size_t input_count = (sizeof(score) / sizeof(int));

    printf("점수를 입력하시오 : ");
    scanf("%d", &score);
    
    int result = 0;

    char grade = '\0';
    printf("score is %d\n", score);
    if (score > 90 && score < 101)
        grade = 'A';
    else if (score > 80 && score < 91)
        grade = 'B';
    else if (score > 70 && score < 81)
        grade = 'C';
    else if (score > 60 && score < 71)
        grade = 'D';
    else if (score < 61)
        grade = 'F';


    printf("grade : %c\n", grade);
    return 0;
}
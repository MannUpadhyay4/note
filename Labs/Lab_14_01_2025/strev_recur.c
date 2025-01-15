#include <stdio.h>
#include <stdlib.h>
#include <string.h>
/*
 * the defines:
 */
#define MAX_INPUT_LENGTH 255

char * answer(char ** str,int l,int r)
{
   fprintf(stderr, "%s\n",*str); 
  if(l>=r)
  {
    return *str;
  }

char temp = (*str)[l];
(*str)[l] = (*str)[r];
(*str)[r] = temp;

}


char * cust_rev(char ** str,int len)
{   fprintf(stderr, "%s\n",*str); 
    answer(str,0,len);
}

void input(){
    
    fprintf(stdout, "\nEnter another expression to reverse:\n> ");
    char * input=(char*)malloc(sizeof(char)*MAX_INPUT_LENGTH);
    while (fgets(input, MAX_INPUT_LENGTH, stdin)) {
        size_t len = strlen(input);
        if (len > 0 && input[len-1] == '\n') {
            input[len-1] = '\0';
        }
        printf("input = %s\n", input);
        printf("%c\n",input[len-2]);
        cust_rev(&input,len-2) ;
        printf("input = %s\n", input);
        fprintf(stdout, "\nEnter another expression to reverse:\n> ");
    }
}

int main(int argc, char *argv[])
{
  input(); 
  return EXIT_SUCCESS;
}

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
/*
 * the defines:
 */
#define MAX_INPUT_LENGTH 255

bool cust_rev(const char * str,int l,int r)
{ 
  fprintf(stderr, "%s\n",str); 
  if(l<0)
  {
    return true;
  }


if((str)[l] != (str)[r])
  {
    return false;
  }
  cust_rev(str,l-1,r+1);

}

void input(){
    
    fprintf(stdout, "\nEnter another expression to reverse:\n> ");
    char input[MAX_INPUT_LENGTH];

    while ( fgets(input, sizeof(input), stdin) ) {
        fflush(stdin);
        size_t len = strlen(input);
        if (len > 0 && input[len-1] == '\n') {
            input[len-1] = '\0';
        }
        printf("input = %s\n", input);
        printf("%c\n",input[len-2]);
        int l = len -2 /2;
        int r =(len%2==0)? l+1:l;
        
        bool ans = cust_rev(input,0,len-2) ;
        printf("%d\n",ans?1:2);
        printf("input = %s\n", input);
        fprintf(stdout, "\nEnter another expression to reverse:\n> ");
    }
}

int main(int argc, char *argv[])
{
  input(); 
  return EXIT_SUCCESS;
}

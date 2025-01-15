#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int len_itter(int * arr,int target,int size)
{
  int x = 0;
  while( x<size-1)
  {
    if(x==target){
      printf("x = %d\n", x);
      return x;
    }
    else {x+=1;}
    }
  
  fprintf(stderr,"Target%d Not Found\n",target);
  return -1;
} 

int main(int argc, char *argv[])
{
  int n = 10;
  int * arr= (int*)malloc(sizeof(int)*n);
  srand(time(0)^time(0));
  for (int x = 0;x<n ;x++) {
    //arr[x]=rand()%10;
    arr[x]=1;
  }
  for (int x = 0;x<n ;x++) {
    printf("%d\n",arr[x]);
  }
  len_itter(arr,9,n);

  free(arr);
  return EXIT_SUCCESS;
}

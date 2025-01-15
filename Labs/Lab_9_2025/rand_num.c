#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main()
{
  int n = 10;
  int * arr= (int*)malloc(sizeof(int)*n);
  srand(time(0)^time(0));
  for (int x = 0;x<n ;x++) {
    arr[x]=rand()%10;
  }
  for (int x = 0;x<n ;x++) {
    printf("%d\n",arr[x]);
  }
  free(arr);
}

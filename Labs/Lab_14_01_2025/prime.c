#include <stdio.h>


void prime(int upperbound, int curr){

  if(curr>=upperbound)
  {
    return;
  }
  if((upperbound%curr)==0)
  {
    printf("curr = %d\n", curr);
    if(curr ==2)
    {
      return;
    }
    
  }
  prime(upperbound,curr+1);
}

int main()
{
  int num = 1000;
  int upperbound = sqrt(num);
  int curr = 2;
  prime(upperbound,2);
}

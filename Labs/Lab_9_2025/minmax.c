#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
  int n = 10;
  int* arr = (int*)malloc(sizeof(int) * n);
  if (arr == NULL) {
    fprintf(stderr, "Memory allocation failed\n");
    return EXIT_FAILURE;
  }

  srand((unsigned int)time(NULL));
  for (int x = 0; x < n; x++) {
    arr[x] = rand() % 10;
  }
  for (int x = 0; x < n; x++) {
    printf("%d\n", arr[x]);
  }

  int min = arr[0], max = arr[0];
  int smax = -1, smin = -1;  // Second max/min initialized to -1 (assuming all array values are >= 0).

  for (int x = 1; x < n; x++) {
    if (arr[x] > max) {
      smax = max;
      max = arr[x];
    } else if (arr[x] > smax && arr[x] != max) {
      smax = arr[x];
    }

    if (arr[x] < min) {
      smin = min;
      min = arr[x];
    } else if (arr[x] < smin && arr[x] != min) {
      smin = arr[x];
    }
  }

  printf("min = %d\n", min);
  printf("max = %d\n", max);
  if (smax != -1) printf("2nd max = %d\n", smax);
  else printf("2nd max not found.\n");

  if (smin != -1) printf("2nd min = %d\n", smin);
  else printf("2nd min not found.\n");

  free(arr);
  return EXIT_SUCCESS;
}

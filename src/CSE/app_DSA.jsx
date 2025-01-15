import React, { Fragment } from "react";
import {
  NC,
  H,
  P,
  LI,
  CB,
  TABLE,
} from "../notes.jsx";
import Header from "../NewDayHeader.jsx";

const AppDSA = () => {
  return (
    <Fragment>
      <Header date="Mon, Jan 8, 2025" lecture="1" header="Intro to DSA" />

      <NC>
        <H level={1}>Intro to DSA</H>

        <P>
          Data structure and algorithms deal with efficiently managing data,
          which involves retrieval and storage.
        </P>

        <H level={4}>Why study?</H>

        <LI
          items={[
            "Doorway to Computer Science.",
            "Pillar of CS (foundation of CS).",
            "Important for Competitive Programming and interviews.",
          ]}
        />

        <H level={4}>How is it different from Design and Analysis of Algorithms?</H>
        <P>
          The main focus in DAA is on the proLIem itself, not the data structure. 
          For example, the knapsack proLIem focuses on solving the proLIem rather than optimizing data structures.
        </P>

        <H level={4}>Types of Data Structures</H>
        <LI
          items={[
            "Arrays", "Stacks", "Queues", "Linked Lists", "Binary Trees", 
            "Graphs", "B+ Trees", "Skip Lists", "And more..."
          ]}
        />

        <H level={4}>Linear and Non-Linear Data Structures</H>
        <P>
          Data structures can be classified into linear and non-linear. Linear data structures include arrays, stacks, and queues, while non-linear ones include trees and graphs.
        </P>

        <H level={4}>Books and Resources</H>
        <LI
          items={[
            "Schauch series (or something similar)",
            "Pajeets for Pajeets .com",
            "Hackerrank, Leetcode, and other coding platforms.",
          ]}
        />

        <H level={4}>Discussion on Key Concepts</H>
        <LI
          items={[
            "Logarithms: Why log(ab) = log(a) + log(b)",
            "Proof: a^0 = 1",
            "Floor and Ceiling functions",
            "Modulo and differentiation",
            "Subscript usage",
            "Operator precedence",
          ]}
        />

        <H level={4}>Key Operations in Data Structures</H>
        <LI
          items={[
            "Insertion",
            "Deletion",
            "Updation",
            "Traversal",
          ]}
        />

        <H level={4}>Understanding Time Complexity</H>
        <P>
          Time complexity can be computed for operations like iteration, for example: 
          <ul>
            <li>For i++</li>
            <li>For i *= 2</li>
            <li>For i += 2</li>
          </ul>
        
       

        </P>
      </NC>
      <Header date="Mon, Jan 9, 2025" lecture="1" header="Lab-1" />
        <NC>
          <H level={1}>Lab-1</H>
          <H level={4}>q1:rand elems in arr</H>
          <CB>
            {`#include <stdio.h>
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
  free(arr);
  return EXIT_SUCCESS;
}
`}
          </CB>
          <H level={4}>q2:min max 2nd min and 2nd max</H>
          <CB>{`
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
}
`}
          </CB>
          <H level={4}>q3:Leaniar Search</H>
          <CB>
            {`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int len_itter(int* arr, int target, int size) {
  for (int x = 0; x < size; x++) {
    if (arr[x] == target) {
      printf("Found target at index %d\n", x);
      return x;
    }
  }
  fprintf(stderr, "Target %d Not Found\n", target);
  return -1;
}

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
  
  len_itter(arr, 9, n);

  free(arr);
  return EXIT_SUCCESS;
}
`}
          </CB>
        </NC>
      
      <Header date="Mon, Jan 10, 2025" lecture="2" header="Pointers and Structs" />
    <NC>

     <H level ={1}>What is a pointer</H>
      <P>it is a data type storing address of another variable</P>
    <P>if we write <CB>{`int x = 10;`}</CB> then it will make a variable of x in memeory address lets say 100 for sake of example storing value 10 <br/> here 100 i.e. address is the l value(Location Value) <br/> and 10 is the r value (right and side) </P>
        <CB>
    {
      `int * y = & x;`
    }
    </CB>
    <P>read right to left address of x is storred in y which is a pointer storing address of a integer type data<br/> so here y is storing the value 100 i.e. adrress of x (NOTE y addr is not same as x it stored value of addr of x) this pointer variable can print the value stored in x too</P>
    <CB>
    {
      `printf("%p %p",y,&x);// prints same address
      printf("%d %d",x ,*y);//prints same value`
    }
    </CB>
    <P>
    here *y is derefrencing the address stored in it and that printing the value
    we can store y addr in another ptr too <H level ={3}>this can go up to max 8 level pointers</H> 
    </P>
    <H level={2}>Void Pointer</H>
    <P>this is a generic pointer where an kind of value can be stored</P>
    <CB>{`void * ptr = &variable`}</CB>
    </NC>
    <NC>
    <H level = {1}>Structutes</H>
    <P>This is a user definer data type</P>
    <CB>{`typedef struct{
        datatype mem1;
        datatype mem2;
        .
        .
        .
        1023 at max
    } struct_name;`}
    </CB>
    <P>if using structs without * then we use dot operator `.` to access the mebers else we use the arrow operator`->`</P>
    <P>If a struct has a pointer storing value of a its own data type then it is called a self refrential structure</P>
    <CB>{`struct node
      {
        int data;
        struct node * next;
      }structname;`}</CB>
    <P>this is a example of self refrential structure ( and also a linked list )</P>
    </NC>
    <NC>
      <H level = {1}>LINKED LIST</H>
          <CB>{`struct node
      {
        int data;
        struct node * next;
      }Node;`}</CB>
    <P>This is a linked list structure, it can be used to initialise linked list as:</P>
    <CB>{`
        int main()
        {
        struct node n1,n1,n3;
        n1.next= &n2;
        n2.next= &n3;
        n3.next= NULL;
        }
    `}</CB>
    <P>n.val can then be used to store memory in them</P>
    <P>Differnce from Arrays</P>
    <TABLE
      headers={["Feature", "Linked List", "Array"]}
      rows={[
        ["Memory Allocation", "Dynamic", "Fixed/Contiguous"],
        ["Access Time", "O(n) for search", "O(1) for indexing"],
        ["Insertion/Deletion", "O(1) at head/tail", "O(n) for shifting"],
        ["Traversal", "Sequential", "Direct indexing"],
        ["Use Cases", "Dynamic structures (e.g., queues)", "Static data storage"],
      ]}
    />
    </NC>

    
      <Header date="Mon, Jan 14, 2025" lecture="1" header="Intro to DSA" />
      <NC>
      <H level= {1}>ANALYSIS OF Algorithms</H>

        <P>
          To analyse a algorithm we see space and time complexity, 
  <br/>   which depends on n that is number of inputs n>=0
  <br/>   these can be done as:
        </P>
    <LI items={[
      `Asymptotic Analysis`,
      `Emperical Analysis`
    ]}>
    </LI>
    <H level = {2}>Asymptotic Analysis</H>
        possible relations between functions:
    <LI items={[
      `<=`,
      `<`,
      `=`,
      `>`,
      `>=`
    ]}>
    </LI>
    <P>
    <H level={3}>Worst case:</H>
    f(n) = O(g(n)) : n0 and c belongs to R {`<=>`} 0{`<=`}f(n){`<=`}c.g(n) && n{`<=`}n0 <br/> eg:  function is leniar search worst case is if last elem i.e. O(n)   <br/>

    <H level = {3}> best case:</H>
     f(n) = Ω(g(n)) : n0 and c belongs to R {`<=>`} 0{`<=`}c.g(n){`<=`}f(n) && n{`<=`}n0 <br/> eg:  function is leniar search is Ω(1) if elem is first
   <br/>
    <H level = {3}> average case:</H>
     f(n) = θ(g(n)) : n0 and c1 and c2 belongs to R {`<=>`} 0{`<=`}c1.g(n){`<=`}f(n){`<=`}c2.g(n)&& n{`<=`}n0 <br/> eg:  function is leniar search then average will be θ(n/2) which will be θ(n) onlt as we ignore constants</P>
      
  <P>o is if 0{`<=`}f(n){`<`}c.g(n)</P>
  <P>ω is if R {`<=>`} 0{`<=`}c.g(n){`<`}f(n) </P>
    <P>little letters used when strict</P>
    </NC>
    </Fragment>
  );
};

export default AppDSA;


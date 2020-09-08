# The Very Basics of Loops in JavaScript (Part 1: For Loop)

Loops in JavaScript (just as they are in other programming languages) are used in scenarios where one would like a given set of instruction or instructions to be executed a given number of times.

## For Loop
#### Syntax:

```javascript
for(initialization; condition; expression){
    //code
}
```

- initialization- The starting point of loop.
- condition- This evaluates to either true or false. For as long as it is true, the loop continues otherwise the loops breaks.
- expression- This is an increment counter.

In a natural language, what you are basically saying is:

Hey loop, start an iteration at the value defined in `initialization` and after every execution of the code in the block scope of the loop, increase by the value specified at `expression` (normally one by one) and continue doing so until the condition specified at `condition` evaluates to false. i.e

```javascript
for (let i = 0; i <= 5; i++){
    //code
}

/*

Here, whatever code is will be executed 6 times, i.e 
first when i is 0, second when i is 1, third when i is 2, and so on and so forth

*/

for (let i = 0; i <= 8; i+=5){
    //code
}

/*

Here, whatever code is will be executed 2 times, i.e 
first when i is 0, second when i is 5.
Note that the expression i+=5 means an increment of i by 5 after every iteration
The loop will not go past 2 because a third iteration is not qualified by the stated condition 

*/
```

`Note:` Please note that all these 3 parameters are optional => See commit #2

`Note:` One can always use nested loops => See commit #2, #3



## Purpose of this repository

My intent in creating this Repo is actually twofold:
1. To treat the aforementioned subject (JS loops) in the stated capacity (basics), and
2. (Minor reason) To evaluate my mastery of using git-- which by the way I learnt is different from GitHub as recent as in the course of this month.

If I should state the scenarios for which I think loops are predominantly applied and indeed for which I shall cover in this Repo series, these two would be them:
1. To effect some desired operation on an object by iterating through every single item in the object and effecting the change (or whatever it is).
2. To automate multiple (as will be defined in the loop) processes by a single block of programming instructions.

### Some points of information:
- A fair deal of these concepts are learnt from [MDN Website](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
- I intend to use practical demos. Now, I know there is a myriad of options that can arrive at the same results which you will herein see. Please share them for it will be interesting to explore the various possibilities.
- Please pardon any 'git bad practice' that you may come across in this Repo (you're likely to meet them). Kindly be sure to point them out.
- My choice of writing about loops is because at the time of writing this I was covering that topic with my 'student.'
- This first series will not necessarily require DOM interactivity hence you can use node js for the JS_Loops.js file.
- I will be committing every single demo accordingly as listed below.
- Explanations are embedded as comments in the respective commited files.


#### Stay Tuned.



## Commits-
1. Log numbers 5 to 12
2. Log the first 10 Prime numbers
3. Retun all the alphabets that are missing in a sentence
4. List all countries with names starting with the stipulated letter or set of letters. => `Tags`
    - substring method;
    - toLowercase();
    - string length;
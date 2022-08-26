Exception handelling: Deals with problems which can arise in our code due to reasons like improper input, inproper processing, logic.
  We try to handel exceptions. Handelling exceptions means: what to do in the case of problems. We can also pass exceptions to take place explicitly. The most common way of exceptions handellng is by using try-catch blocks.
  In JS NaN means: Not A Number
  1. Within try block we put statements which can cause issue. when ever issue will occur, flow will go to the catch block. Within catch block we can write our handelling logic.
  2. To cause a custom exception to occur in JS, we can make use of throw. such exceptions are known as custom exceptions or application exception.
  3. Sometimes we may want to do some processing irrespective of the exception occured or not, we can acchive this with the help of 'finally' block.
  4. Inbuilt errors/exceptions in JS as name & message properties within it.

Promises (Async-Await, Call-backs.. etc) [Refer Day1> Sample > index files]
  1. Promises acts as a link between a provider & consumer. cunsumer is someone who is going to act on the data. consumer will havwe towait for the result.
  2. call-back function: In JS we can pass function as an argument to another function. This forms the basis of call-back function.
  3. Async makes a function return promise
  4. await makes a function  


Regular Expressions
  1. a regular exp is a pettern of charecters.
  2. the general use of a regex is to either extract or replace
  3. Expression	Description [RegExp is an inbuilt object which is provided to us by JS]
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified

n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's
n$	Matches any string with n at the end of it
^n	Matches any string with n at the beginning of it
?=n	Matches any string that is followed by a specific string n
?!n	Matches any string that is not followed by a specific string n

.	Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
\s	Find a whitespace character
\S	Find a non-whitespace character
\b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	Find a match, but not at the beginning/end of a word
\0	Find a NULL character
\n	Find a new line character
\f	Find a form feed character
\r	Find a carriage return character
\t	Find a tab character
\v	Find a vertical tab character
\xxx	Find the character specified by an octal number xxx
\xdd	Find the character specified by a hexadecimal number dd

4. test is a function which checks if the pattern 
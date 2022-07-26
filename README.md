# Error_Storages_Pipe

Task 1.
- You need to implement two functions in index.js – visitLink and viewResults.
- visitLink function should save to localStorage how many times each link was clicked
  (visited).
- viewResults should display a list how many times each link was visited (see example
  below) and afterwards clear the storage

![img.png](img.png)

Task 2.
- Implement PIPE function.
- The function is supposed to accept the following arguments: value and a sequence
  of functions.
- Each of the functions should operate on the provided value and pass the output to
  the other function in a sequence.
- In case provided argument is not a function, pipe should immediately throw an error
  and stop the execution.
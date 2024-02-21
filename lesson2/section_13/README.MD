## Question: Last loop value

What is the last value alerted by this code? Why?

```javascript
let i = 3;

while (i) {
  alert( i-- );
}
```

### Amswer

Each iteration of the loop decrements i by 1. The while(i) stops the loop when i = 0.
Therefore, the last value will be 1



## Question: Which values does the while loop show?

For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:
```javascript
let i = 0;
while (++i < 5) alert( i );
```

The postfix form i++
```javascript
let i = 0;
while (i++ < 5) alert( i );
```

### Amswer

Values 1 to 4 will be output for the prefix form, and values 1 to 5 will be output for the postfix form


## Question: Which values get shown by the "for" loop?
For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

The postfix form:

```javascript
for (let i = 0; i < 5; i++) alert( i );
```
The prefix form:

```javascript
for (let i = 0; i < 5; ++i) alert( i );
```

### Amswer

The result of both cycles will be from 0 to 4


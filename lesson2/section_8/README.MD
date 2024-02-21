## Question: : The postfix and prefix forms

What are the final values of all variables a, b, c and d after the code below?
```javascript
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
```

### Amswer

```javascript
let c = ++a; // 2
let d = b++; // 1
```

## Question: : Assignment result

What are the values of a and x after the code below?

```javascript
let a = 2;
let x = 1 + (a *= 2);
```

### Amswer

```javascript
a = 4;
x = 5;
```

## Question: : Type conversions

What are results of these expressions?

```javascript
"" + 1 + 0
"" - 1 + 0 
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
```

### Amswer

```javascript
"" + 1 + 0 = '10'
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2
```



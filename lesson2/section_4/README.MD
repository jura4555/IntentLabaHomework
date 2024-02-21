## Question: : Uppercase const?

Examine the following code:
```javascript
const birthday = '18.04.1982';
const age = someCode(birthday);
```
Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?
```javascript
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?
```
### Amswer

Since the birthday variable does not change over time and is therefore hard-coded, it is necessary to use uppercase for it: 
```javascript
const BIRTHDAY = '18.04.1982';
```

Since the variable age is not fixed and can change over time, it is wrong to use upper case and therefore lower case should be used: 
```javascript
const age = someCode(birthday);
```

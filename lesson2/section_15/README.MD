## Question: Is "else" required?

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
```

Will the function work differently if else is removed?

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```
Is there any difference in the behavior of these two variants?

### Amswer

No difference!

## Rewrite the function using '?' or '||'


The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||

### Amswer

Using a question mark operator:
```javascript
function checkAge(age) {
    return (age > 18) ? true: confirm('Did parents allow you?');
}
```

Using OR ||:
```javascript
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}
```



## Question: if (a string with zero)

Will alert be shown?
```javascript
if ("0") {
  alert( 'Hello' );
}
```

### Amswer

Yes, alert will be shown.

## Question: Rewrite 'if' into '?'

Rewrite this if using the conditional operator '?':

```javascript
let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
```

### Amswer

```javascript
let result = (a + b < 4) ? 'Below' : 'Over';
```

## Question: Rewrite 'if..else' into '?'

Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.

```javascript
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
```

### Amswer

```javascript
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
```
## Question: : String quotes

What is the output of the script?
```javascript
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?
```

### Amswer

```javascript
alert( `hello ${1}` );  // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya
```
## Question: What's the result of OR?

What is the code below going to output?

```javascript
alert( null || 2 || undefined );
```

### Amswer

2

## Question: What's the result of OR'ed alerts?

What will the code below output?

```javascript
alert( alert(1) || 2 || alert(3) );
```

### Amswer

alert(1) is executed first and then 2

## Question: What is the result of AND?

What is this code going to show?

```javascript
alert( 1 && null && 2 );
```

### Amswer

null

## Question: What is the result of AND'ed alerts?

What will this code show?

```javascript
alert( alert(1) && alert(2) );
```

### Amswer

1 is executed first and then undefined.

## Question: The result of OR AND OR

What will the result be?

```javascript
alert( null || 2 && 3 || 4 );
```

### Amswer

3

## Question: A question about "if"

Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

```javascript
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```

### Amswer

```javascript
alert( 'first' );
alert( 'third' );
```


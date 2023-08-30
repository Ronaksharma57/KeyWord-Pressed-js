
# KeyPressed -js

This is a simple HTML and JavaScript code that allows the user to enter a keyword and then displays the keyword on the screen.
Hosted link: https://ronaksharma57.github.io/KeyWord-Pressed-js/

## Step 1: HTML Code

The HTML code creates a simple container div with the class "container". This div will contain the input field and the button.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>

</head>
<body>
    <div class="container">Enter Any KeyWord</div>
    
    <script src="index.js"></script>
</body>
</html>
```

## Step 2: CSS Code

The CSS code simply styles the container div.

```css
.container{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 40px;
}
p,h1{
    margin-top: 10px;
    font-size: 40px;
}
```

## Step 3: JavaScript Code

The JavaScript code adds an event listener to the input field. When the user enters a keyword and presses the enter key, the keyword is displayed on the screen.

```javascript
let container = document.querySelector(".container");

document.addEventListener("keydown", function (event) {
    container.innerText = "";
    console.log(event);
    // The parameter event is of the type KeyboardEvent
  	let h1 = document.createElement("h1");
    h1.innerText = ` You Pressed  ${event.key}`;
    let p = document.createElement("p");
    p.innerText = `${event.keyCode}`;
    container.appendChild(h1);
    container.appendChild(p);


});
```

## Conclusion

This is a simple example of how to create a simple web page that allows the user to enter a keyword and then displays the keyword on the screen.

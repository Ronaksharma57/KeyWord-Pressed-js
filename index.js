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

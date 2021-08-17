import React from "react";
import ReactDom from "react-dom";

const myName = 'Анна Носкова'
const element = <h1>Hello World. Меня зовут {myName}</h1>;
console.log(element);
ReactDom.render(element, document.getElementById('root'))

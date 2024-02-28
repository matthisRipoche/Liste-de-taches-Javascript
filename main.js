const myUL = document.getElementById("myUL");
const Li = document.getElementsByName('li');

function newElement(){
    const newLi = document.createElement('li');
    
    const input = document.getElementById("input").value;
    console.log(input);

    newLi.innerHTML = input;
    myUL.appendChild(newLi);

    console.log(Li);
}


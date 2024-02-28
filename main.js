const myUL = document.getElementById("myUL");
const Li = document.querySelectorAll('li');

function newElement(){
    const newLi = document.createElement('li');
    const input = document.getElementById("input").value;

    newLi.innerHTML = input;
    myUL.appendChild(newLi);
    input.innerHTML = "";
}

Li.addEventListener("click", function () {
    console.log(this.className); // logs the className of my_element
});
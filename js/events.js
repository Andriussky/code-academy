///////////////////////////////// Prima uzduotis

document.getElementById("button").addEventListener("click", function()
{
    document.getElementById("fn").value = "Hello World";
});


//////////////////////////// antra uzduotis

document.getElementById("show").onclick = function () {
    document.getElementById("showHide").style.display = "block";}

/////////////////////////// trecia uzduotis

document.getElementById("buttonas").onclick = function () {

    let input1 = document.getElementById("first").value;
    let input2 = document.getElementById("second").value;
    let input3 = document.getElementById("third").value;

    let table = document.getElementById("table");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    cell1.innerHTML = input1;
    cell2.innerHTML = input2;
    cell3.innerHTML = input3;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    table.appendChild(row);
}
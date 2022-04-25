// Store the wallet amount to your local storage with key "amount"



// localStorage.setItem("amount",JSON.stringify())

function addtowallet()
{
    let amount=document.getElementById("amount").value;

    let wall=document.getElementById("wallet").value;
    wall.innerText=amount+wall;

}
function paisa(y)
{
    localStorage.setItem("amount",JSON.stringify(y)) 
}
function bookmovies()
{
    window.location.href="movies.html";
}
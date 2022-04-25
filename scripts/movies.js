// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var id;

async function searchmovies()
{
    try{

        let query=document.getElementById("search").value;

        let res=await fetch(`http://www.omdbapi.com/?apikey=7c7fa041&s=${query}`)
        let data=await res.json();
        console.log(data)
        // let movies=data.Search;
        // return movies;
        appendmovie(data.Search);
        //console.log(data)
        // //  /return movies;
        // // appendmovie(data.items)
        // appendmovie(data.Search)
        // console.log(data)
    }catch(err)
    {
        console.log(err)
    }

}

function appendmovie(data)
{
    let moviesdiv=document.getElementById("movies")
    moviesdiv.innerHTML=null;

    data.map(function(el)
    {
          let div=document.createElement("div")

          let image=document.createElement("img")
          image.src=el.Poster;

          let name=document.createElement("p")
          name.innerText=el.Title;

          let btn=document.createElement("button")
          btn.innerText="Book now"
          btn.setAttribute("class","book_now")
       
        btn.addEventListener("click",function()
        {
            showmovie(el)
        })
           div.append(image,name,btn)
           moviesdiv.append(div)
    })
}
function showmovie(y) 
{
    localStorage.setItem("movie",JSON.stringify(y))
       window.location.href="checkout.html"
}
async function main()
{
    let data=await searchmovies();

    if(data==undefined)
    {
        return false;
    }
    appendmovie(data)
}

function debounce(func,delay)
{
    if(id)
    {
        clearInterval(id)
    }
    id=setTimeout(function()
    {
        func();
    },delay)
}
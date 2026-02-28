const thingy=document.getElementById("thingy");
const button=document.getElementById("btn");
button.addEventListener("click",async ()=>{
    const URL="https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random()*800);
    const response=await fetch(URL);
    const data=await response.json();
    thingy.src=data.sprites.front_default;
}
);

const thingy=document.getElementById("thingy");
const button=document.getElementById("btn");
const answer=document.getElementById("answer");
const input=document.getElementById("input");
const submit=document.getElementById("btn1");
const conclusion=document.getElementById("conclusion");
const hint=document.getElementById("btn2");
const help=document.getElementById("help");
const easy=document.getElementById("easy");
const hard=document.getElementById("hard");
const h2=document.getElementById("h2");
let i=0;
let j=0;
let data;
button.addEventListener("click",async ()=>{
    i=0;
    if(input.value.toLowerCase()!==""){
        input.value="";
        conclusion.textContent="";
        help.textContent="";
        answer.textContent="";
    }
    thingy.style.visibility = "hidden";
    const id=Math.floor(Math.random()*800);
    const URL="https://pokeapi.co/api/v2/pokemon/"+id;
    const response=await fetch(URL);
    data=await response.json();
    thingy.src=data.sprites.front_default;
    if(j===1){
        thingy.classList.add("blacky");
    }
    thingy.style.visibility = "visible";
    
    });

submit.addEventListener("click",()=>{
    answer.textContent=data.name;
    if(input.value.toLowerCase()===answer.textContent){
        if(i>=1){conclusion.textContent="Correct!";}
        else{conclusion.textContent="Correct!Smart man!"}


    } 
    
    else{
        if(i>=1){
            conclusion.textContent="Wrong , hint(s) didnt help huh? ";
        }
        else{

        conclusion.textContent="Wrong!";}

    }
answer.textContent="It's "+data.name+"!";

});
hint.addEventListener("click",async ()=>{
    if(i===0){
help.textContent="The first letter is "+data.name[0];
i++;
    }
    else if(i===1){
        i++;
help.textContent="The second letter is "+data.name[1];
    }
    else {
        help.textContent="You're out of hints dumbo!";
    }
});
easy.addEventListener("click",()=>{
h2.textContent="Easy Mode";
easy.classList.add("hidden");
hard.classList.add("hidden");
button.classList.remove("hidden");
input.classList.remove("hidden");
conclusion.classList.remove("hidden");
submit.classList.remove("hidden");
hint.classList.remove("hidden");
});

hard.addEventListener("click",()=>{
easy.classList.add("hidden");
hard.classList.add("hidden");
button.classList.remove("hidden");
input.classList.remove("hidden");
conclusion.classList.remove("hidden");
submit.classList.remove("hidden");
hint.classList.remove("hidden");
j=1;
h2.textContent="Big Brain Mode";
});

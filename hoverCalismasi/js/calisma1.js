console.log("js etkin");

let section=document.querySelector("section");


section.innerHTML+=`

<div id="hover-alani" class="hover-alani">

</div>

`;


let hoverAlani=document.querySelector("#hover-alani");


    hoverAlani.innerHTML="";
    
    for(i=0;i<=1011;i++){
        hoverAlani.innerHTML+=`
           <span id="${i}" class="hover-kutu">
           </span>
`;
    }

let hoverKutu=document.querySelectorAll(".hover-kutu");

hoverKutu.forEach(hoverKutu=>{

    hoverKutu.onmouseenter=()=>{
        hoverKutu.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
        console.log(randomColor());
    }
    hoverKutu.onmouseleave=()=>{
        setTimeout(() => {
            hoverKutu.style.backgroundColor=`rgb(${50},${50},${70})`;
        }, 1000);
        
    }
})

function randomColor(color){
    color=Math.floor(Math.random() * 255);
    return color;
}

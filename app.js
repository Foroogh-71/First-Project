const mainmenu= document.querySelector(".mainMenu");
const openmenu= document.querySelector(".open-menu");
const closemenu= document.querySelector(".close-menu");

openmenu.addEventListener("click", show);
function show(){
    mainmenu.style.display="flex";
    mainmenu.style.top="0";
}

closemenu.addEventListener("click",close);
function close(){
    mainmenu.style.top="-150%";
}
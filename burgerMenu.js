const menuItems = document.querySelectorAll("nav ul li")
const menuUl = document.querySelector("ul.menu")
const menuButton = document.querySelector("li i.menubarIkon")
const menuButton_li = document.querySelector("li.menubarIkon_li")
const menu = document.querySelector("header nav")
const menuLogo = document.querySelector("li:first-of-type")
//tal variablen bruges til at tjekke om menuen allerede er foldet ud
let tal = 0
console.log(menuLogo)

 window.addEventListener("resize", windowUpdate)


//først adder jeg mini classen til ul og nav, som gør at burger menuen er slået ind
windowUpdate()

//dette er update funktionen som kører hver gang der bliver trukket i vinduet
function windowUpdate(){
  
    //her tjekker jeg om vinduet er mindre end 801 pixel
    if(window.innerWidth <801){
        if(tal !== 1){
       
         for(let i = 1;i < menuItems.length - 1; i++ ){
            //her gør jeg alle menupunkterne altså (li'erne) usynlige
            menuItems[i].classList.add("invisible")
       }
       //Her gør jeg burgermenu- knappen/baren synlig, så man kan trykke på den og vise menuen
       menuButton_li.classList.remove("invisible")
       //her adder jeg eventlisteners til min menuknap
       menuButton.addEventListener("click", showHideMenu)}
 }
 //her tjekker jeg om viduet er størrer end 800 px 
 if(window.innerWidth >800){
    menuReset()
    tal = 0

    for(let i = 1;i < menuItems.length - 1; i++ ){
        //her gør jeg alle menupunkterne synlige igen,
        menuItems[i].classList.remove("invisible")
   }
  //Her gør jeg burgermenu- knappen/baren usynlig
   menuButton_li.classList.add("invisible")
   
 }


}
//denne kode bruges til at placere menu punkterne rigtigt på mobil versionen

//denne function kører når menuknapper klikkes
function showHideMenu(){
    tal = 1
    for(let i = 1;i < menuItems.length - 1; i++ ){
        //dette gør alle li'erne i menuen synlige
        menuItems[i].classList.toggle("invisible")
    }
    //de 2 nedestående koder, gør at menubaren bliver til et kryds
    menuButton.classList.toggle("fa-x")  
    menuButton.classList.toggle("fa-bars")  
    //giver menuen en height på 100%, gennem en class i css
    menu.classList.toggle("burgermenubar");
    //tilføjer padding-top til menuen
    menuUl.classList.toggle("burgermenubar")
    //denne classList gør at "ikøbenhavn" logoet og menubar logoet har den rigtige afstand til toppen (!!style.css: 587)
    menuButton_li.classList.toggle("burgermenubar")
    menuLogo.classList.toggle("burgermenubar")
}

//denne function gør at hvis man åbner menuen og gør skærmen størrer og man så gør den mindre igen, bliver menuen resat
function menuReset(){
    for(let i = 1;i < menuItems.length - 1; i++ ){
        menuItems[i].classList.add("invisible")
    }
    
    menuButton.classList.remove("fa-x")  
    menuButton.classList.add("fa-bars")  
    menu.classList.remove("burgermenubar");
    menuUl.classList.remove("burgermenubar")
    menuButton_li.classList.remove("burgermenubar")
    menuLogo.classList.remove("burgermenubar")
}
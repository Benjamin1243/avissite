//her vælger jeg alle billederne og putter dem ind i en nodelist
const slides = document.querySelectorAll(".slide")
//her vælger jeg "p" tagget med classen caption, den tekst skal skiftes ud afhængigt af billedes "alt" element
const caption = document.querySelector(".caption")

//nu skal vi have fat i de 2 pile, og give dem hver især en event listener
const prev = document.querySelector("#back").addEventListener("click", changeSlide)
const next =  document.querySelector("#next").addEventListener("click", changeSlide)
//nu oprettter jeg en let som skal bruges til at holde styr på hvilket billede vi er på
let current = 0
//nu sætter vi caption's tekst til at være den synlige img's "alt" atributten 
captionText = slides[current].getAttribute("alt")
caption.textContent = captionText

// nu laver vi funktionen der skifter billede

function changeSlide(){
    //først starter vi med at fjerne classen "slide--active" fra det synlige img
    slides[current].classList.remove("slide--active", "slide--left", "slide--right")
    //nu skal vi finde ud af hvad den pils "id" der har triggede functionen er og afhængigt af det gå et billede fram eller tilbage
    if(this.getAttribute("id") === "next"){
        current++
        //nu tjekker vi om vi er nået til den sidste, go derfor skal starte forfra
        if(current > slides.length - 1){
            current = 0
        }
        slides[current].classList.add("slide--active","slide--left")
    }else{
        current--
        //nu tjekker vi om vi er nået til under 0 i nodelisten, hvor der så ikke er noget billede
        if(current < 0){
            current = slides.length -1
        }
        slides[current].classList.add("slide--active", "slide--right")
    }
    //nu skal billedeteksten opdateres afhængigt af billedes "alt " attribute
    captionText = slides[current].getAttribute("alt")
    caption.textContent = captionText
    console.log(current)

}
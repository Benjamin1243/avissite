document.querySelector("#tilmeld").addEventListener("submit", validate)
const messageField = document.querySelector("#besked")
let stjerner = document.querySelectorAll(".star")
console.log(stjerner)

console.log(document.querySelector("#tilmeld").address)

function validate(evt) {
    console.log(this.news.checked)
    let error

    // email validering, skal udfyldese og skal matche regular expression for en email
    const regxp_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email1Val = this.email1.value;
    if (email1Val == "") {
        evt.preventDefault();
        this.email1.focus();
        error = "Indtast din email!";
        messageField.textContent = error
        this.email1.style.backgroundColor = "rgb(160, 40, 40)";
        this.email1.style.color = " rgb(255, 255, 255)"
        return false;
    } else if (!regxp_email.test(email1Val)) {
        evt.preventDefault();
        this.email1.focus();
        error = "Din email skal indeholde bogstaver - @ - bogstaver - . - bogstaver (test@mail.dk)";
        messageField.textContent = error
        this.email1.style.backgroundColor = "rgb(160, 40, 40)";
        this.email1.style.color = " rgb(255, 255, 255)"
        return false;
    } else {
        this.email1.style.backgroundColor = "rgb(255, 255, 255)";
        stjerner[0].textContent = ""
        this.email1.style.color = " rgb(0, 0, 0)"
    }


    if (this.email2.value == "") {
        evt.preventDefault()
        error = "du skal gentage din email adresse!"
        messageField.textContent = error
        this.email2.focus()
        this.email2.style.backgroundColor = "rgb(160, 40, 40)";
        this.email2.style.color = " rgb(255, 255, 255)"
        return false
    } else {
        this.email2.style.backgroundColor = "rgb(255, 255, 255)";
        this.email2.style.color = " rgb(0, 0, 0)"
    }
    if (this.email2.value !== this.email1.value) {
        evt.preventDefault()
        this.email2.style.backgroundColor = "rgb(160, 40, 40)";
        error = "De to email adresser skal være ens"
        messageField.textContent = error
        this.email2.focus()
        return false
    } else {
        this.email2.style.backgroundColor = "rgb(255, 255, 255)";
        this.email2.style.color = " rgb(0, 0, 0)"
        stjerner[1].textContent = ""
    }

    //nu er det tid til adgangskode

    const regxp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passwordVal = this.password.value;

    if (passwordVal == "") {
        evt.preventDefault()
        this.password.style.backgroundColor = "rgb(160, 40, 40)";
        this.password.style.color = " rgb(255, 255, 255)"
        error = "du skal indtaste et kodeord"
        messageField.textContent = error
        this.password.focus()
        return false
    } else if (!regxp_password.test(passwordVal)) {
        evt.preventDefault()
        this.password.style.backgroundColor = "rgb(160, 40, 40)";
        error = "Dit kodeord skal indeholde mindst 8 tegn, mindst et special tegn, bogstav og tal"
        console.log(passwordVal)
        messageField.textContent = error
        this.password.focus()
        return false
    } else {
        this.password.style.backgroundColor = "rgb(255, 255, 255)";
        this.password.style.color = " rgb(0, 0, 0)"
        stjerner[2].textContent = ""
    }
    let passwor2dVal = this.password2.value;
    if (passwor2dVal == "") {
        evt.preventDefault()
        this.password2.style.backgroundColor = "rgb(160, 40, 40)";
        this.password2.style.color = " rgb(255, 255, 255)"
        error = "du skal indtaste det samme kodeord som før"
        messageField.textContent = error
        this.password2.focus()
        return false
    } else if (passwor2dVal !== passwordVal) {
        evt.preventDefault()
        this.password2.style.backgroundColor = "rgb(160, 40, 40)";
        error = "du skal indtaste det samme kodeord som før"
        console.log(passwordVal)
        messageField.textContent = error
        this.password2.focus()
        return false
    } else {
        stjerner[3].textContent = ""
        this.password2.style.backgroundColor = "rgb(255, 255, 255)";
        this.password2.style.color = " rgb(0, 0, 0)"
    }



    if (this.name.value == "") {
        //denne function sørger for at formularen ikke bliver sendt afsted
        evt.preventDefault()
        error = "udfyld venligst dit fornavn!!"
        messageField.textContent = error
        //vi fokusere makøren i inputfeltet med name navn
        this.name.focus()
        this.name.style.backgroundColor = "rgb(160, 40, 40)";
        this.name.style.color = " rgb(255, 255, 255)"
        return false
    } else {
        this.name.style.backgroundColor = "rgb(255, 255, 255)";
        this.name.style.color = " rgb(0, 0, 0)"
        stjerner[4].textContent = ""
    }
    if (this.name2.value == "") {
        //denne function sørger for at formularen ikke bliver sendt afsted
        evt.preventDefault()
        error = "udfyld venligst dit efternavn!!"
        messageField.textContent = error
        //vi fokusere makøren i inputfeltet med name navn
        this.name2.focus()
        this.name2.style.backgroundColor = "rgb(160, 40, 40)";
        this.name2.style.color = " rgb(255, 255, 255)"
        return false
    } else {
        this.name2.style.backgroundColor = "rgb(255, 255, 255)";
        stjerner[5].textContent = ""
        this.name2.style.color = " rgb(0, 0, 0)"
    }
    //nu kommer vi til telefon nummer

    if (this.offer.checked !== true) {
        evt.preventDefault()
        error = "Du skal aceptere vores produktvilkår "
        messageField.textContent = error
        //vi fokusere makøren i inputfeltet med name navn
        this.offer.focus()
        this.offer.style.backgroundColor = "rgb(160, 40, 40)";
        this.offer.style.color = " rgb(255, 255, 255)"
        this.offer.style.border = "thick solid #0000FF"
    }

    

    const phoneVal = this.phone.value
    const regxp_phone = /^(?:(?:00|\+)?45)?\d{8}$/;
    if (!regxp_phone.test(phoneVal)) {
        evt.preventDefault();
        this.phone.focus();
        error = "indtast hele dit mobil nummer";
        messageField.textContent = error

        this.phone.style.backgroundColor = "rgb(160, 40, 40)";
        this.phone.style.color = " rgb(255, 255, 255)"
        return false;
    } else {
        error.textContent = "";
        stjerner[6].textContent = ""
        this.phone.style.backgroundColor = "#fff";
        this.phone.style.color = " rgb(0, 0, 0)"

    }
    //nu kommer vi til adresse
     if (this.adresse.value == "") {
         //denne function sørger for at formularen ikke bliver sendt afsted
         evt.preventDefault()
         error = "udfyld venligst din adresse!"
         messageField.textContent = error
         //vi fokusere makøren i inputfeltet med name navn
         this.adresse.focus()
         this.adresse.style.backgroundColor = "rgb(160, 40, 40)";
         this.adresse.style.color = " rgb(255, 255, 255)"
         return false;
     } else {
         this.adresse.style.backgroundColor = "rgb(255, 255, 255)";
         stjerner[5].textContent = ""
         this.adresse.style.color = " rgb(0, 0, 0)"
     }
    

    //nu kommer vi til alle checkboxene

    // if (this.news.value.checked !== true) {
    //     evt.preventDefault()
    //     error = "udfyld venligst dit efternavn!!"
    //     messageField.textContent = error
    //     //vi fokusere makøren i inputfeltet med name navn
    //     this.news.focus()
    //     this.news.style.backgroundColor = "rgb(160, 40, 40)";
    //     this.news.style.color = " rgb(255, 255, 255)"
    // }
    /*
        //isNaN står for is no a number
    if(isNaN(this.alder.value)){
        evt.preventDefault()
        error = "Din alder skal være i tal, tak!!"
        messageField.textContent = error
        this.alder.focus()
        return false
    }
    if(this.alder.value < 18){
        evt.preventDefault()
        error = "du skal være 18 eller over"
        messageField.textContent = error
        this.alder.focus()
        return false
    }
    if(this.email1.value == ""){
        evt.preventDefault()
        error = "udftld venligst din email, tak!!"
        messageField.textContent = error
        this.email1.focus()
        return false
    }

    
   
    
    
    if(this.pas1.value == ""){
        evt.preventDefault()
        error = "Du skal indtaste dit kodeord"
        messageField.textContent = error
        this.pas1.focus()
        return false
    }

    const regxp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   
    if (!regxp_password.test(this.pas1.value)) {
        evt.preventDefault()
        error = "Dit kodeord skal indeholde mindst 8 tegn, stort og lille  bogstav, specialtegn og tal"
        messageField.textContent = error
        this.pas1.focus()
        return false}

        if(this.pas2.value !== this.pas1.value){
            evt.preventDefault()
            error = "De to kodeord skal være ens"
            messageField.textContent = error
            this.pas2.focus()
            return false
        }
    */
}
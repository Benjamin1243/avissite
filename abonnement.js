// funktion til at definere indhold efter abonnement
document.querySelector("#ab1").addEventListener("click", abonnement);
document.querySelector("#ab2").addEventListener("click", abonnement);
document.querySelector("#ab3").addEventListener("click", abonnement);
document.querySelector("#ab4").addEventListener("click", abonnement);

function abonnement() {
  if (this.getAttribute("ID") === "ab1") {
    localStorage.setItem("overskrift", "Digital");
    localStorage.setItem("tekst", "Abonnementet giver ubegrænset adgang til den digitale avis og adgang til abonnementsfordele. Abonnementet er fortløbende og fortsætter efter den første måned til normalpris.");
    localStorage.setItem("pris", 210);
  }

  if (this.getAttribute("ID") === "ab2") {
    localStorage.setItem("overskrift", "Digital og Weekend");
    localStorage.setItem("tekst", "Abonnementet giver ubegrænset adgang til den digitale avis, samt papiravisen tilsendt fredag og lørdag. Abonnementet er fortløbende og fortsætter efter den første måned til normalpris.");
    localStorage.setItem("pris", 315);
  }

  if (this.getAttribute("ID") === "ab3") {
    localStorage.setItem("overskrift", "Fuldt Abonnement");
    localStorage.setItem("tekst", "Abonnementet giver ubegrænset adgang til den digitale avis, samt papiravisen tilsendt mandag til lørdag. Abonnementet er fortløbende og fortsætter efter den første måned til normalpris.");
    localStorage.setItem("pris", 440);
  }

  if (this.getAttribute("ID") === "ab4") {
    localStorage.setItem("overskrift", "Studerende Digital");
    localStorage.setItem("tekst", "Abonnementet giver studerende ubegrænset adgang til den digitale avis. Abonnementet er fortløbende og fortsætter efter den første måned til normalpris.");
    localStorage.setItem("pris", 150);
  }
}
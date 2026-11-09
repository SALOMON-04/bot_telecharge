

const chemin = document.getElementById("lien")
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");


//  vérifie que les éléments existent bien
if (!chemin || !bouton || !message) {
  throw new Error("Élément introuvable");
}

bouton.addEventListener("click", async () => {


    message.textContent = "Envoi en cours...";


    const reponse = await fetch("/download", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({url: chemin.value})
    })

    message.textContent = await reponse.text()
})
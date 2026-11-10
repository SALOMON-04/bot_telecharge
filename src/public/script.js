


const lien = document.getElementById("lien")
const boutton = document.getElementById("bouton")
const message = document.getElementById("message")


// verifier si les éléments exists 
if (!lien || !boutton || !message) {
    throw new Error("Element introuvable")
}


boutton.addEventListener("click", async () => {

    message.textContent = "Téléchargement..."
    
    const reponse = await fetch("/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: lien.value }),
    });

    
    if (reponse.ok) {
        message.textContent = "Terminé";
        lien.value = "";
    } else {
        message.textContent = "Échec du téléchargement";
    }
});






const lien = document.getElementById("lien")
const boutton = document.getElementById("bouton")
const message = document.getElementById("message")


// verifier si les éléments exists 
if (!lien || !boutton || !message) {
    throw new Error("Element introuvable")
}


boutton.addEventListener("click", async () => {

    message.textContent = "Téléchargement..."
    boutton.disabled = true;

    const reponse = await fetch("/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: lien.value }),
    });


    if (!reponse.ok) {
        message.textContent = "Echec du téléchargement";
        boutton.disabled = false;
        return
    }

    const fichier = await reponse.blob();

    // Le navigateur l'enregistre dans Téléchargements
    const a = document.createElement("a");
    a.href = URL.createObjectURL(fichier);
    a.download = "video.mp4";
    a.click();

    // Seulement maintenant : c'est terminé
    message.textContent = "Terminé";
    lien.value = "";
    boutton.disabled = false;

});



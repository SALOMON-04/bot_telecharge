import { Injectable } from "@nestjs/common";
import { spawn } from "node:child_process"
import { homedir } from "node:os";
import { join } from "node:path";



@Injectable()

export class DownloadService {

    telecharge(url: string) {
        // Dossier Téléchargements de l'utilisateur, sans chemin écrit en dur
        const dossier = join(homedir(), "Downloads");
        const lien = spawn("yt-dlp", ["--no-playlist", "-P", dossier, "-o", "%(title)s.%(ext)s", "--", url], { stdio: "inherit" })
        lien.on("error", (err) => console.log(err));

        return "Telechargement"

    }
}
import { Injectable } from "@nestjs/common";
import {spawn} from "node:child_process"
// Le service est vide pour l'instant
@Injectable()
export class DownloadService {

    telecharge(url: string) {
        const child = spawn("yt-dlp", ["--no-playlsit", "--", url])

        child.on("error", () => console.log("telechargement impossible"));
        
        return "Telechargement"
    }
}
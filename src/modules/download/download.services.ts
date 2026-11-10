import { Injectable } from "@nestjs/common";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";

@Injectable()
export class DownloadService {
  telecharge(url: string) {
    // Lance yt-dlp et attend qu'il finisse
    const resultat = execFileSync("yt-dlp", [
      "--no-playlist",
      "--js-runtimes", "node",
      "-t", "mp4",
      "-P", tmpdir(),
      "--print", "after_move:filepath",
      "--",
      url,
    ]);

    // yt-dlp affiche le chemin du fichier : on le renvoie
    return resultat.toString().trim();
  }
}
import { Body, Controller, Post, Res } from "@nestjs/common";
import { AllowAnonymous } from "@thallesp/nestjs-better-auth";
import type { Response } from "express";
import { DownloadService } from "./download.services.js" ;

@Controller("download")
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Post()
  @AllowAnonymous()
  create(@Body("url") url: string, @Res() res: Response) {
    const chemin = this.downloadService.telecharge(url);
    res.download(chemin); // envoie le fichier au navigateur
  }
}
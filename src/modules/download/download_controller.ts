import { Controller, HttpCode, Post, HttpStatus, Body } from "@nestjs/common";
import { AllowAnonymous } from "@thallesp/nestjs-better-auth";
import {DownloadService} from "./download.services.js"




@Controller("download")
export class DownloadController {

    constructor(private readonly downloadService: DownloadService) {}

    @Post()
    @AllowAnonymous()
    @HttpCode(HttpStatus.CREATED)
    creat(@Body("url") url: string){
        return this.downloadService.telecharge(url)
    }
}
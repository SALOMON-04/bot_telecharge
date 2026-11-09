import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AllowAnonymous} from "@thallesp/nestjs-better-auth";
import { DownloadService } from "./download.services.js"





@Controller("download")
export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {}



    @Post()
    @AllowAnonymous()
    @HttpCode(HttpStatus.CREATED)
    create( @Body("url") url: string){
        return this.downloadService.telecharge(url) 
    }

}





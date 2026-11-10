import { Module } from "@nestjs/common";
import { DownloadController } from "./download_controller.js";
import { DownloadService } from "./download.services.js";


@Module({
    controllers: [DownloadController],
    providers: [DownloadService]
})

export class DownloadModule {}
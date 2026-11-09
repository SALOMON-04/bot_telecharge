import { Module } from "@nestjs/common";
import { DownloadController } from "./download_controller.js";
import { DownloadService } from "./download.services.js";

// Le module regroupe le controller et le service
@Module({
  controllers: [DownloadController],
  providers: [DownloadService],
})
export class DownloadModule {}
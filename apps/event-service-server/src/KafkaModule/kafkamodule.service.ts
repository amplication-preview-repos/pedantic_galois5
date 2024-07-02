import { Injectable } from "@nestjs/common";

@Injectable()
export class KafkaModuleService {
  constructor() {}
  async ConsumeAndroidEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ConsumeIosEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ConsumeScreenshotPreparationEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ConsumeWebEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

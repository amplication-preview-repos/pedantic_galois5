import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { KafkaModuleService } from "./kafkamodule.service";

@swagger.ApiTags("kafkaModules")
@common.Controller("kafkaModules")
export class KafkaModuleController {
  constructor(protected readonly service: KafkaModuleService) {}

  @common.Post("/consumeAndroidEvent")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumeAndroidEvent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConsumeAndroidEvent(body);
      }

  @common.Post("/consumeIOSEvent")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumeIosEvent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConsumeIosEvent(body);
      }

  @common.Post("/consumeScreenshotPreparationEvent")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumeScreenshotPreparationEvent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConsumeScreenshotPreparationEvent(body);
      }

  @common.Post("/consumeWebEvent")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConsumeWebEvent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConsumeWebEvent(body);
      }
}

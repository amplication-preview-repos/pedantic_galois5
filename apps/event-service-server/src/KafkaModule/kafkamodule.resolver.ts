import * as graphql from "@nestjs/graphql";
import { KafkaModuleService } from "./kafkamodule.service";

export class KafkaModuleResolver {
  constructor(protected readonly service: KafkaModuleService) {}

  @graphql.Mutation(() => String)
  async ConsumeAndroidEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConsumeAndroidEvent(args);
  }

  @graphql.Mutation(() => String)
  async ConsumeIosEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConsumeIosEvent(args);
  }

  @graphql.Mutation(() => String)
  async ConsumeScreenshotPreparationEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConsumeScreenshotPreparationEvent(args);
  }

  @graphql.Mutation(() => String)
  async ConsumeWebEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ConsumeWebEvent(args);
  }
}

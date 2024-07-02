import { Module } from "@nestjs/common";
import { KafkaModuleService } from "./kafkamodule.service";
import { KafkaModuleController } from "./kafkamodule.controller";
import { KafkaModuleResolver } from "./kafkamodule.resolver";

@Module({
  controllers: [KafkaModuleController],
  providers: [KafkaModuleService, KafkaModuleResolver],
  exports: [KafkaModuleService],
})
export class KafkaModuleModule {}

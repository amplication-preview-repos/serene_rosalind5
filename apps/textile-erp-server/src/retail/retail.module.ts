import { Module } from "@nestjs/common";
import { RetailModuleBase } from "./base/retail.module.base";
import { RetailService } from "./retail.service";
import { RetailController } from "./retail.controller";
import { RetailResolver } from "./retail.resolver";

@Module({
  imports: [RetailModuleBase],
  controllers: [RetailController],
  providers: [RetailService, RetailResolver],
  exports: [RetailService],
})
export class RetailModule {}

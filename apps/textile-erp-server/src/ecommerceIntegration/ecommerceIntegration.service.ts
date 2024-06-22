import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EcommerceIntegrationServiceBase } from "./base/ecommerceIntegration.service.base";

@Injectable()
export class EcommerceIntegrationService extends EcommerceIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

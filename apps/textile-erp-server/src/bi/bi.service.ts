import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BiServiceBase } from "./base/bi.service.base";

@Injectable()
export class BiService extends BiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

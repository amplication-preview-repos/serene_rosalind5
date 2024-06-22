/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RetailService } from "../retail.service";
import { RetailCreateInput } from "./RetailCreateInput";
import { Retail } from "./Retail";
import { RetailFindManyArgs } from "./RetailFindManyArgs";
import { RetailWhereUniqueInput } from "./RetailWhereUniqueInput";
import { RetailUpdateInput } from "./RetailUpdateInput";

export class RetailControllerBase {
  constructor(protected readonly service: RetailService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Retail })
  async createRetail(@common.Body() data: RetailCreateInput): Promise<Retail> {
    return await this.service.createRetail({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Retail] })
  @ApiNestedQuery(RetailFindManyArgs)
  async retails(@common.Req() request: Request): Promise<Retail[]> {
    const args = plainToClass(RetailFindManyArgs, request.query);
    return this.service.retails({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Retail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async retail(
    @common.Param() params: RetailWhereUniqueInput
  ): Promise<Retail | null> {
    const result = await this.service.retail({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Retail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRetail(
    @common.Param() params: RetailWhereUniqueInput,
    @common.Body() data: RetailUpdateInput
  ): Promise<Retail | null> {
    try {
      return await this.service.updateRetail({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Retail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRetail(
    @common.Param() params: RetailWhereUniqueInput
  ): Promise<Retail | null> {
    try {
      return await this.service.deleteRetail({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

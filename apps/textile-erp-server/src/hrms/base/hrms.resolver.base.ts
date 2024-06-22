/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Hrms } from "./Hrms";
import { HrmsCountArgs } from "./HrmsCountArgs";
import { HrmsFindManyArgs } from "./HrmsFindManyArgs";
import { HrmsFindUniqueArgs } from "./HrmsFindUniqueArgs";
import { DeleteHrmsArgs } from "./DeleteHrmsArgs";
import { HrmsService } from "../hrms.service";
@graphql.Resolver(() => Hrms)
export class HrmsResolverBase {
  constructor(protected readonly service: HrmsService) {}

  async _hrmsItemsMeta(
    @graphql.Args() args: HrmsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Hrms])
  async hrmsItems(@graphql.Args() args: HrmsFindManyArgs): Promise<Hrms[]> {
    return this.service.hrmsItems(args);
  }

  @graphql.Query(() => Hrms, { nullable: true })
  async hrms(@graphql.Args() args: HrmsFindUniqueArgs): Promise<Hrms | null> {
    const result = await this.service.hrms(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Hrms)
  async deleteHrms(@graphql.Args() args: DeleteHrmsArgs): Promise<Hrms | null> {
    try {
      return await this.service.deleteHrms(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

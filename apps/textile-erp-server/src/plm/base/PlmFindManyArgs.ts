/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlmWhereInput } from "./PlmWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PlmOrderByInput } from "./PlmOrderByInput";

@ArgsType()
class PlmFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlmWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PlmWhereInput, { nullable: true })
  @Type(() => PlmWhereInput)
  where?: PlmWhereInput;

  @ApiProperty({
    required: false,
    type: [PlmOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PlmOrderByInput], { nullable: true })
  @Type(() => PlmOrderByInput)
  orderBy?: Array<PlmOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PlmFindManyArgs as PlmFindManyArgs };

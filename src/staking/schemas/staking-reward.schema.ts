import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StackingRewardDocument = StackingReward & Document;

@ObjectType()
@Schema()
export class StackingReward {
  @Prop()
  @Field()
  totalFee: string;

  @Prop()
  @Field()
  totalPenalties: string;

  @Prop()
  @Field()
  phase: number;
}

@ArgsType()
export class TradingRewardVariables {
  @Field(() => String, { nullable: true })
  address?: string;
  @Field(() => Int, { nullable: true })
  phase?: number;
}

export const StackingRewardSchema =
  SchemaFactory.createForClass(StackingReward);

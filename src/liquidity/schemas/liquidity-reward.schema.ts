import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LiquidityRewardDocument = LiquidityReward & Document;

@ObjectType()
@Schema()
export class LiquidityReward {
  @Prop()
  @Field({ nullable: true })
  rewardRate: string;

  @Prop()
  @Field()
  phase: number;

  @Prop()
  @Field()
  contractAddress: string;
}

@ArgsType()
export class LiquidityRewardVariables {
  @Field(() => Int, { nullable: true })
  phase?: number;
}

export const LiquidityRewardSchema =
  SchemaFactory.createForClass(LiquidityReward);

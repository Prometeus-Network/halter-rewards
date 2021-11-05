import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TradingRewardDocument = TradingReward & Document;

@ObjectType()
@Schema()
export class TradingReward {
  @Prop()
  @Field()
  address: string;

  @Prop()
  @Field()
  tradeVolumeUSD: string;

  @Prop()
  @Field()
  phase: number;

  @Prop()
  @Field()
  percentage: number;

  @Prop()
  @Field({ nullable: true })
  paidOut?: boolean;
}

@ArgsType()
export class TradingRewardVariables {
  @Field(() => String, { nullable: true })
  address?: string;
  @Field(() => Int, { nullable: true })
  phase?: number;
}

export const TradingRewardSchema = SchemaFactory.createForClass(TradingReward);

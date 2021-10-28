import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StakingRewardDocument = StakingReward & Document;

@ObjectType()
@Schema()
export class StakingReward {
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
export class StakingRewardVariables {
  @Field(() => Int, { nullable: true })
  phase?: number;
}

export const StakingRewardSchema = SchemaFactory.createForClass(StakingReward);

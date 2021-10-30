import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  id: string;

  @Prop()
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

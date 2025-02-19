import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { WalletAsset, WalletAssetDocument } from './wallet-asset.entity';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema({ timestamps: true })
export class Wallet {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    set: (v) => [...new Set(v)],
    ref: WalletAsset.name,
  })
  assets: WalletAssetDocument[] | string[];

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);

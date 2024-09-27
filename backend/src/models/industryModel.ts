import mongoose, { Document, Schema } from 'mongoose';

export interface IIndustry extends Document {
  industryName: string;
  industryDescription: string;
  industrySlug: string;
}

const industrySchema: Schema = new Schema({
  industryName: { type: String, required: true },
  industryDescription: { type: String, required: true },
  industrySlug: { type: String, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model<IIndustry>('Industry', industrySchema);
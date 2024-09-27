import mongoose, { Document, Schema } from 'mongoose';

export interface ICompany extends Document {
  companyName: string;
  companyLogo: string;
  companyDescription: string;
  companyIndustry: mongoose.Types.ObjectId;
  companyWebsite: string;
  companyFoundedYear: number;
  companyHeadquarters?: string;
  companySize?: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1001-5000' | '5000+';
  companySocialMedia?: {
    companyLinkedin?: string;
    companyTwitter?: string;
    companyFacebook?: string;
  };
  companySlug: string;
  companyCulture?: string;
  companyBenefits?: string;
}

const companySchema: Schema = new Schema({
  companyName: { type: String, required: true, unique: true },
  companyLogo: { type: String, required: true },
  companyDescription: { type: String, required: true },
  companyIndustry: { type: Schema.Types.ObjectId, ref: 'Industry', required: true },
  companyWebsite: { type: String, required: true },
  companyFoundedYear: { type: Number, required: true },
  companyHeadquarters: { type: String },
  companySize: { 
    type: String, 
    enum: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000', '5000+']
  },
  companySocialMedia: {
    companyLinkedin: { type: String },
    companyTwitter: { type: String },
    companyFacebook: { type: String }
  },
  companySlug: { type: String, unique: true },
  companyCulture: { type: String },
  companyBenefits: { type: String },
}, { timestamps: true });

export default mongoose.model<ICompany>('Company', companySchema);
import mongoose, { Document, Schema } from 'mongoose';

export interface IJob extends Document {
  jobTitle: string;
  jobDescription: string;
  jobResponsibilities: string;
  jobRequirements: string;
  jobLocation: string;
  jobSkills?: string;
  jobCompany: mongoose.Types.ObjectId;
  jobSalaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  jobType: 'full-time' | 'part-time' | 'contract';
  jobRemoteOption: 'remote' | 'on-site' | 'hybrid';
  jobApplicationDeadline: Date;
  jobOpenings: number;
  jobStatus: 'open' | 'closed' | 'draft';
}

const jobSchema: Schema = new Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobResponsibilities: { type: String, required: true },
  jobRequirements: { type: String, required: true },
  jobLocation: { type: String, required: true },
  jobSkills: { type: String },
  jobCompany: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  jobSalaryRange: {
    min: { type: Number },
    max: { type: Number },
    currency: { type: String }
  },
  jobType: { type: String, enum: ['full-time', 'part-time', 'contract'] },
  jobRemoteOption: { type: String, enum: ['remote', 'on-site', 'hybrid'] },
  jobApplicationDeadline: { type: Date },
  jobOpenings: { type: Number },
  jobStatus: { type: String, enum: ['open', 'closed', 'draft'], default: 'open' }
}, { timestamps: true });

export default mongoose.model<IJob>('Job', jobSchema);
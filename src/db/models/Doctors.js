import mongoose from "mongoose";
import moment from "moment";

const DoctorSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      specialization: { type: String},
      email: { type: String, unique: true, required: true },
      phone: Number,
      countryCode: { type: Number, default: 91 },
      gender: { type: String, enum: ['Male', 'Female', 'Other'] }, 
      isIndividual: { type: Boolean, default: false },
      role: { type: [String] },
      hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
      departments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Department',
        },
      ],
      fee: { type: Number },
      isActive: { type: Boolean, default: true },
      isVerified:{ type: Boolean, default: false },
      createdAt: {
        type: Number,
        default: moment().unix(),
      },
    updatedAt: { type: Number,  },
    }
  );
  
const  Doctor = mongoose.model('Doctor', DoctorSchema);
export default Doctor;
  

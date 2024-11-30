import mongoose from "mongoose";
import moment from "moment";

const DoctorSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      specialization: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      contactNumber: { type: String, required: true },
      isIndividual: { type: Boolean, default: false },
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
      fee: { type: Number, required: true },
      isActive: { type: Boolean, default: true },
      createdAt: {
        type: Number,
        default: moment().unix(),
      },
    updatedAt: { type: Number,  },
    }
  );
  
  export default Doctor = mongoose.model('Doctor', DoctorSchema);
  
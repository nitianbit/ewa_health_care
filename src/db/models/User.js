import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: { type: String },
    countryCode: { type: Number, default: 91 },
    createdAt: { type: Number },
    balance: { type: Number, default: 0 },
    userType: { type: Number }, //user:0 or admin:1
    password: { type: String },
    disabled: { type: Boolean, default: false },
    loginType: { type: String },//auth or google
    verified:{ type: Boolean, default: false }
}, {
    collection: 'User',
});

export const User = mongoose.model('User', schema);

export const USER_TYPE = {
    USER: 0,
    ADMIN: 1
}

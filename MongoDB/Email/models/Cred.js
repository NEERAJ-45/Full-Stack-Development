// models/Cred.js
import mongoose from "mongoose";

const CredSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export const Cred = mongoose.model('Cred', CredSchema);

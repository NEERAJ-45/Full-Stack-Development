import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    time: { type: Date, default: Date.now },
    msg: String,
});

const GroupSchema = new mongoose.Schema({
    name: String,
    messages: [MessageSchema]
});

export const Group = mongoose.model('Group', GroupSchema);

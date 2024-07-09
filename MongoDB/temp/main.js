import mongoose from "mongoose";
import express from "express";
import { Group } from "./models/Todo.js";

const conn = await mongoose.connect("mongodb://localhost:27017/Hackathon3");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/sendReq', async (req, res) => {
    const { groupName, message } = req.body;

    let group = await Group.findOne({ name: groupName });
    if (!group) {
        group = new Group({ name: groupName, messages: [] });
    }

    group.messages.push({ msg: "Puh" });
    await group.save();

    res.send('Message saved successfully!');
});

app.get('/get/:groupName', async (req, res) => {
    const { groupName } = req.params;

    let group = await Group.findOne({ name: groupName });
    if (!group) {
        return res.status(404).send('Group not found');
    }

    res.json(group.messages);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

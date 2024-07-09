// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/Hackathon3")
const app = express()
const port = 3000

app.get('/send', (req, res) => {

    const todo = new Todo({ title:"Konichiwa", desc: "Hello Im Neeraj", isDone: false, days: 100,GrpName:"Mid-Row" })
    todo.save() 
    res.send('Hello World!')
})

app.get('/get', async (req, res) => { 
    let todo = await Todo.findOne({GrpName:"Mid-Row"})
    // console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
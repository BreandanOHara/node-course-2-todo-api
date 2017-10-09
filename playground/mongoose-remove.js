const {mongoose} =require('./../server/db/mongoose')
const {Todo} = require ('./../server/models/todo')
const {User} = require ('./../server/models/user')
const {ObjectId} = require ('mongodb')

// Todo.remove({}).then((res) => {
//     console.log(res)
// })



Todo.findByIdAndRemove('59db46fe49c53bb61de91481').then((todo)=>{
console.log(todo)
})
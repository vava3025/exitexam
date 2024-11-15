const mongoose=require('mongoose')
 
const modelSchema=mongoose.Schema({
    
    description:{
        type:String,
       required:true,
    },
    itstatus:{
        type:String,
        required:true,  
    },   
    
})


const modelData=mongoose.model('todo',modelSchema)
module.exports=modelData;
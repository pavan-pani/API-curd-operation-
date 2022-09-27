const express = require('express')
const mongoose=require('mongoose')
const fooditems=require('./model')

const app=express()
app.use(express.json())
mongoose.connect('mongodb+srv://pavan:pavan@cluster0.avsecbw.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('DB connected...'))
.catch(err=>console.log(err))


app.post('/additem',async (req,res)=>{
    const {name,price}=req.body
    try{
        const newdata=new fooditems({name,price})
        await newdata.save()
        return res.json(await fooditems.find())
    }
    catch(err){
        console.log(err.message);
    }
    
})

app.get('/getallitems', async(req,res)=>{
    const alldata= await fooditems.find() 
    return res.send(alldata)
})

//path param
app.get('/getallitems/:id', async(req,res)=>{
    try{
        const data=await fooditems.findById(req.params.id)
        return res.send(data)
    }
    catch(err){console.log(err);}
})

//delet
app.delete('/getallitems/:id', async(req,res)=>{
    try{
        const data=await fooditems.findByIdAndDelete(req.params.id)
        return res.send(data)
    }
    catch(err){console.log(err);}
})

app.listen(3000,(req,res)=>{
    console.log('server running...');
})
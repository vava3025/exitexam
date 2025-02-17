const express=require('express');
const morgan=require('morgan');

const app=new express();
app.use(morgan('dev'));


const basicsRoutes=require('./routes/basicsRoutes')
app.use('/basics',basicsRoutes)


require('dotenv').config();
const PORT=process.env.PORT

require('./db/connection');





app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
})
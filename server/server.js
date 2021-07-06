require('dotenv').config();
const express=require('express');
const mongoDB =require('./db.js');
const bodyParser=require('body-parser');

const app=express();

mongoDB();
const PORT=process.env.PORT || 6000

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require('./models/UserModel.js');
require('./models/PostModel')


app.use(express.json())
app.use(require('./routers/LogSign'));
app.use(require('./routers/Posts'))



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})



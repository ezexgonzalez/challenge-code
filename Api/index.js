const express = require("express");
const app = express();
const {invertText} = require("./tools");

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}); 

app.get("/", (req, res) =>{
    res.send("Hello");
})

app.get("/iecho", (req,res) =>{
    const {text} = req.query;
    if(text && !parseInt(text)){
        return res.json(invertText(text));
    }else{
        return res.status(400).json({
            error: "no text"
        })
    }
});


const PORT = 3001;

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT || PORT }`);
})


module.exports = app;
const express = require('express');



const app = express()
const port = process.env.PORT || 7000;

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.set("view engine", "ejs");


app.get('/', (req, res)=>{
 res.status(200).json({message: 'welcome to api'})
})


app.listen(port, () =>{
    console.log(`Server is running at localhost:${port}`)
})

module.exports = app
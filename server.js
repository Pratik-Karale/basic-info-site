const express=require("express")
const fs=require("fs")
const app=express()

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/",(req,res)=>{
  res.render("index")
})
app.get("/contact",(req,res)=>{
  res.render("contact")
})
app.get("/about",(req,res)=>{
  res.render("about")
})


app.listen(9969)
const express=require("express");
const app=express();
const path = require("path");
const port=8080;
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
let posts=[{
    id: 101,
    username:"apnacollege",
    content:"i love coding",

},
{
    id: 102,
    username:"shambhavipathak",
    content:"living in the world which doesn't exit", 
},
{
    id: 103,
    username:"pw",
    content:"padh lo chahe kahi se selection hoga yehi se....",
},];
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    console.log(post);
    res.render("show.ejs",{post});
})
app.listen(port,()=>{
    console.log("listening to port: 8080");
});
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    //console.log(req.body);
    let {username,content}=req.body;
    posts.push({username,content});
    //res.send("post request is send");
    res.redirect("/posts");
})
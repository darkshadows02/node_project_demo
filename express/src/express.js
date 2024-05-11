const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");

    app.set("views engine", "hbs");

  const  partialspath=path.join(__dirname, "../temppath/partials");
  const temppath=path.join(__dirname, "../temppath/views");

    app.set("views", temppath);
    hbs.registerPartials(partialspath);

    app.get("/", (req, res)=>{
         res.render("index.hbs", {
           dyncdata:"suraj kumar soni"
         });
    })
    app.get('/', (req, res)=>{
      res.send("hello from the home side")
  })
   app.get("/about", (req, res)=>{
        // console.log(req.query)
      res.render("about.hbs", {
        resdata:req.query.name,
        age:req.query.age
      })
   })
  app.get("/about", (req, res)=>{
    res.send("hello from the about side")
})
app.get("/contact", (req, res)=>{
  res.send("hello from the contact size")
})

   // for error page
     app.get("*", (req, res)=>{
        res.render("error.hbs");
     })
  app.listen(3000, ()=>{
        console.log("listen on server side on 6000");
  })
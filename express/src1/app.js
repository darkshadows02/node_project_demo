const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newdata")
.then(()=>{
    console.log("connection sucessful....");
}).catch((err)=>{
    console.log(err);
})


const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    vedio:Number,
    flag:Boolean
})

const Playlist=new mongoose.model("Playlist", playlistSchema);

const createDocument=async ()=>{
     try{
           const react=new Playlist({
            name:"react js",
            ctype:"front end",
            vedio:30,
             flag:true
           })
           const  node=new Playlist({
            name:"node js",
            ctype:"back end",
            vedio:30,
             flag:true
           })
           const database=new Playlist({
             name:"mongodb",
             ctype:"backend",
             vedio:4,
             flag:true
           })
           const database2=new Playlist({
            name:"mongoees",
            ctype:"backend",
            vedio:4,
            flag:true
          })
           const result=await Playlist.insertMany([react, node, database, database2]);

     }catch(err){
        console.log(err);
     }
}
createDocument();


const getdocument= async ()=>{
       const result =await Playlist.find({ctype:{$in:["backend","front end"]}});
       console.log(result);
}
getdocument();
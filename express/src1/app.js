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
           const reactplaylist=new Playlist({
            name:"node",
            ctype:"backend",
            vedio:30,
             flag:true
           })
           const result=await reactplaylist.save();

     }catch(err){
        console.log(err);
     }
}
createDocument();
const http=require('http');
const fs=require('fs');
const url=require('url');
const ejs=require('ejs');
const path=require('path');

function staticFile(filepath,res){
    fs.readFile(filepath,(err,content)=>{
        if(err){
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end();
        }
        else{
            // console.log(content.toString());
            res.end(content)
        }
    })
}
function dynamicFile(filepath,res){
    
    const userprofile={
        user_id: 1,
        user_name:"vivek",
        user_email:"menaparav2510@gmail.com",
        user_dob:"25-10-2002"
    }
    // fs.readFile(filepath,'utf8',(err,content)=>{
    //     if(err){
    //         console.log(err);
    //         res.writeHead(500, { "Content-Type": "text/html" });
    //         res.end();
    //     }
    //     else{
    //         const renderhtml=ejs.render(content ,{userprofile});
    //         res.writeHead(200, { "Content-Type": "text/html" });
    //         res.end(renderhtml)
    //     }
    // })
    ejs.renderFile(filepath,{userprofile},(err,content)=>{
        if(err){
            console.log(err);
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end();
        }
        else{
           
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content)
        }
    })
} 
const server=http.createServer((req,res)=>{
     const urlparse=url.parse(req.url)
    

     const staticfilepath=__dirname+"/public"+urlparse.path;
     const dynamicfilepath2=__dirname+"/views"+urlparse.path;


    //  staticFile(staticfilepath,res)
     dynamicFile(dynamicfilepath2,res)

})

server.listen(3002,()=>{
    console.log("server is running.....");
})
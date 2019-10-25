var http  = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':"text/html;charset='utf-8'"})
    let Alldata = '';
    
    req.on("data",function(chunk){ //Buffer
        Alldata+=chunk;
        console.log(chunk)
    })
    req.on("end",function(){
       var datas= JSON.parse(Alldata)
       if(datas.user==="陈"&&datas.password==="zaq321"){
          
        res.end("1")
        console.log(Alldata)
       }
       else if(datas.user==="刘"&&datas.password==="zaq123"){
        res.end("1")
       }
       
       else{
           res.end("-1")
       }
    })
 
 
}).listen(3000,()=>{
    console.log("端口开启成功")
})

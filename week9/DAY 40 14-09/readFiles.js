const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.method!='GET'){
        res.end(`End point not point. Sned get requests only`);
    }else{
        if(req.url === '/createFile'){
            let date = new Date();
            let timeStr = date.toLocaleTimeString();
            let dateStr = date.toLocaleDateString();
            let fileName = date.toISOString().substring(date.toISOString().indexOf('2020'));
            fileName = fileName.split(':').join('-');
            
            fs.writeFileSync(`${fileName}.txt`,`${dateStr}::${timeStr}`);
            let data = fs.readFileSync(`${fileName}.txt`).toString();
            console.log(data);
            res.write(data);
            res.end(data);
        }else if(req.url === '/sendFiles'){
            fs.readdir(__dirname,(err,files)=>{
                if(err){
                    res.end(`Error: ${err}`);
                }else{
                    let obj={};
                    files.forEach(file=>{
                        if(path.extname(file))
                            obj[file] = fs.readFileSync(file).toString();
                    });
                    obj = JSON.stringify(obj);
                    res.end(obj);
                }
            });
        }
    }
})

server.listen(3000,()=>{
    console.log("server is running");
})
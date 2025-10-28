const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3000 ws://localhost:3000;");
    if(req.method==='GET' && req.url==='/favicon.ico'){
        res.writeHead(204);
        res.end();
    }
    else if(req.method==='HEAD' && req.url==='/favicon.ico'){
        res.writeHead(204);
        res.end();
    }
    else if(req.method==='POST' && req.url==='/submit'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        });
        req.on('end',()=>{
            try{
                const postData=JSON.parse(body);
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify({
                    status:'success',
                    data:{
                        id:101,
                        ...postData
                    }
                }));

            }
            catch(error){
                console.error('JSON Parse Error:', error.message);
                console.log('Raw body:', body);
                res.writeHead(400,{'Content-Type':'application/json'});
                res.end(JSON.stringify({status:'error',message:'Invalid JSON'}));
            }
        });
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({status:'error',message:'Not Found'}));
    }
});
server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});

       
const http=require('http');
//Sample Data
const products=[
    {id:1,name:'Laptop',price:1000},
    {id:2,name:'Smartphone',price:500},
    {id:3,name:'Tablet',price:300}
];
const server=http.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/api/products'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(products));
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({status:'error',message:'Not Found'}));
    }
});
server.listen(4000,()=>{
    console.log('JSON API Server is listening on port 4000');
});

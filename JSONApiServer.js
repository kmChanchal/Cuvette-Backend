const http=require('http');
//Sample Data
const products=[
    {id:1,name:'Laptop',price:1000},
    {id:2,name:'Smartphone',price:500},
    {id:3,name:'Tablet',price:300}
];
const users = [
    {id:1, name:'John Doe', email:'john@example.com'},
    {id:2, name:'Jane Smith', email:'jane@example.com'}
];
const server=http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    if(req.method==='OPTIONS'){
        res.writeHead(200);
        res.end();
    }
    else if(req.method==='GET' && req.url==='/api/products'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(products));
    }
    else if(req.method==='POST' && req.url==='/api/users'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            try {
                const newUser = JSON.parse(body);
                const userId = users.length + 1;
                const user = { id: userId, ...newUser };
                users.push(user);
                res.writeHead(201, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(user));
            } catch (error) {
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ status: 'error', message: 'Invalid JSON' }));
            }
        });
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({status:'error',message:'Not Found'}));
    }
});
server.listen(4000,()=>{
    console.log('JSON API Server is listening on port 4000');
});

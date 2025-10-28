const http=require('http');
class MiniFramework{
    constructor(){
        this.routes = {};
    }
    get(path,handler){
        this.routes[`GET ${path}`]=handler;

    }
    post(path,handler){
        this.routes[`POST ${path}`]=handler;
    }
    listen(port,callback){
        const server=http.createServer((req,res)=>{
            res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3000 ws://localhost:3000;");
            let handler=this.routes[`${req.method} ${req.url}`];
            if (!handler && req.method === 'HEAD') {
                handler = this.routes[`GET ${req.url}`];
            }
            if(handler){
                handler(req,res);
            }
            else{
                res.statusCode=404;
                res.end('Hello, Guys! Page Not Found');

            }
        });
        server.listen(port,callback);
    }
}
const app=new MiniFramework();
app.get('/hello',(req,res)=>{
    res.end('Hello, World!');
});
app.get('/favicon.ico',(req,res)=>{
    res.statusCode=204;
    res.end();
});
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});

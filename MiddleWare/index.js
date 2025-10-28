const express = require('express');
const app = express();
//const myMiddleware =(req, res, next) => {
  //  console.log('Middleware executed');
    //req.requestTime=new Date().toISOString();
    //next();
//};
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; font-src 'self' data:; connect-src 'self' http://localhost:3000 ws://localhost:3000;");
    next();
});
//app.use(myMiddleware);
//app.get('/', (req, res) => {
  //  res.send('Hello World! Request received at: ' + req.requestTime);
//});
//app.listen(3000, () => {
  //  console.log('Server is running on http://localhost:3000');
//});
const requestLogger=(req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
};
app.use(requestLogger);
app.get('/products', (req, res) => {
    res.json([{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }]);
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

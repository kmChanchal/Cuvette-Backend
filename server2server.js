const http=require('http');
//Get Request
//Post Request
const postData = JSON.stringify({
    title: 'New Product',
    price: 200
});

const options={
    hostname:'jsonplaceholder.typicode.com',
    port:80,
    path:'/posts',
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        "Content-Length":postData.length,
    }
};
const req=http.request(options,(res)=>{
    console.log('Status Code:',res.statusCode);
    let data='';
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    res.on('end',()=>{
        console.log('Response Body:',data);
    });
});
req.on('error',(error)=>{
    console.error('Error:',error);
}
);
req.write(postData);
req.end();

    

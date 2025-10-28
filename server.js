//Post Request (Client =>send the data which is going to be stored DB)
const http=require('http');
const postData=JSON.stringify({
    title:'foo',
    body:'bar',
    userId:1
});
const options={
    hostname:'jsonplaceholder.typicode.com',
    port:80, 
    path:'/posts',
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Content-Length':postData.length
    }
};
const req=http.request(options,(res)=>{ 
                      console.log(`Status Code:${res.statusCode}`);
                      let responseData='';
                        res.on('data',(chunk)=>{
                            responseData+=chunk;
                        }); 
                        res.on('end',()=>{  
                            try {
                                console.log('Response Body:',JSON.parse(responseData))  ;       
                            } catch (error) {
                                console.error('Error parsing JSON:', error.message);
                                console.log('Raw response:', responseData);
                            }
                      });
                    });
req.on('error',(error)=>{
    console.error('Request Error',error);
});
req.write(postData);
req.end();
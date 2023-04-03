const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.t1);
    var r = Number(q.t1);
    console.log(q.t2);
    var b = 4;
    var area = 3.14*r*r;
    res.write("<p>Area of the Circle is "+area+"</p>");
    res.end();
    
}).listen(2011);
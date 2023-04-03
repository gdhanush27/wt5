const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.t1);
    var l = Number(q.t1);
    console.log(q.t2);
    var b = Number(q.t2);
    var area = l*b;
    res.write("<p>Area of the rectangle is "+area+"</p>");
    res.end();
    
}).listen(2011);
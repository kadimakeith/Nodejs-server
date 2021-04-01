
const http = require('http');

const textserver = http.createServer( function(req, res){

    res.writeHead(200,{'Content-Type':'text/plain'})
    
    res.end('Hello everyone, I am a response and I came from a server')

});

const jsonserver = http.createServer((req, res) =>{

    res.writeHead(200,{'Content-Type':'application/json'})

    res.end(`
    {
        'Name': 'Keith Kadima', 
        'Country':'Kenya',
        'Hobby': 'Guitarist',
    }
    `)

});

const htmlserver = http.createServer( function(req, res){

    res.writeHead(200,{'Content-Type':'text/html'})
    
    res.end(`
        <html>
            <head>
                <style>
                    body {background-color: powderblue;}
                    div { padding: 25px;
                          border-radius: 20px;
                          background-color: white;
                          width: 200px;}
                    h1   {color: blue;}
                    p    {color: red;}
                </style>
            </head>
            <body>
                <div>
                    <h1> Welcome to my shop </h1>
                    <p> Choose your weapon </p>
                    <ul>
                        <li> <a href ='#'> Gun </a> </li>
                        <li> <a href ='#'> Stone </a> </li>
                        <li> <a href ='#'> Stick </a> </li>
                    </ul>    

            </body>
    
        
        </html>
    
    `)

    
});

textserver.listen(1500, function(){
    console.log('Server Up and Running on port 1500')
});

jsonserver.listen(1600, function(){
    console.log('Server Up and Running on port 1600')
});

htmlserver.listen(1700, function(){
    console.log('Server Up and Running on port 1700')
});
const http = require('http');
const fs = require('fs');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;
// const port = 8080;

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  'There is no secret ingredient',
  "Well, the first days are the hardest days, don't you worry anymore!",
  'Wherever you are, that is where I want to be.',
  'As you wish!',
  'Give me a high five',
  'We are winners!!!'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min; 
}

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. 
  // This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    //redirect to quote
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) 
    res.end();
  }

// }).listen(3000);

  // TODO: GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
    //YOUR CODE HERE
    // var data = fs.readFileSync('../client/index.html','utf8');
    let random = getRandomInt(0, quotes.length);

    let currQuote = quotes[random]
    // var quote = "Be excellent to each other";
    res.writeHead(200, {...headers, "Content-Type": "text/html"});
    res.end(currQuote);
    // res.end(quote);

    // res.writeHead(301, { "Content-Type": "text/html" });
    // fs.createReadStream("../client/index.html", "UTF-8").pipe(res);

    
  }

  // TODO: POST/CREATE
  else if ((req.url == '/quote/' || req.url == `/quote`) && req.method == "POST") {
    //YOUR CODE HERE
    var body = "";
    req.on("data", function (chunk) {
        body += chunk;
    });

    req.on("end", function() {
        res.writeHead(200, {...headers, "Content-Type": "text/html"});
        console.log("in the Post Server")
        res.end(body);
    });
  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);

// =====original code
// const http = require('http');

// //headers to allows CORS requests
// const headers = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10
// };

// const port = 3000;

// // TODO: Fill with strings of your favorite quotes :)
// const quotes = [
//   'one',
// ];

// //Utility Function to return a random integer
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   //The maximum is exclusive and the minimum is inclusive
//   return Math.floor(Math.random() * (max - min)) + min; 
// }

// const handleRequest = function(req, res) {
//   console.log(`Endpoint: ${req.url} Method: ${req.method}`);

//   // redirect users to /quote if they try to hit the homepage. 
//   // This should already work, no changes needed
//   if (req.url == '/') {
//     console.log('redirecting');
//     //redirect to quote
//     res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) 
//     res.end();
//   }

//   // TODO: GET ONE
//   if ((req.url == '/quote/' || req.url == '/quote') && req.method == "FILL ME IN") {
//     //YOUR CODE HERE

//   }
//   // TODO: POST/CREATE
//   else if ((req.url == 'FILL ME IN' || req.url == 'FILL ME IN') && req.method == "FILL ME IN") {
//     //YOUR CODE HERE
//   }

// //CATCH ALL ROUTE
//   else {
//     res.writeHead(404,headers);
//     res.end('Page not found');

//   }
// }

// const server = http.createServer(handleRequest);
// server.listen(port);

// console.log('Server is running in the terminal!');
// console.log(`Listening on http://localhost:${port}`);

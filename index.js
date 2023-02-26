/** ------------ simple program run */
// var a = 40;
// var b = 30;
// var c = 20;

// console.log(a+b+c);


//** ------------ app file variable import */
// import {x} from "./app";

// const app = require('./app');
// console.log(app);
// console.log(app.textFun);

//** ------------ core modules use */

// const fs = require('fs').writeFileSync;

// fs("test.txt","This file added for testing purpose.");

const http = require('http');
http.createServer((req,res) =>{
    res.write("Hello this is suresh jidiya");
    res.end();
}).listen(3000);
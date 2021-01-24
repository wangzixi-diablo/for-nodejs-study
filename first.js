console.log('Hello World');

// 导入公共模块fs，用于文件读写。把导出的模块存储到变量fs里。
const fs = require('fs');
const data = fs.readFileSync('./1.txt', 'utf-8');

console.log("file content read is: " + data);

var a = new Date();

console.log('date: ' + a);
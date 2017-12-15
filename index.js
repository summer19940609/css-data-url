let fs = require('fs')


const base64_encode = function (file) {
    var bitmap = fs.readFileSync(file);
    return 'data:text/css;base64,' + new Buffer(bitmap).toString('base64');
}

console.log(base64_encode('./qrcode.css'))
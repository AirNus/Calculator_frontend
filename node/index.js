var static = require('node-static')
//
// Создание node-static server с постоянным подключением папки './public'
//
var file = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Статические файлы сервера
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);
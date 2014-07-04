/**
 * Created by holger on 04.07.2014.
 */
module.exports = (function() {
    var fs = require('fs');
    var mime = {
        html    : 'text/html'
        ,css    : 'text/css'
        ,js     : 'application/javascript'
        ,json   : 'application/json'
    };

    var log = function log(msg)  {
        console.log('did something: ' + msg);
    };

    return {
        log: function(msg) {
            return log(msg);
        },
        handleError: function(req, res) {
            console.error('404', req.method, url, filePath);
            res.writeHead(404);
            res.end('404 NOT FOUND\n\n'+ url);
        },
        readFile: function(req, res, filePath) {
            fs.readFile(filePath, {encoding: 'utf8'}, function(err, content) {
                if (err) return handleError(err);

                extension = filePath.split('.').pop();

                res.writeHead(200, {
                    'Content-Type'  : mime[extension],
                    'Content-Length': content.length
                });
                res.write(content);
                res.end();
                console.log('200', req.method, url);
            });
        }
    }
})();
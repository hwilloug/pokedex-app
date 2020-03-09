const fs = require('fs');

module.exports = {
  requestListener: (req, res) => {
    fs.readFile('./index.html',  'utf-8', (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write(`${err}`);
        res.end();
      } else {
        switch(req.url) {
          case './style.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            break;
          default:
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
        }
        res.end();
      }
    })
  }
}

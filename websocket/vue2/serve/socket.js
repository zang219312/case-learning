const ws = require('nodejs-websocket');

const port = '5555';
const hostName = '';
const wsService = ws.createServer((conn) => {
  console.log('new connection');
  conn.on('text', (str) => {
    console.log('Received ' + str);
    conn.sendText(str.toUpperCase() + '!!!');
  });
  conn.on('close', (code, reason) => {
    console.log('Connection closed');
  });
  conn.on('error', (code, reason) => {
    console.log('异常关闭', code, reason);
  });
});

wsService.listen(port, hostName, () => {
  console.log('run ');
});

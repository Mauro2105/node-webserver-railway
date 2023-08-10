const http = require('http');

http.createServer( (rep, res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write( 'id, nombre\n');
    res.write( '1,  Mauricio\n');
    res.write( '2, Maria\n');
    res.write( '3, Daniel\n');
    res.write( '4, Camilo\n');
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto: ', 8080);

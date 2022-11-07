let express = require("express");

let app = express();
// esta es la línea que le dice al servidor utilizar la carpeta "/estático" para el contenido estático
app.use(express.static(__dirname + "/static"));
// dos guion bajo antes de dirname
// intenta apuntar __dirname utilizando console.log para ver lo que y por qué lo usamos


app.get('/', function(request, response) {
    response.send("<h1>hello express</h1>");
})

app.listen(8000, function() {
    console.log ("listening in port 8000");
})

// Esto establece la ubicación donde Express buscará por vistas EJS
app.set('views', __dirname + '/views'); 
// Ahora establezcamos el motor de vista para que Express sepa que estamos usando EJS al contrario de otro motor de plantilla como Jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // datos del usuario codificados
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

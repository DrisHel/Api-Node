const bodyParser = require('body-parser');
const express  = require ('express');
const app = express();

app.use(bodyParser.json()); //envia a requisiçao

app.use(bodyParser.urlencoded({extended:false})); // entender parametros

/*app.get('/',(req,res)=>{    //rota req=dados da requisiçao, parametros e token, res= é objeto para resposta ao usuario
    res.send('ok');
})
*/

require ('./controllers/authController') (app);

app.listen(3000);


//
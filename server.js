//express
const express = require('express');
const app = express();
// rotas (importa rotas)
const authRoutes = require('./Routes/Config/auth-routes');
const clientRoutes = require('./Routes/Config/client-routes')
// passport (importa passport)
const passport = require('passport')

const cors = require('cors');
//configuração do passport (importa estratégia passport)
const passportSetup = require('./Config/passport-setup');
//databank
const mongoose = require('mongoose');
//local keys
const keys = require('./Config/keys');
//cookie session
const cookieSession = require('cookie-session')

const path = require('path');

const PORT = process.env.PORT || 5000;


app.use(cors());


app.set('view engine', 'ejs')


app.use(cookieSession({
    maxAge: 120000,
    keys: [keys.session.cookieKey]
}));

app.use(passport.initialize())
app.use(passport.session())

//Connect to mongoDB
mongoose.connect(keys.mongodb.dbURI);


//serve reactapp static
app.use(express.static(path.join(__dirname, 'client', 'build')))



// Client routes
app.use('/home', clientRoutes)

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client' , 'build', 'index.html'))
})



//Oauth routes
app.use('/auth', authRoutes)


//Success connexion message
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
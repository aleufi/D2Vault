//express
const express = require('express');
const app = express();
// rotas (importa rotas)
const authRoutes = require('./Routes/auth-routes');
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
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(passport.initialize())
app.use(passport.session())

//Connect to mongoDB
mongoose.connect(keys.mongodb.dbURI);

//server reactapp
app.use(express.static(path.join(__dirname, 'client', 'build')))



// Client routes
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client' , 'build', 'index.html'))
})
app.get('/', (req, res) => {
    res.json({oba: "oba"});
});

//Oauth routes
app.use('/auth', authRoutes)


//Success message
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
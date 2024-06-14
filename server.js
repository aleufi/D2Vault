//express
const express = require('express');
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

const app = express();
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

// Home route
app.get('/', (req, res) => {
    res.json({ "mensagem": "Home do Servidor" });
});

//Oauth routes
app.use('/auth', authRoutes)


//Success message
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
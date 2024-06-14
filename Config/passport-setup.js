const passport = require('passport');
const BungieStrategy = require('passport-bungie');
const keys = require('./keys');
const User = require('../models/user-model');


passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) =>{
    User.findById(id).then((user) =>{
        done(null, user)
    })
})


passport.use(
    //primeira run
    new BungieStrategy({
        clientID: keys.bungie.clientID,
        callbackURL: 'https://useful-multiply-turkey.ngrok-free.app/auth/bungie/redirect',
        customHeaders: { 'X-API-KEY': keys.bungie.APIkey },
    },
    //segunda run
    (accessToken, refreshToken, profile, done) => {
        
        //Busca por usuário no bd

        User.findOne({BungieMembershipID: profile.membershipId})
        .then((currentUser) => {
            if(currentUser){

                console.log('Usuário é: ' + currentUser);
                done(null, currentUser);

            }else{
                
                //Cria novo usuário caso não exista
                
                new User({
                    BungieUniqueName: profile.uniqueName,
                    BungieDisplayName: profile.displayName,
                    BungieGlobalDisplayNameCode: profile.destinyMemberships[0].bungieGlobalDisplayNameCode,
                    BungieMembershipID: profile.membershipId,
                    
                    destinyDisplayName: profile.destinyMemberships[0].displayName,
                    destinyMembershipID: profile.destinyMemberships[0].membershipId,
                    destinyMembershipType: profile.destinyMemberships[0].membershipType
                })
                .save()
                .then((newUser) => {
                    console.log('Novo Usuário Criado: ' + newUser);
                    done(null, newUser);
                })
                
            }
        })
        
    })
)

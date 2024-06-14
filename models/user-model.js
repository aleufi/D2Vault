const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    BungieUniqueName: String,
    BungieDisplayName: String,
    BungieGlobalDisplayNameCode: String,
    BungieMembershipID: Number,
    
    destinyDisplayName: String,
    destinyMembershipID: String,
    destinyMembershipType: Number
})

const User = mongoose.model('usuario', userSchema);

module.exports = User;
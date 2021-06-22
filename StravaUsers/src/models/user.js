const User = {
    'email' : { type: String, index: true },
    'username' : { type: String },
    'gender' : { type: String },
    'biography' : { type: String },
    'accountType' : { type: String },
    'birthdate' : { type: Date },
    'location' : { type: String },
    'height' : { type: Number },
    'weight' : { type: Number },
    'privacy' : { type: String },
    'equipment' : { type: String },
    'notification' : { type: Boolean }
}

module.exports = User
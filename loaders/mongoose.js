const mongoose = require('mongoose')
// Ajouter le path du fichier .env
require('dotenv').config({ path: '../config/.env' });


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/${process.env.DB_HOST}?retryWrites=true&w=majority`,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'))

module.exports = mongoose
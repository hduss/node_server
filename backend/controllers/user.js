const User = require('../../models/user')

exports.login = (req, res) => {
    console.log('je suis login')

}


exports.signUp = (req, res) => {
    console.log('je suis singup')

    console.log('req body => ', req.body)

    delete req.body._id
    const user = new User({...req.body})
    console.log('user body => ', user)

    user.save()
    .then((user) => res.status(200).json({message: 'Usxer : ajouté'}))
    .catch((error) => res.status(400).json({message: error}))

}
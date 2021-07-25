const Book = require('../../models/book')


exports.getAllBooks = (req, res) => {
    const books = Book.find()
    .then((books) => res.status(200).json(books))
    .catch(error => res.status(400).json({message: "Proiblème de récup"}))
}

exports.getBook = (req, res) => {
    const book = Book.findOne({_id: req.params.id})
	.then(book => res.status(200).json(book))
	.catch(error => res.status(404).json({ error }))
}


exports.addBook = (req, res) => {
	delete req.body._id
	console.log('req => ', req.body)
	const book = new Book({...req.body})
	console.log('new Book => ', book)

	book.save()
	.then(() => res.status(201).json({ message: "Objet ${book} enregistré !"}))
	.catch(error => res.status(400).json({ error }))

}


exports.modifyBook = (req, res, next) => {
	Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
	  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
	  .catch(error => res.status(400).json({ error }))
  }


exports.deleteBook = (req, res) => {
	Book.deleteOne({ _id: req.params.id })
	.then(() => res.status(200).json({ message: 'Objet supprimé !'}))
	.catch(error => res.status(400).json({ error }))

}



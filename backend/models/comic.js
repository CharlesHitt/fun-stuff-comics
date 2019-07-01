const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comicSchema = new Schema({
    title: String,
    issue: Number,
    mainCharacters: String,
    publisher: String,
    writers: String,
    artists: String,
    releaseDate: Number,
    numberOfPages: Number,
    maturityLevel: String,
    genre: String,
    description: String,
    price: Number,
    image_url: String,
    sub:{
        type: Schema.Types.ObjectId,
        ref: 'customer'
    }
})

const Comic = mongoose.model('comic', comicSchema)
module.exports = Comic
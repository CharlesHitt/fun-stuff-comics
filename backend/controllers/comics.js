const Comic = require('../models/comic')
const Customer = require('../models/customer')

module.exports = {
    index: async (req,res,next) => {
        const comics = await Comic.find({})
        res.status(200).json(comics)
    },

    newComic: async (req,res,next) => {
        const sub = await Customer.findById(req.value.body.sub)
        const newComic = req.value.body
        delete newComic.sub
        const comic = new Comic(newComic)
        comic.sub = sub
        await comic.save()
        sub.comics.push(comic)
        await sub.save()
        res.status(200).json(comic)
    },

    getComic: async (req,res,next)=>{
        const comic = await Comic.findById(req.value.params.comicId)
        res.status(200).json(comic)
    },

    replaceComic: async (req,res,next)=>{
        const { comicId } = req.value.params
        const newComic = req.value.params
        const result = await Comic.findByIdAndUpdate(comicId, newComic)
        res.status(200).json({ success: true })
        
    },
    
    updateComic: async (req,res,next)=>{
        const { comicId } = req.value.params
        const newComic = req.value.params
        const result = await Comic.findByIdAndUpdate(comicId, newComic)
        res.status(200).json({ success: true })
    },

    deleteComic: async (req,res,next)=>{
        const { comicId } = req.value.params
        const comic = await Comic.findById(comicId)
        if(!comic){
            return res.status(404).json({ error: 'Comic does not exist' })
        }
        const subId = comic.sub
        const sub = await Customer.findById(subId)
        await comic.remove()
        sub.comics.pull(comic)
        await sub.save()
        res.status(200).json({ success:true })
    }
}
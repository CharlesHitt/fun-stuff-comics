const router = require('express-promise-router')()

const ComicsController = require('../controllers/comics')
const {
    validateBody,
    validateParam,
    schemas
} = require('../helpers/routeHelpers')

router.route('/')
.get(ComicsController.index)
.post(validateBody(schemas.comicSchema),ComicsController.newComic)

router.route('/:comicId')
.get(validateParam(schemas.idSchema, 'comicId'),ComicsController.getComic)
.put([validateParam(schemas.idSchema, 'comicId'),
    validateBody(schemas.putComicSchema)],
    ComicsController.replaceComic)
.patch([validateParam(schemas.idSchema, 'comicId'),
    validateBody(schemas.patchComicSchema)],
    ComicsController.updateComic)
.delete(validateParam(schemas.idSchema, 'comicId'),
    ComicsController.deleteComic)

module.exports = router
const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();

const CustomersController = require('../backend/controllers/customers');

const { validateParam, validateBody, schemas } = require('../backend/helpers/routeHelpers')

router.route('/')
.get(CustomersController.index)
.post(validateBody(schemas.customerSchema),CustomersController.newCustomer);

router.route('/:customerId')
.get(validateParam(schemas.idSchema, 'customerId'), CustomersController.getCustomer)
.put([validateParam(schemas.idSchema, 'customerId'),
    validateBody(schemas.customerSchema)],
    CustomersController.replaceCustomer)
.patch([validateParam(schemas.idSchema, 'customerId'),
    validateBody(schemas.customerOptionalSchema)],
    CustomersController.updateCustomer)

router.route('/:customerId/comics')
.get(validateParam(schemas.idSchema, 'customerId'), CustomersController.getCustomerComics)
.post([validateParam(schemas.idSchema, 'customerId'),
    validateBody(schemas.customerComicSchema)],
    CustomersController.newCustomerComic)
module.exports = router;
const Customer = require('../models/customer');
const Comic = require('../models/comic');

module.exports ={
    index: async (req,res,next)=>{
        const customers = await Customer.find({});
        res.status(200).json(customers);
    },
    newCustomer: async (req,res,next)=>{
        const newCustomer = new Customer(req.body);
        const customer = await newCustomer.save();
        res.status(201).json(customer);
    },
    getCustomer: async (req,res,next)=>{
        const { customerId } = req.params;
        const customer = await Customer.findById(customerId);
        res.status(200).json(customer);
    },
    replaceCustomer: async (req,res,next)=>{
        const { customerId } = req.params;
        const newCustomer = req.value.body;
        const result = await Customer.findByIdAndUpdate(customerId, newCustomer);
        res.status(200).json({ success: true })
    },
    updateCustomer: async (req,res,next)=>{
        //req.body may contain any number of fields
        const { customerId } = req.value.params;
        const newCustomer = req.value.body;
        const result = await Customer.findByIdAndUpdate(customerId, newCustomer);
        res.status(200).json({ success: true })
    },
    getCustomerComics: async (req,res,next)=>{
        const { customerId } = req.value.params;
        const customer = await Customer.findById(customerId).populate('comics')
        res.status(200).json(customer.comics)
    },
    newCustomerComic: async (req,res,next)=>{
        const { customerId } = req.value.params;
        //create new comic
        const newComic = new Comic(req.value.body)
        //get user
        const customer = await Customer.findById(customerId)
        // assign customer as comic sub
        newComic.sub = customer
        //save the comic
        await newComic.save()
        // add comic to customers comic array
        customer.comics.push(newComic._id)
        // save user 
        await customer.save()
        res.status(201).json(newComic)
    }
};
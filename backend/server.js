const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://charles:Geyer1015@cluster0-gainp.mongodb.net/test?retryWrites=true&w=majority')

const app = express();
app.use(helmet())
app.use(cors())

//Routes
const customers = require('./routes/customers')
const comics = require('./routes/comics')



// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

// Routes
app.use('/customers', customers)
app.use('/comics', comics);
//serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(_dirname,'client','build','index.html'))
    })
 }

// Catch 404 errors and forward them to error handler
app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})
// Error handler function
app.use((err, req, res, next)=>{
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    //Respond to Client
    res.status(status).json({
        error:{
            message: error.message
        }
    });
    // Respond to Terminal
    console.error(err);
})

// Start Server
const port = app.get('port') || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
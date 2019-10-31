var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userLoginsRouter = require('./routes/userLogins');
var eventsRouter = require('./routes/events');
var eventcollectionsRouter = require('./routes/eventCollections');
var loansRouter = require('./routes/loans');
var loan_installment_calculationsRouter = require('./routes/loan_installment_calculations');
var user_typesRouter = require('./routes/user_types');
var document_typesRouter = require('./routes/document_types');
var savingsRouter = require('./routes/savings');
var savingwithdrawsRouter = require('./routes/savingwithdraws');
var membermoneylogsRouter = require('./routes/membermoneylogs');
var userdocumentsRouter = require('./routes/user_documents');
var userdocumentfilesRouter = require('./routes/user_document_files');
var loan_paymentsRouter = require('./routes/loan_payments');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/event-collections', eventcollectionsRouter);
app.use('/loans', loansRouter);
app.use('/loan-installment-calculations', loan_installment_calculationsRouter);
app.use('/user-types', user_typesRouter);
app.use('/document-types', document_typesRouter);
app.use('/savings', savingsRouter);
app.use('/saving-withdraws', savingwithdrawsRouter);
app.use('/member-money-logs', membermoneylogsRouter);
app.use('/user-document-files',userdocumentfilesRouter);
app.use('/user-documents',userdocumentsRouter);
app.use('/users', usersRouter);
app.use('/user-login', userLoginsRouter);
app.use('/loan-payments', loan_paymentsRouter);


module.exports = app;

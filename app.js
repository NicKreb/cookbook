const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

const dbURI = 'mongodb+srv://KrebBlogger69:Osias_ess7@nickrebcluster.a1xqyxk.mongodb.net/KrebCookbook?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(5760))
    .then(console.log('DB access Granted'))
    .catch((err) => {
        console.log(err)
    })

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/recipes')
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Me'});
})

app.use('/recipes', recipeRoutes)

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})
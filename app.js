const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const path = require('path')
const ejsMate = require('ejs-mate')
const Lawyer = require('./models/lawyers');
let bodyParser = require('body-parser')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/wakaalat-on-web');
}

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended : true}))

app.get('/' , (req , res) => {
    res.render('home')
})

app.get('/about' , (req , res) => {
  res.render('about')
})

app.get('/blogs' , (req , res) => {
  res.render('blogs')
})

app.get('/findalawyer' , (req , res) => {
  res.render('findalawyer')
})


app.get('/lawyers/banklaw' , (req , res) => {
  res.render('lawyers/banklaw')
})


app.get('/lawyers/CriminalDefense' , (req , res) => {
  res.render('lawyers/CriminalDefense')
})

app.get('/lawyers/estate' , (req , res) => {
  res.render('lawyers/estate')
})

app.get('/lawyers/family' , (req , res) => {
  res.render('lawyers/family')
})

app.get('/lawyers/iplaw' , (req , res) => {
  res.render('lawyers/iplaw')
})

app.get('/lawyers/laborlaw' , (req , res) => {
  res.render('lawyers/laborlaw')
})

app.get('/lawyers/pilaw' , (req , res) => {
  res.render('lawyers/pilaw')
})

app.get('/lawyers/taxlaw' , (req , res) => {
  res.render('lawyers/taxlaw')
})


app.get('/wantalawyer' , (req , res) => {
  res.render('wantalawyer')
})

app.get('/lawyerRegistrationForm' , (req , res) => {
  res.render('lawyerRegistrationForm')
})

app.post('/lawyerRegistrationForm' , async(req , res) => {
  const lawyer = new Lawyer(req.body.lawyer)
  await lawyer.save()
  res.redirect('/')
})


app.get('/loginSignup' , (req , res) => {
  res.render('loginSignup')
})


app.listen(3000 , () => {
    console.log('Serving on Port 3000')
})

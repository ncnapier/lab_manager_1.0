//const { response } = require('express')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
//const dataCollection = db.collection('quotes')
//const db = MongoClient.connect(`mongodb+srv://nattydevs:%2321Reipan@cluster0.u4c49.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true}).db('new-database')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set('view engine', 'ejs')

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port`)
})
 MongoClient.connect(`mongodb+srv://nattydevs:%2321Reipan@cluster0.u4c49.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true})
       .then(client => {
            const db = client.db('new-database')
            const dataCollection = db.collection('quotes')
         })
      
// app.post('/chat', (req, res) => {
//     dataCollection.insertOne(req.body)
//         .then(result => {
//             res.redirect('/')
//             res.json('quotes')
//             })
//         })
app.get('/', (req, res)=> {
    //db.collection('quotes').find().toArray()
    //.then(results => {
                         
                       // res.json(results)
                        
                     res.render('index.ejs')//, {quotes: results})
    

})
//})
// app.get('/instrument.html', (req, res)=> {
//     res.sendFile(__dirname + '/instrument.html')
    
// })


// app.get('/css/style.css', function(req, res) {
//     res.sendFile(__dirname + "/css/" + "style.css");
// })
// app.get('/js/main.js', (req, res)=>{
// res.sendFile(__dirname + "/js/" + "main.js")
// })


// app.post('/chat', (req, res) => {
//     dataCollection.insertOne(req.body)
//     .then(result => {
//         res.redirect('/')
//         res.json('quotes')
//     })
   
// })


     
      

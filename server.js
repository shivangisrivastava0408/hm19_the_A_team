const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db.js');
const app            = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes')(app, {});
app.listen(port, () => {
    console.log('we are live on ' + port);
});

MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) =>{
    if (err) return console.log(err)

    database   = client.db(db.DB_NAME);
    collection = database.collection("portal");
    var dbo    = {name: "sarthak",title: "this is a title"};
    console.log("connected to database   : " + db.DB_NAME);
    collection.insertOne(dbo, function(err, res) {
        if (err) return console.log(err);
        console.log("this is amazing");
    })
    // console.log(collection);
})
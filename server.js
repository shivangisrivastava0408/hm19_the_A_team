const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db.js');
const app            = express();
const DB_NAME        = "hm19_A" ;
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes')(app, {});
app.listen(port, () => {
    console.log('we are live on ' + port);
});

MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) =>{
    if (err) return console.log(err)

    database   = client.db(DB_NAME);
    collection = database.collection("portal");
    console.log("connected to database   : " + DB_NAME   );
    console.log("connected to collection : " + collection);
    // const portal = portal.db("note-api")
    // require("./app/routes")(app, database);

    // app.listen(port, () => {
    //     console.log("we are live on " + port);
    // });
})
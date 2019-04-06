module.exports = function(app ,client){
    const collection = 
    app.post('/notes', (req, res) => {
        const note = {text: req.body.body, title: req.body.title};
        client.collection('notes').insert(note, (err, result) => {
          if (err){
            res.send({ 'error': 'an error has occured'})
          }
          else {
            res.send(reesult.ops[0]);
          }
        })
      });
};
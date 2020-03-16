const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8082;
const mongoose = require('mongoose');

const Dietician = mongoose.model('Dietician', {name: String});

mongoose.connect('mongodb+srv://andywilliams:ZJ5euFl9WWV7ddOW@thehealthytheory-mwsqp.azure.mongodb.net/healthytheory?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', function(req,res){
    res.send("Hello");
});

app.get('/getDietician', async function(req,res){
    try{
        var dietician = await Dietician.find()
        res.send(dietician)
    } catch(error){
        res.send({error: error.message});
    }
});

app.get('/addDietician', function(req,res){
    const dietician = new Dietician({name:'tom'});
    dietician.save().then(()=> console.log('added'));
    res.send(dietician)
});


// app.listen(port, () => console.log(`Server running on port ${port}`));
const server = http.createServer(app);
server.listen(port);


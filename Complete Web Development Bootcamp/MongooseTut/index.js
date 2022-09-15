//getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dhinakarKart', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   // we're connected!
//   console.log("We are connectd bro..")
// });

var kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting =  "My name is " + this.name
  console.log(greeting);
}


var Kitten = mongoose.model('dhinakarKitty',kittySchema)

var dhinakarKitty = new Kitten({ name: 'dhinakarKitty' });
// console.log(dhinakarkitty.name); // 'Silence'
// dhinakarkitty.speak();

dhinakarKitty.save(function (err, dhinakarKitty) {
  if (err) return console.error(err);
  dhinakarKitty.speak();
});
const express = require('express');
const app = express();
var mysql = require('mysql')
const port = 5000;  



var connection = mysql.createConnection({
  host: 'blogs-comments.cjyyl4sipsn7.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: '123456789',
  database: 'aswetravel'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})


app.get('/blog', (req, res) => {

	connection.query('SELECT * from blog', function(err, rows, fields) {
		if (!err) {
        	res.send(JSON.stringify(rows));
		} else {
      console.log('Error while performing Query.');
      
		}
	});
	
});

app.listen(port, () => console.log(`Server started on port ${port}`));

//exports.create = function(id, blog, date, username, deleted, title ) {
 //   var values = [id, blog, date, username, deleted, title ]
    
 //   db.get().query('INSERT INTO blog (id, blog, date, username, deleted, title) VALUES(?, ?, ?)', values, function(err, result) {
  //    if (err) return done(err)
   //   done(null, result.insertId)
   // })
  //}
 // exports.getAll = function(done) {
  //  db.get().query('SELECT * FROM blog', function (err, rows) {
   //   if (err) return done(err)
  //    done(null, rows)
  //  })
 // }

  connection.query('SELECT * FROM blog', function(err, results) {
    if (err) throw err
    console.log(results[0].id)
    console.log(results[0].title)
    console.log(results[1].username)
    console.log(results[0].username)
    console.log(results[1].id)
    console.log(results[1].title)
  })
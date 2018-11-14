const express = require('express');
const app = express();
var mysql = require('mysql')
const port = 5000;  

app.get('/blog', (req, res) => {
	connection.connect();
	connection.query('SELECT * from WatchesList', function(err, rows, fields) {
		if (!err) {
        	res.send(JSON.stringify(rows));
		} else {
			console.log('Error while performing Query.');
		}
	});
	connection.end();
});

app.listen(port, () => console.log(`Server started on port ${port}`));

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

exports.create = function(id, blog, date, username, deleted, title ) {
    var values = [id, blog, date, username, deleted, title ]
    
    db.get().query('INSERT INTO blog (id, blog, date, username, deleted, title) VALUES(?, ?, ?)', values, function(err, result) {
      if (err) return done(err)
      done(null, result.insertId)
    })
  }
  exports.getAll = function(done) {
    db.get().query('SELECT * FROM blog', function (err, rows) {
      if (err) return done(err)
      done(null, rows)
    })
  }
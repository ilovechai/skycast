import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'ankurdes_krishna',
  password: 'P)o9i8u7y6',
  database: 'ankurdes_skycast'
});
con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

con.end((err) => {

});

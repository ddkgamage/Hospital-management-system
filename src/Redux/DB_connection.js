const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hospital_management_system',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the "hospital" database');
});

// Example API endpoint for user login
app.post('/api/login', (req, res) => {
    // Implement authentication logic and interact with the "hospital" database.
  });

const API_URL = 'http://localhost:3306'; // Update the port if necessary
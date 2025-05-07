const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/createdb', async (req, res) => {
  try {
    const sql = 'CREATE DATABASE IF NOT EXISTS secondDatabase';
    const [result] = await db.query(sql);

    console.log(result);
    res.send('Database created or already exists...');
  } catch (err) {
    console.error('Error creating database:', err);
    res.status(500).send('Error creating database');
  }
});

module.exports = router;
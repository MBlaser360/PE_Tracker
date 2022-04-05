const express = require('express');
const req = require('express/lib/request');
const path = require('path');
const PORT = process.env.PORT || 5432;
const { Pool } = require('pg');


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

express().use(express.static(path.join(__dirname, 'public'))).use(express.json()).use(express.urlencoded({ extended: true})).set('views', path.join(__dirname, 'views')).set('view engine', 'ejs').get('/', async(req, res) => {
  
  try {
    const client = await pool.connect();

    client.release();
		
  } catch (err) {
    console.error(err);
    res.send("Error" + err);
  }
})
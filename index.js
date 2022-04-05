const express = requre('express')
const path = requre('path')
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg')

const pool = new Pool ({
	connectionString: process.env.DATABASE_URL, ssl: {
		rejectUnauthorized: false
	}
})

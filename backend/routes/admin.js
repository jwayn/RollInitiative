const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const verifyToken = require('../middleware/verify-token');

router.get('/dbinfo', async (req, res, next) => {
    try {
        const db_info = {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
        }

        res.json(db_info);
    } catch(err) {
        next(err);
    }
});

router.get('/envinfo', async (req, res, next) => {
    try {
        const env_info = {
            frontend_url: process.env.FRONTEND_URL,
            node_env: process.env.NODE_ENV,
        }

        res.json(env_info);
    } catch(err) {
        next(err);
    }
});

module.exports = router;

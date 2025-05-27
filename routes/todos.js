const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM todos');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { content } = req.body;
  await db.query('INSERT INTO todos (content, completed) VALUES (?, ?)', [content, false]);
  res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
  const { completed } = req.body;
  await db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, req.params.id]);
  res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM todos WHERE id = ?', [req.params.id]);
  res.sendStatus(204);
});

module.exports = router;

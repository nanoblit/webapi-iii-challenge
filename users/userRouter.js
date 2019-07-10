const express = require('express');

const db = require('./userDb');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    const posts = await db.insert(body);
    res.status(201).json(posts);
  } catch (error) {
    res.status(500).json('Internal server error');
  }
});

router.post('/:id/posts', (req, res) => {});

router.get('/', async (req, res) => {
  try {
    const users = await db.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json('Internal server error');
  }
});

// validate with validateUserId
router.get('/:id', async (req, res) => {
  try {
    const { params } = req;
    const user = await db.getById(params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json('Internal server error');
  }
});

router.get('/:id/posts', (req, res) => {});

router.delete('/:id', (req, res) => {});

router.put('/:id', (req, res) => {});

// custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;

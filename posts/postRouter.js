const express = require('express');

const db = require('./postDb');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await db.get();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json('Internal server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { params } = req;
    const post = await db.getById(params.id);
    if (!post) {
      res.status(404).json('Post not found');
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json('Internal server error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { params } = req;
    const postWasRemoved = await db.remove(params.id);
    if (!postWasRemoved) {
      res.status(404).json('Post not found');
    } else {
      res.status(200).json(postWasRemoved);
    }
  } catch (error) {
    res.status(500).json('Internal server error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { params, body } = req;
    const postWasChanged = await db.update(params.id, body);
    if (!postWasChanged) {
      res.status(404).json('Post not found');
    } else {
      res.status(201).json(postWasChanged);
    }
  } catch (error) {
    res.status(500).json('Internal server error');
  }
});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;

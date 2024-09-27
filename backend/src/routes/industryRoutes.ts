import express from 'express';
import { ObjectId } from 'mongodb';
import { db } from '../server';

const router = express.Router();

// GET all industries
router.get('/', async (req, res) => {
  try {
    const industries = await db.collection('industries').find().toArray();
    res.json(industries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching industries', error });
  }
});

// GET a single industry by ID
router.get('/:id', async (req, res) => {
  try {
    const industry = await db.collection('industries').findOne({ _id: new ObjectId(req.params.id) });
    if (!industry) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json(industry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching industry', error });
  }
});

// POST a new industry
router.post('/', async (req, res) => {
  try {
    const result = await db.collection('industries').insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error creating industry', error });
  }
});

// PUT (update) an industry
router.put('/:id', async (req, res) => {
  try {
    const result = await db.collection('industries').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json({ message: 'Industry updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating industry', error });
  }
});

// DELETE an industry
router.delete('/:id', async (req, res) => {
  try {
    const result = await db.collection('industries').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json({ message: 'Industry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting industry', error });
  }
});

export default router;

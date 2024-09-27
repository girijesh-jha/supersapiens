import express from 'express';
import { ObjectId } from 'mongodb';
import { db } from '../server';

const router = express.Router();

// GET all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await db.collection('jobs').find().toArray();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
});

// GET a single job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await db.collection('jobs').findOne({ _id: new ObjectId(req.params.id) });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job', error });
  }
});

// POST a new job
router.post('/', async (req, res) => {
  try {
    const result = await db.collection('jobs').insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
});

// PUT (update) a job
router.put('/:id', async (req, res) => {
  try {
    const result = await db.collection('jobs').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json({ message: 'Job updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating job', error });
  }
});

// DELETE a job
router.delete('/:id', async (req, res) => {
  try {
    const result = await db.collection('jobs').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job', error });
  }
});

export default router;

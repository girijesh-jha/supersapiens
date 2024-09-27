import express from 'express';
import { ObjectId } from 'mongodb';
import { db } from '../server';

const router = express.Router();

// GET all companies
router.get('/', async (req, res) => {
  try {
    const companies = await db.collection('companies').find().toArray();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
});

// GET a single company by ID
router.get('/:id', async (req, res) => {
  try {
    const company = await db.collection('companies').findOne({ _id: new ObjectId(req.params.id) });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching company', error });
  }
});

// POST a new company
router.post('/', async (req, res) => {
  try {
    const result = await db.collection('companies').insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error });
  }
});

// PUT (update) a company
router.put('/:id', async (req, res) => {
  try {
    const result = await db.collection('companies').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json({ message: 'Company updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating company', error });
  }
});

// DELETE a company
router.delete('/:id', async (req, res) => {
  try {
    const result = await db.collection('companies').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company', error });
  }
});

export default router;

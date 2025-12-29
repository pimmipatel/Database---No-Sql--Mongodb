const { ObjectId } = require('mongodb');
const { connectToDatabase, getDb } = require('../models/catModel');

const disp = async (req, res) => {
  await connectToDatabase();
  const db = getDb();
  const collection = db.collection('category');

  const alldata = await collection.find().toArray();
  res.render('category', {
    alldata,
    editcat: '',
  });
};

const ins = async (req, res) => {
  await connectToDatabase();
  const db = getDb();
  const collection = db.collection('category');

  const payload = {
    catname: req.body.catname?.trim(),
  };

  if (req.body.catid) {
    await collection.updateOne(
      { _id: new ObjectId(req.body.catid) },
      { $set: payload }
    );
  } else {
    await collection.insertOne(payload);
  }

  res.redirect('/category');
};

const delData = async (req, res) => {
  await connectToDatabase();
  const db = getDb();
  const collection = db.collection('category');

  await collection.deleteOne({
    _id: new ObjectId(req.params.id),
  });

  res.redirect('/category');
};

const editData = async (req, res) => {
  await connectToDatabase();
  const db = getDb();
  const collection = db.collection('category');

  const editcat = await collection.findOne({
    _id: new ObjectId(req.params.id),
  });

  const alldata = await collection.find().toArray();

  res.render('category', {
    alldata,
    editcat,
  });
};

module.exports = { disp, ins, delData, editData };

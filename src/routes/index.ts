import express from 'express';

import model from '@/models';

const router = express.Router();

router.get('/', async (req, res) => {
  await model.User.find({}).exec(function (err: Error, users: any) {
    console.log('users', users);
    if (err) {
      res.status(500).send({
        message: err.message,
      });
      return;
    }
    res.json({
      data: users,
    });
  });
});

export default router;

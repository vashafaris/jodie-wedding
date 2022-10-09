/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '~/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end('error');
    return;
  }

  const db = await connectToDatabase();

  const comments = db.collection('comments').find({}).toArray();

  res
    .status(20)
    .json({ status: 'Success', message: 'Comment Successfully Inserted', data: comments || [] });
};

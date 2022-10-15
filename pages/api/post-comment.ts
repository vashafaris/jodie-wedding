/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

  db.collection('comments').insertOne(JSON.parse(req.body), function (err: any) {
    if (err) throw err;
  });

  res.status(201).json({ status: 'Success', message: 'Comment Successfully Inserted' });
};

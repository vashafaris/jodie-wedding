/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '~/lib/mongodb';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDatabase();

  const comments = await db
    .collection('comments')
    .find({})
    .sort({ _id: -1 })
    .limit(Number(req.query.limit) || 5)
    .toArray();

  const count = await db.collection('comments').count();

  res.status(200).json({
    status: 'Success',
    message: 'Comments Successfully Fetched',
    results: comments || [],
    count: count || 0,
  });
};

export default handler;

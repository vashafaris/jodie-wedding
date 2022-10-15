/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '~/lib/mongodb';

const handler: NextApiHandler = async (_: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDatabase();

  const comments = await db.collection('comments').find({}).sort({ _id: -1 }).toArray();

  res
    .status(200)
    .json({ status: 'Success', message: 'Comments Successfully Fetched', results: comments || [] });
};

export default handler;

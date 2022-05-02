import mongoose from 'mongoose';

const options: any = {};

export const db = async (url: string) => {
  try {
    mongoose.connect(url, { ...options });
    console.log('Database connected successfully');
  } catch (error: any) {
    console.log('error connecting to mongodb');
  }

  mongoose.connection.on('disconnected', () => console.log('Database disconnected'));
};

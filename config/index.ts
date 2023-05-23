import dotenv from 'dotenv';
import convict from 'convict';
import github from './github';
import notion from './notion';

dotenv.config();

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  github,
  notion,
});

config.validate({ allowed: 'strict' });

export default config;

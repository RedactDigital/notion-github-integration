import { Client } from '@notionhq/client';
import config from '../../config';

export default new Client({
  auth: config.get('notion.token'),
});

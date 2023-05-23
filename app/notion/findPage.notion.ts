import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import notion from '../util/notion.util';

export default async (githubNumber: number): Promise<PageObjectResponse | null> => {
  const pages = await notion.databases.query({
    /* eslint-disable */
    database_id: '4e7dab0e454845569857cbad093e2d59',
    filter: {
      property: 'Github Number',
      number: {
        equals: githubNumber,
      },
    },
    /* eslint-enable */
  });

  if (pages.results.length === 1) return pages.results[0] as PageObjectResponse;
  if (pages.results.length > 1) throw new Error('More than one page found with the same Hubspot ID');
  return null;
};

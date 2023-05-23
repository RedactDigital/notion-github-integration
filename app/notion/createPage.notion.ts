import { PageData } from '../interfaces/PageData.interface';
import notion from '../util/notion.util';

export default async ({ name, status, githubNumber, githubIssue, githubRepo, people }: PageData): Promise<boolean> => {
  try {
    const newPage = await notion.pages.create({
      /* eslint-disable */
      parent: {
        database_id: '4e7dab0e454845569857cbad093e2d59',
      },
      properties: {
        Name: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: name,
              },
            },
          ],
        },
        Assignee: {
          type: 'people',
          people,
        },
        Status: {
          type: 'select',
          select: {
            name: status,
          },
        },
        'Github Number': {
          type: 'number',
          number: githubNumber,
        },
        'Github Issue': {
          type: 'url',
          url: githubIssue,
        },
        'Github Repository': {
          type: 'url',
          url: githubRepo,
        },
      } as any,
      /* eslint-enable */
    });

    if (newPage) {
      console.log(`Created new page: ${name}`);
      return true;
    }
    throw new Error('Error creating page');
  } catch (error) {
    throw error;
  }
};

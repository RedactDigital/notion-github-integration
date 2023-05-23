import { PageData } from '../interfaces/PageData.interface';
import notion from '../util/notion.util';

export default async (pageId: string, { name, status, githubNumber, githubIssue, githubRepo, people }: PageData): Promise<boolean> => {
  try {
    const res = await notion.pages.update({
      /* eslint-disable */
      page_id: pageId,
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
          people: people || [],
        },
        Status: {
          type: 'select',
          select: {
            name: status || 'Backlog',
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

    if (res) return true;
    throw new Error('Error updating page');
  } catch (error) {
    throw error;
  }
};

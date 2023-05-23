import { UserObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export interface PageData {
  name: string;
  status?: 'Backlog' | 'In Progress' | 'Testing' | 'Closed' | 'Missing Information' | 'Icebox';
  people?: UserObjectResponse[];
  description?: string;
  githubNumber: number;
  githubIssue: string;
  githubRepo: string;
}

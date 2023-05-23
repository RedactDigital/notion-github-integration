import { UserObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import notionUtil from '../util/notion.util';

export default async (names: string[]): Promise<UserObjectResponse[]> => {
  const notionUsers = await notionUtil.users.list({});

  const usersToReturn = [];
  for (const user of names) {
    const notionUser = notionUsers.results.find((u) => u.name && u.name.includes(user));
    if (notionUser) usersToReturn.push(notionUser);
  }

  return usersToReturn;
};

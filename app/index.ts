import { CronJob } from 'cron';
import findUsersNotion from './notion/findUsers.notion';
import { PageData } from './interfaces/PageData.interface';
import findPageNotion from './notion/findPage.notion';
import updatePageNotion from './notion/updatePage.notion';
import Github from './util/github.util';
import createPageNotion from './notion/createPage.notion';
import { repeat } from './util/cron.util';

const getFromGithub = async () => {
  const github = new Github({ repo: 'vpm-solutions/api' });

  const data = await github.getIssues();

  for (const d of data) {
    const issue: PageData = {
      name: d.title,
      githubNumber: d.number,
      githubIssue: d.url,
      githubRepo: d.repository_url,
    };

    // Manage Status
    if (d.milestone) issue.status = d.milestone.title as PageData['status'];
    if (d.state === 'closed') issue.status = 'Closed';

    // Description
    if (d.body) issue.description = d.body;

    // People
    if (d.assignees) {
      for (const person of d.assignees.map((assignee: any) => assignee.login)) {
        const githubUser = await github.getUsers(person);
        issue.people = [...(await findUsersNotion(githubUser.login))];
      }
    }

    const pageExists = await findPageNotion(issue.githubNumber);
    if (pageExists) await updatePageNotion(pageExists.id, issue);
    else await createPageNotion(issue);
  }
};

(async () => {
  new CronJob(await repeat.everyMinute('5'), getFromGithub);
})();

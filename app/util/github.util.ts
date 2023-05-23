import config from '../../config';

export default class Github {
  declare url: string;

  declare headers: { [key: string]: string };

  declare repo: string;

  constructor({ repo }: { repo: string }) {
    this.url = 'https://api.github.com';
    this.headers = {
      /* eslint-disable */
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${config.get('github.token')}`,
      /* eslint-enable */
    };
    this.repo = repo;
  }

  async getIssues() {
    const res = await fetch(`${this.url}/repos/${this.repo}/issues`, {
      method: 'GET',
      headers: this.headers,
    });
    const data = await res.json();
    return data;
  }

  async getUsers(username: string) {
    const res = await fetch(`${this.url}/users/${username}`, {
      method: 'GET',
      headers: this.headers,
    });
    const data = await res.json();
    return data;
  }
}

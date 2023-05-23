/* eslint-disable */
export interface GithubIssue {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: GithubUser;
  labels: {
    id: number;
    node_id: string;
    url: string;
    name: string;
    description: string;
    color: string;
    default: true;
  }[];
  milestone: {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    node_id: string;
    number: number;
    state: string;
    title: string;
    description: string;
    creator: GithubUser;
    open_issues: number;
    closed_issues: number;
    created_at: Date;
    updated_at: Date;
    closed_at: Date;
    due_on: Date;
  };
  assignee: GithubUser;
  assignees: GithubUser[];
  comments: number;
  pull_request: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
  created_at: Date;
  updated_at: Date;
}

export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: 'User';
  site_admin: boolean;
};

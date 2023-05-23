export default {
  token: {
    doc: 'The Github API token.',
    format: String,
    default: '',
    env: 'GITHUB_TOKEN',
    sensitive: true,
  },
};

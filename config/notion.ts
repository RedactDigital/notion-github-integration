export default {
  token: {
    doc: 'The Notion API token.',
    format: 'String',
    default: '',
    env: 'NOTION_TOKEN',
    sensitive: true,
  },
};

module.exports = {
  hooks: {
    'pre-commit': 'export DEBUG=lint-staged* && lint-staged',
  },
};

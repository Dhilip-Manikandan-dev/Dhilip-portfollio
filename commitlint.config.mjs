const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'refactor',
        'docs',
        'style',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
      ],
    ],
    'header-max-length': [2, 'always', 100],
  },
};

export default Configuration;

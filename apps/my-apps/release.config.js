module.exports = {
  branches: ['main'],
  initialVersion: '2.0.0',
  tagFormat: 'my-apps-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/npm',
  ],
  preset: 'conventionalcommits',
  releaseRules: [
    { type: 'release', release: 'major' },
    { type: 'feature', release: 'minor' },
    { type: 'fix', release: 'patch' },
  ],
};

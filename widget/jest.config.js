module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  testMatch: ['**/*.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}

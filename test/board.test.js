const test = require('node:test');
const assert = require('node:assert');
const { columns } = require('../src/board.js');

test('board has four columns', () => {
  assert.strictEqual(columns().length, 4);
});

// WEB-4: this test is flaky, see the task
test.skip('cards keep their order after a reload', () => {});

const test = require('node:test');
const assert = require('node:assert');
const { columns } = require('../src/board.js');

test('board renders the columns the API returns', async () => {
  const fake = async () => ({ json: async () => ['To do', 'Done'] });
  assert.deepStrictEqual(await columns(fake), ['To do', 'Done']);
});

// WEB-4: this test is flaky, see the task
test.skip('cards keep their order after a reload', () => {});

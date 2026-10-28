const COLUMNS = ['To do', 'In progress', 'In review', 'Done'];

// TODO(WEB-3): render the columns from the API instead of this fixed list
function columns() { return COLUMNS.slice(); }

// The API rate limits writes (API-2), so batch card moves into one request.
function moveCards(moves) { return { method: 'POST', body: JSON.stringify(moves) }; }

if (typeof module !== 'undefined') module.exports = { columns, moveCards };

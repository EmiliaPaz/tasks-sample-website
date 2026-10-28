// WEB-3: the columns now come from the API.
async function columns(fetchFn = fetch) {
  const res = await fetchFn('/api/columns');
  return res.json();
}

// The API rate limits writes (API-2), so batch card moves into one request.
function moveCards(moves) { return { method: 'POST', body: JSON.stringify(moves) }; }

if (typeof module !== 'undefined') module.exports = { columns, moveCards };

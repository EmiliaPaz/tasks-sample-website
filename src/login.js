// WEB-2: the login screen design is in review; keep the markup minimal until it lands.
function renderLogin(root) {
  root.innerHTML = '<form><input name="email"><input name="password" type="password"><button>Log in</button></form>';
}
if (typeof module !== 'undefined') module.exports = { renderLogin };

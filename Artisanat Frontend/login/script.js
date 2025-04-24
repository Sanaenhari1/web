document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Simple check (replace with real validation)
  if (user === 'admin' && pass === 'maroc123') {
    alert('Connexion réussie !');
  } else {
    alert('Identifiants incorrects');
  }
});

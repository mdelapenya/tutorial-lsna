/**
 * Redirect (if current user exists)
 */

if (WeDeploy.auth(address.auth).currentUser) {document.location.href = './chat.html';}


/**
 * Sign In
 */

var login = document.querySelector('.login');

// Paste Sign In code below //
function signIn() {
    WeDeploy
      .auth(address.auth)
      .signInWithEmailAndPassword(login.email.value, login.password.value)
      .then(function() {
        login.submit.disabled = true;
        login.submit.innerText = 'Loading...';
        document.location.href = './chat.html';
      })
      .catch(function() {
        login.submit.disabled = false;
        login.submit.innerText = 'Sign In';
        alert('Sign-in failed.');
      });
  }
// Paste Sign In code above //
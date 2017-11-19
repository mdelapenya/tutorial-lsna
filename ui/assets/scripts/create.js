/**
 * Redirect (if current user exists)
 */

if (WeDeploy.auth(address.auth).currentUser) {document.location.href = './chat.html';}


/**
 * Create user
 */

var create = document.querySelector('.create');

// Paste Create User code below //
function userCreate() {
    WeDeploy
      .auth(address.auth)
      .createUser({
        name: create.name.value,
        email: create.email.value,
        password: create.password.value,
        color: 'color-' + Math.floor(Math.random() * 19)
      })
      .then(function() {
        create.submit.disabled = true;
        create.submit.innerText = 'Loading...';
  
        WeDeploy
          .auth(address.auth)
          .signInWithEmailAndPassword(create.email.value, create.password.value)
          .then(function() {
            document.location.href = './chat.html';
          })
          .catch(function() {
            alert('Sign-in failed.');
          });
      })
      .catch(function() {
        create.submit.disabled = false;
        create.submit.innerText = 'Create Account';
        alert('Sign-up failed.');
      })
  };
// Paste Create User code above //
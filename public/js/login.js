const loginFormHandler = async (event) => {
    event.preventDefault();

    //collect values from login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //if email and password are a match for the database send a post request to the apiendpoint
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        //if successful post, redirect to the homepage
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};


//collect values from signup form
const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    //if name, email, and password are submitted, send a post request to the API endpoint
    if (name && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      //if successful post, redirect to the homepage
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
};

//event listener for the login form button
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

//event listener for the signup form button
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
//send a post request to the api endpoint
const logout = async () => {
    const resposne = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    //if successful, redirect the browser to the login page
    if (resposne.ok) {
        document.location.replace('/');
    } else {
        alert(resposne.statusText);
    }
};

//event listener for the logout button
document.querySelector('#logout').addEventListener('click', logout);
const newBlogPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    const username = document.querySelector('#username').value.trim();

    if (title && content && username) {
        const response = await fetch(`/api/homepage`, {
            method: 'POST',
            body: JSON.stringify({ title, content, username }),
            headers: { 'Content-type': 'application/json',},
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to create comment');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`api/homepage/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to delete blog post');
        }
    }
};

document.querySelector('.new-blog-post').addEventListener('submit', newBlogPostHandler);

document.querySelector('.blog-del').addEventListener('click', delButtonHandler);
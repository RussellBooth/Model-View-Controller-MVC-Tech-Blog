const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const username = document.querySelector('#comment-name').value.trim();

    if (username && content) {
        const response = await fetch(`/api/dashboard`, {
            method: 'POST',
            body: JSON.stringify({ username, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create comment');
        }
    }
};

document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);

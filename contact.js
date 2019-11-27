async function submitData() {
    const URL = 'https://neobismasterblog.herokuapp.com/post';
    const nameField = document.querySelector('input[type="name"]').value;
    const emailField = document.querySelector('input[type="email"]').value;
    const subjectField = document.querySelector('input[type="text"]').value;
    const messageField = document.querySelector('textarea[type="textarea"]').value;
    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ name: nameField, email: emailField, subject: subjectField, body: messageField }),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));

        alert('Your message was submitted successfully!');

        document.querySelector('input[type="name"]').value = '';
        document.querySelector('input[type="email"]').value = '';
        document.querySelector('input[type="text"]').value = '';
        document.querySelector('textarea[type="textarea"]').value = '';
    } catch (error) {
        console.error('Error:', error);
    }
}
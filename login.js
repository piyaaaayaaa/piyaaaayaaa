const users = [
    { username: 'pylyn', password: '1234' },
    { username: 'alessandra', password: '1111' },
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!'); 
        window.location.href="homepage.html";
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

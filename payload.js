fetch('/profile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'email=test%40test.com'
}).then(r => {
    console.log('profile response:', r.status);
});

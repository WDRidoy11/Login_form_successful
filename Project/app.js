let btn = document.getElementById('btn');
let p = document.querySelector('p');
btn.addEventListener('click', function() {
    let mail = document.getElementById('mail');
    let pword = document.getElementById('pword');
    if (mail.value == 'developersridoy@gmail.com' && pword.value == 2255) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            mail.value = '';
            pword.value = '';
            setTimeout(() => {
                p.innerHTML = 'login successful';
            }, 2000);
            setTimeout(() => {
                p.innerHTML = '';
                location.href = 'https://google.com'
            }, 5000);
        });
    } else {
        alert('Not matching your information');
    };
});
save.addEventListener('click', () => {
    if (login.value.length<7 || login.value.length>15) {
        alert('Логин должен быть от 7 до 15 символов');
    } else if (/[^!@#$%^*A-Z-a-z-0-9]/.test(login.value)) {
        alert('Логин содержит недопустимые символы. Допустимы английские буквы, цифры и спецсимволы !@#$%^*]');
    } else if (password.value.length<7 || password.value.length>15) {
        alert('Пароль должен быть от 7 до 15 символов');
    } else if (!(/[A-Z]/.test(password.value))) {
        alert('Пароль должен содержать английскую букву в верхнем регистре');
    } else if (!(/[a-z]/.test(password.value))) {
        alert('Пароль должен содержать английскую букву в нижнем регистре');
    } else if (!(/[0-9]/.test(password.value))) {
        alert('Пароль должен содержать цифру');
    } else if (!(/[!@#$%^*]/.test(password.value))) {
        alert('Пароль должен содержать спецсимвол !"№;%:?*');
    } else if (/[^!@#$%^*A-Z-a-z-0-9]/.test(password.value)) {
        alert('Пароль содержит недопустимые символы. Допустимы английские буквы, цифры и спецсимволы !"№;%:?*');
    } else if (password.value != repeat.value) {
        alert('Повтор пароля не совпадает');
    } else {
        localStorage.clear();
        localStorage.setItem(login.value, password.value);
        window.location.href = 'login.html';
    }
});

control.addEventListener('click', () => {
    if (password.getAttribute('type') == 'password') {
        control.classList.add('view');
        password.setAttribute('type', 'text');
    } else {
        control.classList.remove('view');
        password.setAttribute('type', 'password');
    }
});

rep.addEventListener('click', () => {
    if (repeat.getAttribute('type') == 'password') {
        repeat.classList.add('view');
        rep.setAttribute('type', 'text');
    } else {
        rep.classList.remove('view');
        repeat.setAttribute('type', 'password');
    }
}); 

generate.addEventListener('click', () => {
    let chars = '!@#$%^&*0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPAASDFGHJKLZXCVBNM';
    let passLength = 10;
    let pass = '';
    for (let i = 0; i<=passLength; i++) {
        let rnd = Math.floor(Math.random()*chars.length);
        pass += chars.slice(rnd, rnd+1);
    }

    password.value = pass;
});
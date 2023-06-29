control.addEventListener('click', () => {
    if (password.getAttribute('type') == 'password') {
        control.classList.add('view');
        password.setAttribute('type', 'text');
    } else {
        control.classList.remove('view');
        password.setAttribute('type', 'password');
    }
});

enter.addEventListener('click', () => {
    if (login.value != localStorage.key(0)) {
        alert('Пользователь не найден');
    } else if (password.value != localStorage.getItem(login.value)) {
        alert('Неверный пароль');
    } else {
        alert('Доступ открыт');
    }
});
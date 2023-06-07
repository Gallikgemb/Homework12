// Задание 2
window.onload = function () {
    let fullName = document.getElementById('input-name');
    fullName.onkeydown = function (e) {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            return false;
        }
    }
    // Задание 3
    let userName = document.getElementById('input-username');
    userName.onkeydown = function (e) {
        if (e.key === '.' || e.key === ',') {
            return false;
        }
    }

    // Задание 4
    let checkbox = document.getElementsByClassName('main-check')[0];
    checkbox.onclick = function () {
        checkbox.checked ? console.log('Согласен') : console.log('Не согласен');
    }

    // Задание 5
    let eMail = document.getElementById('e-mail');
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeat-password');
    let popup = document.getElementById('popup');
    // let registration = document.getElementById('main-btn');
    // registration.addEventListener('click', up);
    // function up() {
    //     if(!fullName.value) {
    //         alert('Заполните поле Full Name');
    //         return;
    //     }
    //     if(!userName.value) {
    //         alert('Заполните поле Your username');
    //         return;
    //     }
    //     if(!eMail.value) {
    //         alert('Заполните поле E-mail');
    //         return;
    //     }
    //     if(!password.value) {
    //         alert('Заполните поле Password');
    //         return;
    //     }
    //     if(password.value.length < 8) {
    //         alert('Пароль должен содержать не менее 8 символов');
    //         return;
    //     }
    //     if(!repeatPassword.value) {
    //         alert('Заполните поле Repeat Password');
    //         return;
    //     }
    //     if(password.value.length !== repeatPassword.value.length) {
    //         alert('Пароли не совпадают,повторите попытку!');
    //         return;
    //     }
    //     if(!checkbox.checked) {
    //         alert('Подтвердите Ваше согласие!');
    //         return;
    //     }
    //     if(fullName.value && userName.value && eMail.value && password.value && repeatPassword.value && checkbox.checked) {
    //         popup.style.display = 'block';
    //     }
    // }
    // function func() {
    //     if(!userName.value) {
    //         alert('Заполните поле Your username');
    //         return;
    //     }
    //     if(!password.value) {
    //         alert('Заполните поле Password');
    //         return;
    //     }
    //     if(password.value.length < 8) {
    //         alert('Пароль должен содержать не менее 8 символов');
    //         return;
    //     }
    //     alert('Добро пожаловать, ' + userName.value + '!');
    // }

    // Вариант №2
    const form = document.querySelector('form');
    form.addEventListener('submit', registration);
    function registration(event) {
        event.preventDefault();
        if(!form[0].value) {
            alert('Enter Full name');
        } else if (!form[1].value) {
            alert('Enter Username');
        } else if(!form[2].value) {
            alert('Enter E-mail');
        } else if(!form[3].value) {
            alert('Enter Password');
        } else if(form[3].value.length < 8) {
            alert('Password must be at least 8 characters long');
        } else if(form[3].value.length !== form[4].value.length) {
            alert('Password mismatch');
        } else if(!form[5].checked) {
            alert('You dont agree to our Terms of Service and Privacy Statement');
        } else {
            form.reset();
            popup.style.display = 'block';
        }
    }

    function auth(event) {
        event.preventDefault();
        if (!form[0].value) {
            alert('Enter Username');
        } else if(!form[1].value) {
            alert('Enter Password');
        } else if(form[1].value.length < 8) {
            alert('Password must be at least 8 characters long');
        } else {
            alert('Welcome, ' + form[0].value + ' !');
            form.reset();
        }
    }


    // Вариант №3
    // let button = document.getElementById('main-btn');
    // const form = document.querySelector('form');
    // form.addEventListener('submit', func);
    // function func(event) {
    //     switch (button.value) {
    //         case 'Sign up':
    //             event.preventDefault();
    //             if (!form[0].value) {
    //                 alert('Enter Full name');
    //             } else if (!form[1].value) {
    //                 alert('Enter Username');
    //             } else if (!form[2].value) {
    //                 alert('Enter E-mail');
    //             } else if (!form[3].value) {
    //                 alert('Enter Password');
    //             } else if (form[3].value.length < 8) {
    //                 alert('Password must be at least 8 characters long');
    //             } else if (form[3].value.length !== form[4].value.length) {
    //                 alert('Password mismatch');
    //             } else if (!form[5].checked) {
    //                 alert('You dont agree to our Terms of Service and Privacy Statement');
    //             } else {
    //                 form.reset();
    //                 popup.style.display = 'block';
    //             }
    //             break;
    // }
    // function f(event) {
    //     switch (button.value) {
    //         case 'Sign in':
    //             event.preventDefault();
    //             if (!form[0].value) {
    //                 alert('Enter Username');
    //             } else if(!form[1].value) {
    //                 alert('Enter Password');
    //             } else if(form[1].value.length < 8) {
    //                 alert('Password must be at least 8 characters long');
    //             } else {
    //                 alert('Welcome, ' + form[0].value + ' !');
    //                 form.reset();
    //             }
    //         break;
    //     }
    //
    // }



    let popupBtn = document.getElementById('popup-btn');
    popupBtn.onclick = function () {
        // registration.removeEventListener("click", up);
        // authorization.addEventListener('click',func);
        popup.style.display = 'none';
        fullName.value = null;
        userName.value = null;
        eMail.value = null;
        password.value = null;
        repeatPassword.value = null;
        mainTitle.innerText = 'Log in to the system';
        name.remove();
        mail.remove();
        repeat.remove();
        checkboxBlock.remove();
        authorization.innerText = 'Sign In';
        document.getElementsByClassName('main-question')[0].remove();
        form.removeEventListener("submit", registration);
        form.addEventListener('submit', auth);
        // form.removeEventListener('submit', func);
        // form.addEventListener('submit', f);
    }

    // Задание 6
    let link = document.getElementById('link');
    let mainTitle = document.getElementById('main-title');
    let name = document.getElementsByClassName('full-name')[0];
    let mail = document.getElementsByClassName('email')[0];
    let repeat = document.getElementsByClassName('repeat')[0];
    let checkboxBlock = document.getElementsByClassName('main-checkbox')[0];
    let authorization = document.getElementsByClassName('form-button')[0];
    link.onclick = function () {
        // registration.removeEventListener("click", up);
        // authorization.addEventListener('click',func);
        mainTitle.innerText = 'Log in to the system';
        name.remove();
        mail.remove();
        repeat.remove();
        checkboxBlock.remove();
        authorization.innerText = 'Sign In';
        document.getElementsByClassName('main-question')[0].remove();
        form.removeEventListener("submit", registration);
        form.addEventListener('submit', auth);
        // form.removeEventListener('submit', func);
        // form.addEventListener('submit', f);
    }

        console.log('Hello world');
}

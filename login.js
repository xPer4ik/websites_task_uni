while (true) {
    var a = confirm("Желаете пройти регистрацию на сайте?")
    if (a) {
        alert("Круто")
        break
    }
    else alert("Попробуй еще раз?");
}

a = prompt("Введи")
if (a == "Админ") {
    a = prompt("Введи")
    if (a == "Я главный") {
        alert("Здравствуйте!")
    }
    else alert("Неверный пароль");
}
else if (a == null || a == "") {
    alert("Отменено")
}
else alert("Я вас не знаю");
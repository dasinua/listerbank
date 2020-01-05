<?php

$email = "webmaster@example.com";
$to = "user@gmail.com";
$sitename = "Lister Bank";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$familiya = trim($_POST["familiya"]);
$name = trim($_POST["name"]);
$otchestvo = trim($_POST["otchestvo"]);
$date = trim($_POST["date"]);
$nomerpasporta = trim($_POST["nomerpasporta"]);
$kemvydan = trim($_POST["kemvydan"]);
$adres1 = trim($_POST["adres1"]);
$adres2 = trim($_POST["adres2"]);
$phone = trim($_POST["phone"]);
$hidden = trim($_POST["hidden"]);

$message = "
Фамилия: $familiya <br>
Имя: $name <br>
Отчество: $otchestvo <br>
Дата рождения: $date <br>
Номер паспорта: $nomerpasporta <br>
Кем выдан: $kemvydan <br>
Адрес прописки: $adres1 <br>
Адрес проживания: $adres2 <br>
Номер телефона: $phone <br>
Заявка: $hidden
";

$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion() . "\r\n" .
	"Content-type: text/html; charset=\"utf-8\"";
	
mail($to, $pagetitle, $message, $headers);



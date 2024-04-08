<?php 

$name = $_POST['name'];
$email = $_POST['phone'];
$question=$_POST['question'];

$subject = 'Заказ из тестового сайта'; // заголовок письмя
$addressat = 'yadimon1989@gmail.com'; // Ваш Электронный адрес
$success_url = 'sps.php';
$message = "Name: {$name}\n Phone: {$phone}\n";
$verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n");
if ($verify == 'true'){
    header('Location: '.$success_url);
    echo '<h1 style="color:green;">Поздравляем! Ваш заказ принят!</h1>';
    exit;
}
else 
    {
    echo '<h1 style="color:red;">Произошла ошибка!</h1>';
    }
?>
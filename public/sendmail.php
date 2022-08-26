<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'php/Exception.php';
   require 'php/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'php/');
   $mail->IsHTML(true);

   // ОТ КОГО ПИСЬМО
   $mail->setFrom('nefedov_it@mail.ru', 'Нефёдов Илья');
   // КОМУ ПИСЬМО
   $mail->addAddress('nefedov_it@mail.ru');
   //ТЕМА ПИСЬМА
   $mail->Subject = 'Письмо из OIL PROMOTION!';

   $body = '<h1>Письмо с OIL PROMOTION!</h1>';

   if(trim(!empty($_POST['name']))) {
      $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
   }

   if(trim(!empty($_POST['email']))) {
      $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
   }

   if(trim(!empty($_POST['phone']))) {
      $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
   }

   if(trim(!empty($_POST['cart0']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart0'].'</p>';
   }

   if(trim(!empty($_POST['cart1']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart1'].'</p>';
   }

   if(trim(!empty($_POST['cart2']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart2'].'</p>';
   }

   if(trim(!empty($_POST['cart3']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart3'].'</p>';
   }

   if(trim(!empty($_POST['cart4']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart4'].'</p>';
   }

   if(trim(!empty($_POST['cart5']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart5'].'</p>';
   }

   if(trim(!empty($_POST['cart6']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart6'].'</p>';
   }

   if(trim(!empty($_POST['cart7']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart7'].'</p>';
   }

   if(trim(!empty($_POST['cart8']))) {
      $body.='<p><strong>Заказ:</strong> '.$_POST['cart8'].'</p>';
   }

   $mail->Body = $body;

   //ОТПРАВЛЕНИЕ
   if (!$mail->send()) {
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);
?>
<?php
   $data_json = file_get_contents('php://input');
   $data = json_decode($data_json);

   $to  = "nilovigorek@yandex.ru";  // Тут ваш элетронный адресс

   $subject = "Бронь"; 

   $message = "<b>Имя:</b> ".$data->firstName."</br>";
   $message .="<b>Телефон:</b> ".$data->phoneNumber."</br>";
   $message .="<b>Кол-во людей:</b> ".$data->number;
   $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
   $headers .= "From: От кого письмо <from@example.com>\r\n"; 
   $headers .= "Reply-To: reply-to@example.com\r\n"; 

   if(mail($to, $subject, $message, $headers)){
      echo $data_json;
   }else{
      echo "123";
   }
?>

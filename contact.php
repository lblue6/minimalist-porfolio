<?php

$destiny = "https://www.lidoazul@gmail.com";


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "Sent  from formulary of contact in localhost";
$messangerComplete = "\n Name: ".$name ."\n" . "Email: " . $email . "\n" . "Message :" . $message;
mail($destiny, $header, $messangerComplete);
header("Location: ../index.php");

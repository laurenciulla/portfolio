<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'lauren.m.ciulla@gmail.com';

$email_body = "Name: $name.\n" . 
				"Email: $email.\n"
				"Message: $message.\n"

$to = 'lauren.m.ciulla@gmail.com';

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n" 

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html")

?>
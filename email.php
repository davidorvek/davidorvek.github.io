<?php
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];        
$email_from = 'davideo23@yahoo.com';
$email_subject = 'New Form Submission';
$email_body = 'You have received an email from $first_name $last_name.\nHere is the message:\n\n$message';
$to = 'orvek.1@osu.edu';
$headers = 'From: $email_from \r\n';
$headers = 'Reply To: $email \r\n';
mail($to,$email_subject,$email_body,$headers);
echo "Thank you for your message! I will contact you as soon as I can" "<a href='index.html'>Home</a>"
?>
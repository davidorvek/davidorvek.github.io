<?php
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$message = $_POST["message"];        
$email_subject = "New Form Submission";
$email_body = "You have received an email from $first_name $last_name.

$message";
$to = "davideo23@yahoo.com";
$headers = "Reply To: $email";
mail($to,$email_subject,$email_body,$headers);
echo "Thank you for your message!";
?>
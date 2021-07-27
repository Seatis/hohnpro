<?php

$postdata = file_get_contents("php://input");

$obj = json_decode($postdata);

foreach($obj as $key=>$value) {
  $$key=$value;
}

$to      = 'vivien.traszer@gmail.com';
$to2     = 'optima866@gmail.com';
$subject = 'Új aktivista';
$message = '<html><body>';
$message .= '<p>Üdvözlöm!</p>';
$message .= '<p>&nbsp;</p>';
$message .= '<p><em>&Uacute;j aktivista jelentkezett.</em></p>';
$message .= '<h3>Adatai:</h3>';
$message .= '<p><u>N&eacute;v:</u> ' . $nev . '</p>';
$message .= '<p><u>C&iacute;m:</u> ' . $cim . '</p>';
$message .= '<p><u>Email:</u> ' . $email . '</p>';
$message .= '<p><u>Telefonsz&aacute;m:</u> ' . $telefonszam . '</p>';
$message .= '<p><u>Miben tud seg&iacute;teni:</u> ' . $reszletek . '</p>';
$message .= '</body></html>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

$headers .= 'From: ujaktivista@hohn.com'       . "\r\n" .
  'Reply-To: ujaktivista@hohn.com' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
mail($to2, $subject, $message, $headers);

$response = new \stdClass();
$response->status = 'OK';

echo json_encode($response);

?>

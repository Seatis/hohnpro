<?php

$postdata = file_get_contents("php://input");

$obj = json_decode($postdata);

foreach($obj as $key=>$value) {
  $$key=$value;
}

//$to      = 'vivien.traszer@gmail.com';
$to      = 'optima866@gmail.com';
//$to2     = 'optima866@gmail.com';
$subject = 'Új aláírás - Stop Orbán! Stop Vécsey!';
$message = '<html><body>';
$message .= '<h3>Üdvözlöm!</h3>';
$message .= '<p>&nbsp;</p>';
$message .= '<h4><em>Stop Orb&aacute;n! Stop V&eacute;csey! >>&nbsp;&nbsp;</em>&Uacute;j al&aacute;&iacute;r&aacute;s &eacute;rkezett.</h4>';
$message .= '<h3>Adatai:</h3>';
$message .= '<p><u>N&eacute;v:</u> ' . $nev . '</p>';
$message .= '<p><u>Ir&aacute;ny&iacute;t&oacute;sz&aacute;m:</u> ' . $iranyitoszam . '</p>';
$message .= '<p><u>Telep&uuml;l&eacute;s:</u> ' . $telepules . '</p>';
$message .= '<p><u>Utca, h&aacute;zsz&aacute;m:</u> ' . $cim . '</p>';
$message .= '<p><u>Email:</u> ' . $email . '</p>';
$message .= '<p><u>Telefonsz&aacute;m:</u> ' . $telefonszam . '</p>';
$message .= '</body></html>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

$headers .= 'From: ujalairas@hohn.com'       . "\r\n" .
  'Reply-To: ujalairas@hohn.com' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
//mail($to2, $subject, $message, $headers);

$response = new \stdClass();
$response->status = 'OK';

echo json_encode($response);

?>

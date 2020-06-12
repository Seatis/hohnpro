<?php
include("mysql_conn_names.php");

$sql="SELECT * FROM hohn_news";
$result = mysqli_query($conn,$sql);
$response = new \stdClass();

if (!$result) {
  $response->status = 'ERROR';
  $response->error = $conn->error;
} else {
  while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
    $rows[] = $row;
  }
  if (isset($rows)) {
//    foreach ($rows as &$value) {
//      $value['datum'] = date("Y-m-d", strtotime($value['datum']));
//    }
    $response->status = 'OK';
    $response->data = $rows;
  } else {
    $response->status = 'ERROR';
    $response->error = 'No match!';
  }
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);

mysqli_close($conn);
?>

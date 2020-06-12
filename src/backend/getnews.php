<?php
include("mysql_conn_names.php");

foreach($_GET as $key => $value) {
  $$key=$value;
}

if (isset($id)) {
  $sql = "SELECT * FROM hohn_news WHERE id='$id'";
  $result = $conn->query($sql);
  $response = new \stdClass();
  if (!$result) {
    $response->status = 'ERROR';
    $response->error = $conn->error;
  } else {
    while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
      $rows[] = $row;
    }
    if (isset($rows)) {
        $response->status = 'OK';
        $response->data = $rows[0];
    } else {
      $response->status = 'ERROR';
      $response->error = "id={$id} not found";
    }
  }
  echo json_encode($response);
}

mysqli_close($conn);
?>

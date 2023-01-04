<?php
$servername = "localhost:3360";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_select_db($conn,"hohnhu_angular");
$conn->set_charset("utf8");
?>

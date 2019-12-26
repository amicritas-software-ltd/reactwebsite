<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if (empty($_POST['name']) && empty($_POST['email']) && empty($_POST['subject']) && empty($_POST['message'])) die();

if ($_POST)
    {
    // set response code - 200 OK
    http_response_code(200);
    $subject = $_POST['subject'];
    $to = "md.sabbir073@gmail.com";
    $from = $_POST['email'];
   
   // data
   $msg = $_POST['name'] . $_POST['subject'];
  // Headers
  $headers = "MIME-Version: 1.0
";
  $headers.= "Content-type: text/html; charset=UTF-8
";
  $headers.= "From: <" . $from . ">";
  mail($to, $subject, $msg, $headers);
  
  // echo json_encode( $_POST );
  echo json_encode(array(
      "sent" => true
  ));
  }
  else
  {
  // tell the user about error
  echo json_encode(["sent" => false, "message" => "Something went wrong"]);
} 
?> 
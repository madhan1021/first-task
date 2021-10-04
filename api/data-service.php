<?php
use task1\Common\GeneralFunctions;
use task1\WorkOrder\OrderInsert;

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__ .'/vendor/autoload.php';

$generalFunction = new GeneralFunctions();
if ($generalFunction->addCORHeaders()) {
  exit();
}
$generalFunction->addGeneralHeaders();

//if(isset($_GET['register'])&& $_GET['register']){
$postData = file_get_contents("php://input");

//$reqData = json_decode($postData,true);-> for associative array
$reqData = json_decode($postData);
//var_dump($reqData);
$dataInsert = new OrderInsert();
//header('Content-Type: application/json');
echo json_encode($dataInsert->insertDataUsingObjects($reqData));
//}



?>

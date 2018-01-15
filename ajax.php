<?php 
$message="";
extract($_GET);
if ($age>18) {
	$message="majeur";
} else {
	$message="mineur";
}
$js = array('age' =>$age,'message'=>$message );
sleep(1);
echo json_encode($js);
 ?>
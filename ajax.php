<?php 
$message="";
extract($_GET);
if ($age>18) {
	$message="majeur";
} else {
	$message="mineur";
}
echo $message;
 ?>
<?php
error_reporting(-1);
ini_set( 'display_errors', 1 );
$dsn = 'mysql:dbname=ID_Pass; host=127.0.0.1';
$usr = 'Yuduki';
$passwd = 'dev';

try {
  $db = new PDO($dsn,$usr,$passwd);
} catch (PDOException $e) {
  exit("データベースに接続できません。::{$e->getMessage()}");
}
return $db;
function Password_authorization(){

}
$user = POST['username'];
echo $user;
$sql = '0';
$Re = mysql_query("SELECT * FROM ID_Pass WHERE ID = $user");
$Answer = mysql_num_rows($Re);
if($Answer){
  Password_authorization();
}else{
  exit("指定されたIDは存在しません。");
}
?>

<?php
$dsn = 'mysql:dbname=ID_Pass; host=127.0.0.1';
$usr = 'Yuduki';
$passwd = '1229';

try {
  $db = new PDO($dsn,$usr,$passwd);
} catch (PDOException $e) {
  exit("データベースに接続できません。::{$e->getMessage()}");
}
return $db;
function Password_authorization(){

}
$user = POST['username'];
echo $user
$sql
$Re = mysql_query("SELECT * FROM ID_Pass WHERE ID = $user");
$Answer = mysql_num_rows($Re);
if($Answer){
  Password_authorization();
}else{
  echo "指定されたユーザー名は存在しません。";
}
?>

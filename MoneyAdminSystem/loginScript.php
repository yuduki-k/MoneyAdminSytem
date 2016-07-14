<?php
  error_reporting(E_ALL | E_STRICT);
  ini_set('display_errors', 'On');
$dsn = 'mysql:dbname=ID_Pass; host=localhost; charset=utf8';
$usr = 'Yuduki';
$passwd = 'dev';
$pdo;
    try{
      $pdo = new pdo ($dsn, $usr , $passwd);
    }catch(PDOException $e){
      var_dump($e->getMessage());
    }
function username_authorization(){
  $name = 0;
  $name = $POST['username'];
  $sql = "select * from ID_Pass where ID='$name'";
  $statement = $pdo->query($sql);
}
  username_authorization();
function password_authentication(){

}
?>

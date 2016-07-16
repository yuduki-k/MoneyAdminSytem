<?php
$dsn = 'mysql:dbname=ID_Pass; host=localhost; charset=utf8';
$usr = 'Yuduki';
$passwd = 'dev';
$db = '0';
    try{
      $db = new PDO ($dsn, $usr , $passwd);
    }catch(PDOException $e){
      var_dump($e->getMessage());
    }
function username_authorization(){
  $name = 0;
  $name = $_POST['username'];
  $sql = "select * from ID_Pass where ID='".$name."'";
  $sst = $db->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CUSOR_SCROLL));
  
}
  username_authorization();
function password_authentication(){

}
?>

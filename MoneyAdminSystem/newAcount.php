<?php
@session_start()
$dsn = 'mysql:dbname=ID_Pass; host=127.0.0.1';
$usr = 'Yuduki';
$passwd = '1229';

try {
  $db = new PDO($dsn,$usr,$passwd);
} catch (PDOException $e) {
  exit("データベースに接続できません。::{$e->getMessage()}");
}
return $db;
?>

l<?php
$dsn = 'mysql:dbname=resource; host=localhost';
$usr = 'Yuduki';
$passwd = 'dev';

	try {
		$db = new PDO($dsn,$usr,$passwd); //conect
		print 'Conect success';
	} catch (PDOException $e) {
		exit("データベースにログインできません。:{$e->getMessage()}");
	}
	return $db;
?>

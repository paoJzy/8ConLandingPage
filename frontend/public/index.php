<?php
require_once '../config/database.php';
require_once '../app/controllers/HomeController.php';

$controller = new HomeController();
$controller->index();

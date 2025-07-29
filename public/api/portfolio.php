<?php
header('Content-Type: application/json');
$dir = __DIR__ . '/../portfolios/';
$slug = $_GET['slug'] ?? '';
$file = $dir . $slug . '/portfolio.json';
if (file_exists($file)) {
    $data = json_decode(file_get_contents($file), true);
    echo json_encode($data);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}

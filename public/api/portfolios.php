<?php
header('Content-Type: application/json');
$dir = __DIR__ . '/../portfolios/';
$result = [];
foreach (glob($dir . '*/portfolio.json') as $json) {
    $data = json_decode(file_get_contents($json), true);
    if ($data) {
        $result[] = [
            'slug' => $data['slug'],
            'name' => $data['name'],
            'type' => $data['type'],
            'description' => $data['description'],
            'thumbnail' => $data['photos'][0] ?? null
        ];
    }
}
echo json_encode($result);

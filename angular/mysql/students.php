<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$host = getenv('DB_HOST') ?: '127.0.0.1';
$database = getenv('DB_NAME') ?: 'jala_learning';
$username = getenv('DB_USER') ?: '';
$password = getenv('DB_PASSWORD') ?: '';

try {
    $pdo = new PDO(
        "mysql:host={$host};dbname={$database};charset=utf8mb4",
        $username,
        $password,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    $statement = $pdo->query('SELECT id, name, track FROM learners ORDER BY name');
    echo json_encode($statement->fetchAll(PDO::FETCH_ASSOC), JSON_THROW_ON_ERROR);
} catch (Throwable $error) {
    http_response_code(500);
    echo json_encode(['error' => 'The learner API is not configured.'], JSON_THROW_ON_ERROR);
}
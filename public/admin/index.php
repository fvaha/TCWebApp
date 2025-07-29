<?php
session_start();

// Load .env file
$env = [];
if (file_exists(__DIR__ . '/.env')) {
    foreach (file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (!strpos($line, '=')) continue;
        list($k, $v) = explode('=', $line, 2);
        $env[$k] = $v;
    }
}
$ADMIN_USER = $env['ADMIN_USER'] ?? 'formel.admin';
$ADMIN_PASS_HASH = $env['ADMIN_PASS_HASH'] ?? '$2y$10$9GmUB2xUX6aQTE3OZEdb1eBwsODrEoQCSdcf5kL6OvAP23aAZMo0O';
$TURNSTILE_SECRET = '0x4AAAAAABhi6Qm5xyBzU2_o6i-858T8ZNM';

$loggedIn = isset($_SESSION['admin']);

// ---- LOGIN ----
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !$loggedIn) {
    // Validate Turnstile
    $turnstile_response = $_POST['cf-turnstile-response'] ?? '';
    $data = [
        'secret' => $TURNSTILE_SECRET,
        'response' => $turnstile_response,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
    ];
    $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $result = curl_exec($ch);
    $verify = json_decode($result, true);
    curl_close($ch);

    if (empty($verify['success'])) {
        $error = "Turnstile verification failed. Please try again.";
    } elseif (
        $_POST['username'] === $ADMIN_USER &&
        password_verify($_POST['password'], $ADMIN_PASS_HASH)
    ) {
        session_regenerate_id(true);
        $_SESSION['admin'] = true;
        $_SESSION['admin_time'] = time();
        header("Location: index.php");
        exit;
    } else {
        $error = "Invalid credentials";
    }
}

// Session timeout (30 minutes)
if ($loggedIn && isset($_SESSION['admin_time']) && (time() - $_SESSION['admin_time'] > 1800)) {
    session_destroy();
    header("Location: index.php?timeout=1");
    exit;
}

if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit;
}

if (!$loggedIn):
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Admin Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Tailwind CDN (for styling to match site) -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
    <style>
        .text-gold { color: #D4AF37; }
        .bg-gold { background-color: #D4AF37; }
        .border-gold { border-color: #D4AF37; }
        .focus\:border-gold:focus { border-color: #D4AF37 !important; }
    </style>
</head>
<body class="bg-black text-neutral-100 font-sans">
    <div class="max-w-lg mx-auto mt-24 p-8 bg-neutral-950 rounded-xl shadow-2xl border border-gold">
        <form method="post" id="login-form">
            <h2 class="text-2xl font-bold text-gold mb-8">Admin Login</h2>
            <?php if (isset($error)) echo "<div class='mb-4 text-red-500'>$error</div>"; ?>
            <?php if (isset($_GET['timeout'])) echo "<div class='mb-4 text-red-500'>Session expired, please login again.</div>"; ?>
            <label class="block mb-4">
                <span class="text-neutral-200">Username</span>
                <input name="username" type="text" class="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:border-gold" required>
            </label>
            <label class="block mb-8">
                <span class="text-neutral-200">Password</span>
                <input name="password" type="password" class="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:border-gold" required>
            </label>
            <div class="mb-8">
                <div class="cf-turnstile" data-sitekey="0x4AAAAAABhi6fRTj2r06bR5"></div>
            </div>
            <button type="submit" class="bg-gold hover:bg-yellow-400 text-black py-2 px-6 rounded-lg font-bold w-full">Login</button>
        </form>
    </div>
</body>
</html>
<?php
exit;
endif;

// --- Portfolio upload handler ---
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $loggedIn && isset($_POST['name'])) {
    $slug = preg_replace('/[^a-z0-9_-]/i', '', strtolower(str_replace(' ', '_', $_POST['name'])));
    $name = $_POST['name'];
    $type = $_POST['type'];
    $desc = $_POST['desc'] ?? '';
    $targetDir = __DIR__ . "/../portfolios/$slug/";
    if (!is_dir($targetDir)) mkdir($targetDir, 0777, true);

    $photos = [];
    if (!empty($_FILES['photos']['name'][0])) {
        foreach ($_FILES['photos']['tmp_name'] as $idx => $tmpName) {
            $photoName = basename($_FILES['photos']['name'][$idx]);
            $targetFile = $targetDir . $photoName;
            move_uploaded_file($tmpName, $targetFile);
            $photos[] = "/portfolios/$slug/$photoName";
        }
    }

    file_put_contents(
        $targetDir . "portfolio.json",
        json_encode([
            "slug" => $slug,
            "name" => $name,
            "type" => $type,
            "description" => $desc,
            "photos" => $photos,
        ], JSON_PRETTY_PRINT)
    );
    $success = "Portfolio uploaded!";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Portfolio Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .text-gold { color: #D4AF37; }
        .bg-gold { background-color: #D4AF37; }
        .border-gold { border-color: #D4AF37; }
        .focus\:border-gold:focus { border-color: #D4AF37 !important; }
        a.logout { float:right; color:#D4AF37; text-decoration:none; margin-top:10px;}
        a.logout:hover { text-decoration:underline; }
    </style>
</head>
<body class="bg-black text-neutral-100 font-sans min-h-screen">
    <div class="max-w-xl mx-auto mt-12 p-8 bg-neutral-950 rounded-xl shadow-2xl border border-gold">
        <a href="?logout=1" class="logout">Logout</a>
        <h2 class="text-2xl font-bold text-gold mb-8">Upload New Portfolio</h2>
        <?php if (isset($success)) echo "<div class='mb-6 text-green-400 font-semibold'>$success</div>"; ?>
        <form method="post" enctype="multipart/form-data">
            <label class="block mb-4">
                <span class="text-neutral-200">Name</span>
                <input name="name" required class="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:border-gold">
            </label>
            <label class="block mb-4">
                <span class="text-neutral-200">Type</span>
                <select name="type" required class="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:border-gold">
                    <option value="">Choose type</option>
                    <option value="Art">Art</option>
                    <option value="Web">Web</option>
                    <option value="Photo">Photo</option>
                    <option value="Design">Design</option>
                    <option value="Programming">Programming</option>
                </select>
            </label>
            <label class="block mb-4">
                <span class="text-neutral-200">Description</span>
                <textarea name="desc" required rows="4" class="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 focus:outline-none focus:border-gold"></textarea>
            </label>
            <label class="block mb-8">
                <span class="text-neutral-200">Photos</span>
                <input name="photos[]" type="file" multiple accept="image/*" class="mt-1 block w-full text-neutral-200">
            </label>
            <button type="submit" class="bg-gold hover:bg-yellow-400 text-black py-2 px-8 rounded-lg font-bold w-full">Upload Portfolio</button>
        </form>
    </div>
</body>
</html>

<?php
$query = [
    'client_id' => '2636',
    'redirect_uri' => 'http://localhost/ExtMake/anithanks.html', // http://example.com/callback
    'response_type' => 'code'    
];


$url = 'https://anilist.co/api/v2/oauth/authorize?' . urldecode(http_build_query($query));

// ...
echo "<a href='$url'>Login with Anilist</a>";
?>

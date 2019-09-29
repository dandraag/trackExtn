//def50200f23298014ddf33b041bc3309ceca5a0d6199365b11a02910d83b685544caf142dc5e7cf0045772b089ef846d8d9a11004c31efd54c8cdfdd1dc790fb6899b54685d24519a94a667e08735fa9e8a6209efb807d7b53232aad71b6a579d9f128370b6941023905e677222f1cdf10dbbe545fb0bbddc7d82aae4a4aa3956754b9e10a62d3c5ed53b6f38366a324f8816e74d25ac3778d414d758b9f3e2cfc2247be0f9058b725cc216778f005cf31b13d0cfa7126c21cc28ca4f4319dcb1e91a5224e429a2b7b7d830c090728afd5151d5fd6438b5eba06004796333e94f2b898bc74d0347fc0b8b166c9a18f8ffe43e22918e038fa7418251c724fd72627ba42a7d3fa0fe4ce6cf078e1c0e30841be63ff9fa07f0ba9a969c6e6eaf65361e0dbbe6c340c975f0f658a2257270637969acd025dda78c1b14adb53f5f0b811da636bab46326162da4f84d9b6608c805bf3863c68cf3202363e4d37131e8aa8ec1d9697ca770be5e868e0edc208e3fdf7596d5f54f8eb6c60be90552e87342bed4bb44ae73ad3878660c1d515
var request = require('request');
​
var options = {
  uri: 'https://anilist.co/api/v2/oauth/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  json: {
    'grant_type': 'authorization_code',
    'client_id': '{2636}',
    'client_secret': '{yyFT3yZ86fnI0cs4nk2DVfzjONtvJmimM7VEtSMw}',
    'redirect_uri': '{https://github.com/dandraag/trackExtn/blob/master/thanksani.html}', // http://example.com/callback
    'code': 'def50200f23298014ddf33b041bc3309ceca5a0d6199365b11a02910d83b685544caf142dc5e7cf0045772b089ef846d8d9a11004c31efd54c8cdfdd1dc790fb6899b54685d24519a94a667e08735fa9e8a6209efb807d7b53232aad71b6a579d9f128370b6941023905e677222f1cdf10dbbe545fb0bbddc7d82aae4a4aa3956754b9e10a62d3c5ed53b6f38366a324f8816e74d25ac3778d414d758b9f3e2cfc2247be0f9058b725cc216778f005cf31b13d0cfa7126c21cc28ca4f4319dcb1e91a5224e429a2b7b7d830c090728afd5151d5fd6438b5eba06004796333e94f2b898bc74d0347fc0b8b166c9a18f8ffe43e22918e038fa7418251c724fd72627ba42a7d3fa0fe4ce6cf078e1c0e30841be63ff9fa07f0ba9a969c6e6eaf65361e0dbbe6c340c975f0f658a2257270637969acd025dda78c1b14adb53f5f0b811da636bab46326162da4f84d9b6608c805bf3863c68cf3202363e4d37131e8aa8ec1d9697ca770be5e868e0edc208e3fdf7596d5f54f8eb6c60be90552e87342bed4bb44ae73ad3878660c1d515', // The Authorization Code received previously
  }
};
​
request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.access_token);
  }
});
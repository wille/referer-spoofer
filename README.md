# Referer Spoofer for Chrome

Simple referer header plugin for Chrome that will set the referer header to the current sites hostname

## How it works

If you visit https://github.com from https://google.com, google will be sent as referer. This plugin only sends 
the refer https://github.com. You will not reveal what site you are coming from. This is better than just 
removing the referer header, as there are some sites that denies access if not a correct referer is set.

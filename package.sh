# cd ..
mkdir packaged

# firefox
cd firefox
zip firefox.xpi ./*
cd ..

mv firefox/firefox.xpi packaged

###

# cd ..

# chrome
cd chrome
zip chrome.zip ./*
cd ..

mv chrome/chrome.zip packaged
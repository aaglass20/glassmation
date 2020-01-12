# Postman Collections

Install Newman and Reporter
* npm install -g newman
* npm install -g newman-reporter-htmlextra

Run Postman with Newman
* newman run cleAPI.json -e CLE.postman_environment.json -r htmlextra
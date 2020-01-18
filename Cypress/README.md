# open cypress
access Cypress folder >
./node_modules/.bin/cypress open

#Install Cucumber/Gherkin 
npm install --save-dev cypress-cucumber-preprocessor

#open
Access cypress dir > run: ./node_modules/.bin/cypress open

or

npx cypress open

#run
Access cypress dir > run: ./node_modules/.bin/cypress run

or 

npx cypress run

#run specific test
./node_modules/.bin/cypress run --spec "cypress/integration/testing/gherkinFeature.feature" --browser chrome

or 

Run from a script in package.json
npm run test

#run by specifc tag
   #One tag
./node_modules/.bin/cypress run -e TAGS=@example
   #Multiple
./node_modules/.bin/cypress run -e TAGS='(@example or @test)'
   #Exclude
./node_modules/.bin/cypress run -e TAGS='not @not_ready'
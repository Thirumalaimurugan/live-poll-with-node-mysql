# Follow the steps to run the application (NP: Internet connection is needed since its using CDN)
1. This application uses Node.js 10.4.1, mysql 5.5.16(Install both)
2. Download the application 
3. Import the mysql data.sql into mysql 
    3.1 Open command prompt on the same location of the root folder of application where app.js file exist 
    3.2 Edit config.js file with the relevant database connection configuration and save it 
4. Type : npm install (node_modules will be created)
5. Run node app using command: node app.js
6. Open browser
7. Open the url : http://localhst:3000 to poll
8. Open the url : http://localhst:3000/admin to view chart
9. Select the polling options by radio button and play with data
10. Run multiple instance on the browser and play with data
11. Each browser will update the data by using the socket push notification without reloading the page
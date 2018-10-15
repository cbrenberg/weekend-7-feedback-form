# Redux Feedback Loop

>"And my last reminder of the day, which is my last reminder of every day, is...?" - Luke


For this assignment, you will be creating a basic feedback form modeled after Prime's system. Feedback is collected over 4 views, and when all steps are complete, the app will save the feedback in a PostgreSQL database. In a separate view, an admin user can see all of the collected feedback. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- How are you feeling today?
- How well are you understanding the content?
- How well are you being supported?
- Any comments you want to leave?

While there is no nav bar, each part of the form is at its own route. Clicking next moves the user to the next step in the process.

When the form is complete, the submission is stored in the database. The user then sees a submission success page.

### DISPLAY FEEDBACK

The existing feedback data can be viewed at the route `/admin`. The most recently added feedback appears at the top of the list. The admin user is able to delete individual feedback items on button press.


## TECHNOLOGIES USED
- React.js
- Redux
- React-redux
- Express
- Node.JS
- Postgres
- React-router
- React-table



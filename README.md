# udemy-application
Fullstack quiz application completed in accordance to Udemy's Web App coding Challenge found here: https://github.com/udemy/coding-challenge.

Link to application: https://udemy-application.herokuapp.com/

Tilts towards front-end side of the spectrum. Implemented on a React frontend using a Node.js to serve a single backend API call. React was used to deliver reusable Question components and Node was used since it's easy and nice to implement with React. I decided to use MongoDB for data storage mainly because it's very compatible with Node and to deal with scaling if needed. The DB structure also doesn't depend on relational requirements and is not transaction based. The application statically serves an HTML page using Express.js which does help by forcing the user to continue on to the next question as backtracking is not supported. 

If I had more time on the project, I'd definitely contribute a question creation form and randomize the set of questions given each time. I'd also like to add a userbase so people can review and see past conducted quizzes. I'd love to add functionality that allows a user to see their previous answers without changing/editing somehow (locking questions after submission). To make these changes, I would first need to make the application routable and create dynamic pages for each purpose, eg: user profile, question creation, etc.


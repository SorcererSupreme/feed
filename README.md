## Instructions for setting it up

1. Check if you have node installed. If not install nodejs and set the env variable.
2. Install all the dependencies on your local machine. To install it run command - npm install
3. go to the folder and start the server. Use command - node server.js
4. Go to _http://localhost:3000/feed.html_ in the browser to see the App.

## For modifying it

For any Modifications, go to the public folder inside and checkout the files there.

1. Part 1 of the Problem can be viewd by opening up the index.html. This was the basic template created using html and css only
2. For Part II, the index.html was modifed as feed.html and react was added.

## Explanation

1. javascript Objects are created inside db.js file. Here you can add all the data which will get reflected inside the application.
2. The main html and css files are feed.html and feed.css which are loaded in the browser first
3. The StoryCard Component is the card component in the news feed. This component references the objects inside the db.js file
4. The Upvote component contains logic for changing the count inside each StoryCard component
5. The Upvote component is than added to the StoryCard component and given the initial count mentioned in the db.js file
6. Finally a map function is used(check feed.html, inside the script tag) to set up a loop for every object inside the db.js file and render it.

## Further Reading

1. javascript basic functions - map, forEach and javascript syntax
2. Reactjs knowledge of state and props and functional components.

### Note : No need to go through the server.js file as it is just used to it serve the files here.

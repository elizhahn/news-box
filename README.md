# Fresh News Box

This is a Mod 3 take home challenge by [Elizabeth Hahn](https://github.com/elizhahn)

### Deployed App: [Fresh News Box](https://fresh-news-box.herokuapp.com/)
 
## Outline

1. [Project Overview](#project-overview)
2. [App Overview](#app-overview)
3. [Learning Goals](#learning-goals)
4. [Tech Stack](#tech-stack)
5. [Features](#features)
6. [Instructions for Installation](#instructions-for-installation)
7. [Future Iterations](#future-iterations)
8. [Project Reflections](#project-reflections)


## Project Overview

This was a take home challenge completed in 2 days with the goal of finishing an MVP applicaiton in a 6-7 hour time frame. The MVP application included consuming the NYT's Top Stories API to create a small applicaition that allows users to digest stories of their choice. 


## App Overview

This application will dispaly a list of articles for the user, allow the user to view more details about the article, including visiting the NYT's article page, and additionally gives them the option to check out different "sections" of the paper to render a list of articles related to that section, such as "arts" or "magazines". 


## Learning Goals
 
 - Building an MVP app within a time constraint
 - Presenting the project and speaking to development choices that were made
 - Taking and implementing feedback
 - Speaking to my development process and following best practices with planning and execution
  
## Tech Stack

### Front-End:
- JavaScript ECMA6
  - React (create-react-app)
  - React Router
- HTML5
- CSS3
  - SASS / SCSS

### Testing:
- Cypress
  - Mocha
  - Chai

## Features

### Homepage

![](https://media.giphy.com/media/aiWNzSHIVGYzFexoRe/giphy.gif)


### Article Details

![](https://media.giphy.com/media/BXtcRqnlaUudUl84t4/giphy.gif)

### Changing Sections

![](https://media.giphy.com/media/hVYFUtlVxqLVRKXhzN/giphy.gif)



## Instructions for Installation
  - simply visit the deployed site:[Fresh News Box](https://fresh-news-box.herokuapp.com/) 

OR

  - To run this application on your local machine, clone down this repo, change into the root directory from the command line, and run `npm install`. 
    
  - Then run `npm   start` to open the application locally. If you aren't taken there, visit `http://localhost:3000/`
    
  - To run the test suite locally, you will also need to run the command `npm i -D cypress` from the command line.
    
  - Once it  has installed, run `npx cypress open`, then select the `news_box_spec.js` test file. 
    
  - Note: you will need to run the application locally (start the server with `npm start` from the root directory on the command line) in order to run the automated tests.

## Future Iterations

 - a "save for later" option for the user to store articles they want to read later
 - a search bar for each section so they can narrow down the results within the section


## Project Reflections

### Challenges

  - Staying within the time limit proved challenging. I am still perfecting my flow to be more efficient. 
  - Responsively styling the sticky nav bar was a little tricky

### Wins

  - Following excellent project work flow including wireframes, project board flushed out with user stories, PR's were descriptive and linked to issues, and making small atomic commits
  - Staying within the time constraint relatively close. 
  - Effectively describing my application to a mock interviewer and talking to my design choices and recieving feedback as well as implementing changes based on the feedback

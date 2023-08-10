# Note Taker

## Description

This is a complete stepwise rebuild of the NoteBook is built during the last week.

I had an issue with a default htmlroute with the following error appearing in the front end console:

`VM46:1 Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

The app only worked is the route code was in a specific file. The problem was looked at by the course instructor & a tutor. Neither could see why the code wouldn't work and were unable to fix it. So many changes were made during these sessions that I'm rebuilding the app bit by bit find when it breaks & look for moreinformation.

1. Setup Git Repository
2. Inital Commit
3. Initalise & Installed NPM
4. Added skeleton server.js - front end loads
5. Added routes folder to hold the routes & updated server.js to reference it
6. Added skeleton index.js in routes folder
7. Added skeleton pages.js and apis.js
8. Added `get /notes` code to pages.js

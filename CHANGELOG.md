# Note Taker

## Description

This is a complete stepwise rebuild of the NoteBook I built during the last week. I had an issue with a default html route `get *` with the following error appearing in the front end console:

`Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

The app only worked if the route code was in the index.js handling the routing. The problem was looked at by the course instructor & a tutor. Neither could see why the code wouldn't work and were unable to fix it. So many changes were made during these sessions that I'm rebuilding the app bit by bit find when it breaks & see if I can find a resolution.

1. Setup Git Repository
2. Inital Commit
3. Initalise & Installed NPM
4. Added skeleton server.js - front end loads
5. Added routes folder to hold the routes & updated server.js to reference it
6. Added skeleton index.js in routes folder
7. Added skeleton pages.js and apis.js
8. Added `get /notes` route to pages.js
9. Added `get /api/notes` route to apis.js
10. Added `get *` route to pages.js

The error returns after step 10:

`Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

11. Moved `get *` route to index.js

The error is resolved - it appears this default html route has to be in the parent in this app. It works and index.html is the default. I'm assuming it's something to do with the way the provided index.js used by the html code.

12. Added `post /notes` route to apis.js
13. Added `delete /notes/:id` route to apis.js

# Mediapipe utility

How to use:

0. Make sure you have `node` and `npm` installed. 
1. Execute `npm install -g http-server`. That will install a simple
   zero-config http server that will host our images. (this is essentially
   a crutch designed to battle with CORS policy, in a normal world we would
   just be able to read images we want directly from filesystem, but not with browsers).
2. Go to `./server` and execute `http-server --cors` there. It
   should display a message about web-server running.
3. Put whatever pictures you have into `./server/imgs`.
4. Go into `index.js` and write all the names of your pictures
   in a list called `pics`.
5. Open `index.html` in browser, mediapipe results will be logged to the console.

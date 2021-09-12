# Mediapipe utility

How to use:

0. Make sure you have `node` and `npm` installed. 
1. Execute `npm install -g http-server`. That will install a simple
   zero-config http server that will host our images. (this is essentially
   a crutch designed to battle with CORS policy, in a normal world we would
   just be able to read images we want directly from filesystem, but not with browsers).
2. Go to `./server` and execute `http-server --cors` there. It
   should display a message about web-server running, like this:

```
Starting up http-server, serving ./

http-server settings:
CORS: true
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080
  http://192.168.0.118:8080
```

3. Put whatever pictures you have into `./server/imgs`.
4. Go into `index.js` and write all the names of your pictures
   in a list called `pics`.
5. Open `index.html` in browser, mediapipe results will be logged to the console.

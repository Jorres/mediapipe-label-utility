/*
 * Initializing mediapipe...
 */
const hands = new Hands({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    },
});

hands.setOptions({
    maxNumHands: 2,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
});

hands.onResults(onResults);


/* List of all picture names you have in the folder `server/imgs`.
 * it would be a good idea to get this list programatically, but 
 * again, browser does not allow you arbitrary read access to user 
 * filesystem. So I just hardcoded them for simplicity 
 */
const pics = ['hand.jpeg', 'planet.png'];

pics.forEach(pic => {
    const img = new Image();
    /* A crutch, don't ask what for is it */
    img.crossOrigin = "anonymous";

    /* And then we tell it to query our running web-server */
    img.src = `http://localhost:8080/imgs/${pic}`;
    img.onload = () => {
        hands.send({ image: img });
    };
})

function onResults(results) {
    /* Do whatever you need with results */
    console.log(results);
}

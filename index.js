const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

document.getElementById("input").addEventListener("change", () => {
    const selectedFile = document.getElementById("input").files[0];
    const fileName = selectedFile.name;

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = fileName;

    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        hands.send({image: img});
    };
});

function onResults(results) {
  console.log(results);
  // canvasCtx.save();
  // canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  // canvasCtx.drawImage(
  //     results.image, 0, 0, canvasElement.width, canvasElement.height);
  // if (results.multiHandLandmarks) {
  //   for (const landmarks of results.multiHandLandmarks) {
  //     drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
  //                    {color: '#00FF00', lineWidth: 5});
  //     drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
  //   }
  // }
  // canvasCtx.restore();
}

let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
  console.log("startRecording");
  if (!stream) {
    alert("Stream not available");
    return;
  }
  recordedBlobs = [];
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => {
    console.log("Data is available for recording");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "blue",
    "grey",
    "blue",
  ]);
};
const stopRecording = () => {
  if (!stream) {
    alert("Stream not available");
    return;
  }
  mediaRecorder.stop();
  console.log("stopRecording");
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
  ]);
};
const playRecording = () => {
  if (!stream) {
    alert("Stream not available");
    return;
  }
  console.log("playRecording");
  const superBuffer = new Blob(recordedBlobs);
  const recordedVideoEl = document.querySelector("#other-video");
  recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
  recordedVideoEl.controls = true;
  recordedVideoEl.play();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "blue",
  ]);
};

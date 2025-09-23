const videoEL = document.querySelector("#my-video");
let stream = null;
let mediatream = null;
const constraints = {
  audio: true,
  video: true,
};

const getMicAndCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);
    changeButtons([
      "green",
      "blue",
      "blue",
      "grey",
      "grey",
      "grey",
      "grey",
      "grey",
    ]);
    console.log("user allow to constraints");
  } catch (error) {
    console.log("user denied to constraints");
    console.error("ERROR in getting permission ==>", error);
  }
};
const showMyFeed = (e) => {
  if (!stream) {
    alert("Stream not available");
    return;
  }
  console.log("showMyFeed");
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "grey",
    "grey",
    "blue",
  ]);

  videoEL.srcObject = stream;
  const tracks = stream.getTracks();
  console.log(tracks);
};
const stopMyFeed = async () => {
  if (!stream) {
    alert("Stream not available");
    return;
  }
  console.log("stopMyFeed");
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    // console.log(track)
    track.stop();
  });
  changeButtons([
    "blue",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
  ]);
};

document
  .querySelector("#share")
  .addEventListener("click", (e) => getMicAndCamera(e));
document
  .querySelector("#show-video")
  .addEventListener("click", (e) => showMyFeed(e));
document
  .querySelector("#stop-video")
  .addEventListener("click", (e) => stopMyFeed(e));
document
  .querySelector("#change-size")
  .addEventListener("click", (e) => changeVideoSize(e));
document
  .querySelector("#start-record")
  .addEventListener("click", (e) => startRecording(e));
document
  .querySelector("#stop-record")
  .addEventListener("click", (e) => stopRecording(e));
document
  .querySelector("#play-record")
  .addEventListener("click", (e) => playRecording(e));
document
  .querySelector("#share-screen")
  .addEventListener("click", (e) => shareScreen(e));

  document
  .querySelector("#audio-input")
  .addEventListener("change", (e) => changeAudioInput(e));
  document
  .querySelector("#audio-output")
  .addEventListener("change", (e) => changeAudioOutput(e));
  document
  .querySelector("#video-input")
  .addEventListener("change", (e) => changeVideoInput(e));

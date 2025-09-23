const audioInputEl = document.querySelector("#audio-input");
const audioOutputEl = document.querySelector("#audio-output");
const videoInputEl = document.querySelector("#video-input");

const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach((d) => {
      const option = document.createElement("option");
      option.value = d.deviceId;
      option.text = d.label;
      if (d.kind === "audioinput") {
        audioInputEl.appendChild(option);
      } else if (d.kind === "audiooutput") {
        audioOutputEl.appendChild(option);
      } else if (d.kind === "videoinput") {
        videoInputEl.appendChild(option);
      }
    });
    console.log(devices, "devices");
  } catch (error) {
    console.error("Error ==>", error);
  }
};
const changeAudioInput = async (e) => {
  const deviceId = e.target.value;
  const newConstraints = {
    audio: { deviceId: { exact: deviceId }, video: true },
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream, "streammmm");
    const tracks = stream.getAudioTracks();
    console.log(tracks, "mediatracks");
  } catch (error) {
    console.error("Error=>>", error);
  }
};
const changeAudioOutput = async(e) => {
 await videoEL.setSinkId(e.target.value)
 console.log("Audio device chnaged")
};
const changeVideoInput = async (e) => {
  const deviceId = e.target.value;
  const newConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream, "streammmm");
    const tracks = stream.getVideoTracks();
    console.log(tracks, "mediatracks");
  } catch (error) {
    console.error("Error=>>", error);
  }
};
getDevices();

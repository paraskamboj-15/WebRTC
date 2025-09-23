const shareScreen = async () => {
  const options = {
    video: true,
    audio: false,
    surfaceSwitching: 'include',
  };
  try { 
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (error) {
    console.error("Share Screen Error ==>",error)
  }
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
  ]);
};

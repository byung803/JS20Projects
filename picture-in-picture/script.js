const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMedioStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('Media stream error: ', error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;

    await videoElement.requestPictureInPicture();
    
    button.disabled = false;
});

//  On Load
selectMedioStream();
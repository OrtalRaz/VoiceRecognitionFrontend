import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';


const registerWav = (() => {
    console.log("Registering wav")
    let registered = false;
    return (handler: () => void) => {
        if (!registered) {
            registered = true;
            connect().then(register).then(handler)
        } else {
            handler()
        }
    };
})();

function record(time: number, handler: (blob: Blob) => void) {
    console.log("record() called")
    registerWav(() => {
         navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/wav' });
                mediaRecorder.start();

                const audioChunks: BlobPart[] = [];
                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                mediaRecorder.addEventListener("stop", () => {
                    console.log("Got stop event")
                    const audioBlob = new Blob(audioChunks);
                    handler(audioBlob);
                });

                console.log("Setting stop timeout")
                setTimeout(() => {
                    console.log("calling stop")
                    mediaRecorder.stop();
                }, time);
            });
    })
}

export {record}

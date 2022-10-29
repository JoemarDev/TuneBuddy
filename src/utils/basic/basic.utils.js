export const ConvertWithComma = (num) =>{
    if(!num) return;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const ConvertMilliSecond = (ms) => {
    const minutes = Math.floor(ms / 60000) * 60;
    const seconds = ((ms % 60000) / 1000).toFixed(0);

    return Number(minutes) + Number(seconds);
}

export const ConvertMsToReadableFormat = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);

    return `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`;
}

export const ConvertTrackDurationToRedableFormat = (sec) => {

    let seconds = Math.round(sec);
   
    let start  = Math.floor(seconds / 60);

    let end =  seconds % 60;
    return `${start.toString().padStart(2,0)}:${end.toString().padStart(2,0)}`;
}
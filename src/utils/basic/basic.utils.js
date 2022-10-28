export const ConvertWithComma = (num) =>{
    if(!num) return;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const ConvertMilliSecond = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);

    return {minutes,seconds}
}
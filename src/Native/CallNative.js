module.exports = function CallNative(str) {
    if(window.webkit === undefined){
        console.log(str);
        return;
    }
    window.webkit.messageHandlers.showMobile.postMessage(str)
}
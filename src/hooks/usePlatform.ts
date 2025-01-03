export default function usePlatform () {
const platform = window.navigator.userAgent;
    if( /iPad|iPhone|iPod/.test(platform)){
        return "ios";
    }
    // if( /Mac OS X/.test(platform)) {
    //     return "mac";
    // }
    // if( /Windows Phone/.test(platform)) {
    //     return "windowsPhone";
    // }
    // if( /Windows NT/.test(platform)) {
    //     return "windows";
    // }
    // if( /Linux/.test(platform)) {
    //     return "linux";
    // }

    if( /Android/.test(platform)) {
        return "android";
    }
       return "desktop";


}

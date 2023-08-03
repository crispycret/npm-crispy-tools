export function getHostname() {
    return window.location.hostname;
}

export function getLocation() {
    return window.location.href;
}

export function getPage() {
    return window.location.pathname;
}


export function getLanguage() {
    // Return the user's language, such as "en-us".
    return navigator.language;
}
 
export function getReferrer() {
    // Return the referrer.
    return document.referrer;
}

export function getViewportSize() {
    // Return the viewport size, such as "123x456".
    return `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`;
}

export function getScreenResolution() {
    // Return the screen resolution, such as "123x456".
    return `${window.screen.width}x${window.screen.height}`;
}

export function getDeviceType() {
    // Return the device type, such as "desktop", "tablet", or "mobile".
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Android/i)) {
        return "mobile";
    } else if (userAgent.match(/BlackBerry/i)) {
        return "mobile";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        return "mobile";
    } else if (userAgent.match(/Opera Mini/i)) {
        return "mobile";
    } else if (userAgent.match(/IEMobile/i)) {
        return "mobile";
    } else { 
        return "desktop";
    }
}


export function getBrowser() {
    // Return the browser name, such as "Chrome".
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Chrome/i)) {
        return "Chrome";
    } else if (userAgent.match(/Firefox/i)) {
        return "Firefox";
    } else if (userAgent.match(/Edge/i)) {
        return "Edge";
    } else if (userAgent.match(/Safari/i)) {
        return "Safari";
    } else if (userAgent.match(/Opera/i)) {
        return "Opera";
    } else if (userAgent.match(/MSIE/i)) {
        return "IE";
    } else { 
        return "Unknown";
    }
}

export function getBrowserVersion() {
    // Return the browser version, such as "123.45".
    const userAgent = navigator.userAgent;
    const browser = getBrowser();
    let temp: any = null

    if (browser === "Chrome") {
        temp = userAgent.match(/Chrome\/([\d.]+)/);
    } else if (browser === "Firefox") {
        temp = userAgent.match(/Firefox\/([\d.]+)/);
    } else if (browser === "Edge") {
        temp = userAgent.match(/Edge\/([\d.]+)/);
    } else if (browser === "Safari") {
        temp = userAgent.match(/Safari\/([\d.]+)/);
    } else if (browser === "Opera") {
        temp = userAgent.match(/Opera\/([\d.]+)/);
    } else if (browser === "IE") {
        temp = userAgent.match(/MSIE\s([\d.]+)/);
    } 

    return temp ? temp[1] : "Unknown";
}

export function getOS() {
    // Return the operating system name, such as "Windows" or "MacOS".
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Windows/i)) {
        return "Windows";
    } else if (userAgent.match(/Mac/i)) {
        return "MacOS";
    } else if (userAgent.match(/Linux/i)) {
        return "Linux";
    } else if (userAgent.match(/Android/i)) {
        return "Android";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        return "iOS";
    } else { 
        return "Unknown";
    }
}

export function getOSVersion() {
    // Return the operating system version, such as "10.11.1".
    const userAgent = navigator.userAgent;
    const os = getOS();
    let temp: any = null

    if (os === "Windows") {
        temp = userAgent.match(/Windows\s([\d.]+)/);
    } else if (os === "MacOS") {
        temp = userAgent.match(/Mac\sOS\sX\s([\d_.]+)/);
    } else if (os === "Android") {
        temp = userAgent.match(/Android\s([\d.]+)/);
    } else if (os === "iOS") {
        temp = userAgent.match(/OS\s([\d_]+)/);
    }

    return temp ? temp[1].replace(/_/g, ".") : "Unknown";

}

export function getDevice() {
    // Return the device name, such as "iPhone".
    const userAgent = navigator.userAgent;
    if (userAgent.match(/iPhone/i)) {
        return "iPhone";
    } else if (userAgent.match(/iPad/i)) {
        return "iPad";
    } else if (userAgent.match(/iPod/i)) {
        return "iPod";
    } else if (userAgent.match(/Android/i)) {
        return "Android";
    } else if (userAgent.match(/BlackBerry/i)) {
        return "BlackBerry";
    } else if (userAgent.match(/Windows Phone/i)) {
        return "Windows Phone";
    } else { 
        return "Unknown";
    }
}

export function getClientIp() {
    // Return the client ip.
    return "";    
}



export default {
    getHostname,
    getLocation,
    getPage,
    getLanguage,
    getReferrer,
    getViewportSize,
    getScreenResolution,
    getDeviceType,
    getBrowser,
    getBrowserVersion,
    getOS,
    getOSVersion,
    getDevice,
    getClientIp,
}

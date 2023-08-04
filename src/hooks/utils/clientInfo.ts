/**
 * clientInfo.ts
 * 
 * This file contains utility functions to retrieve client-related information, such as browser details,
 * device type, operating system, viewport size, and more. The functions utilize browser and navigator APIs
 * to extract relevant information about the user's client (web browser, device, etc.).
 * 
 * List of functions:
 * - getHostname(): Returns the hostname of the current URL.
 * - getLocation(): Returns the complete URL of the current page.
 * - getPage(): Returns the pathname of the current URL.
 * - getLanguage(): Returns the user's language, such as "en-us".
 * - getReferrer(): Returns the referrer of the current page.
 * - getViewportSize(): Returns the viewport size in the format "123x456".
 * - getScreenResolution(): Returns the screen resolution in the format "123x456".
 * - getDeviceType(): Returns the device type as "desktop", "tablet", or "mobile".
 * - getBrowser(): Returns the name of the user's web browser, such as "Chrome", "Firefox", "Edge", etc.
 * - getBrowserVersion(): Returns the version of the user's web browser.
 * - getOS(): Returns the name of the user's operating system, such as "Windows", "MacOS", "Android", etc.
 * - getOSVersion(): Returns the version of the user's operating system.
 * - getDevice(): Returns the name of the user's device, such as "iPhone", "iPad", "Android", etc.
 * - getClientIp(): Returns the client's IP address (currently returning an empty string).
 * 
 * The functions use browser APIs and User Agent parsing to extract the relevant information. They provide a
 * comprehensive set of client-related data that can be useful for analytics, user experience customization,
 * and other purposes in web applications.
 */


export function getHostname(): string {
  return window.location.hostname;
}

export function getLocation(): string {
  return window.location.href;
}

export function getPage(): string {
  return window.location.pathname;
}

export function getLanguage(): string {
  return navigator.language;
}

export function getReferrer(): string {
  return document.referrer;
}

export function getViewportSize(): string {
  return `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`;
}

export function getScreenResolution(): string {
  return `${window.screen.width}x${window.screen.height}`;
}

export function getDeviceType(): string {
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

export function getBrowser(): string {
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

export function getBrowserVersion(): string {
  const userAgent = navigator.userAgent;
  const browser = getBrowser();
  const temp = userAgent.match(browser === "IE" ? /MSIE\s([\d.]+)/ : new RegExp(`${browser}\\/([\\d.]+)`));

  return temp ? temp[1] : "Unknown";
}

export function getOS(): string {
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

export function getOSVersion(): string {
  const userAgent = navigator.userAgent;
  const os = getOS();
  const temp = userAgent.match(os === "MacOS" ? /Mac\sOS\sX\s([\d_.]+)/ : new RegExp(`${os}\\s([\\d.]+)`));

  return temp ? temp[1].replace(/_/g, ".") : "Unknown";
}

export function getDevice(): string {
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

export function getClientIp(): string {
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
};

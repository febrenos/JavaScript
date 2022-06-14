document.captureEvents(event.KEYPRESS);
event.keyCode =  16; //shift
document.execCommand("bold");//turn letter bold
Document.onkeypress = rolar;

let windowFeatures = "left=100,top=100,width=320,height=320";
window.open(url, target, windowFeatures)
window.open("https://instagram.com", "_self");//new window same tab
window.open("https://instagram.com", "_blank");//new tab
window.open("https://instagram.com", "_target");//new tab
window.open("https://instagram.com", "_parent");//same tab
window.open("https://instagram.com", "_top");//same tab
window.close();// close the current window
window.history.back();//same as clicking back in the browser
window.history.forward();//same as clicking forward in the browser
window.location.href; //returns the href (URL) of the current page
window.location.hostname;//returns the domain name of the web host
window.location.pathname;//returns the path and filename of the current page
window.location.protocol;//returns the web protocol used (http: or https:)
window.location.assign();//loads a new document
window.moveTo();//move the current window
windown.navigator.javaEnabled();//false
windown.navigator.appName;//netscape
windown.navigator.appCodeName;//mozilla
windown.navigator.product;//Gecko
windown.navigator.appVersion;//verssion browser
windown.navigator.userAgent;//chrome
windown.navigator.platform;//Win32
windown.navigator.language;//pt-BR
windown.navigator.onLine;//true
windown.navigator.cookieEnabled;
window.resizeTo();//resize the current window

varName.checkValidity();//<input min="100" max="300">
validity.customError;//Set to true, if a custom validity message is set.
validity.patternMismatch;//Set to true, if an element's value does not match its pattern attribute.
validity.rangeOverflow;//Set to true, if an element's value is greater than its max attribute.
validity.rangeUnderflow;//Set to true, if an element's value is less than its min attribute.
validity.stepMismatch;//Set to true, if an element's value is invalid per its step attribute.
validity.tooLong;//Set to true, if an element's value exceeds its maxLength attribute.
validity.typeMismatch;//Set to true, if an element's value is invalid per its type attribute.
validity.valueMissing;//Set to true, if an element (with a required attribute) has no value.
validity.valid;//Set to true, if an element's value is valid.

document.apply(person1);
document.addEventListener("click", functionName);
style.background="#000000";
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";//example
document.createElement("p");
document.createTextNode("This is new.");
document.form.name;
document.querySelector(".className");//first element
document.querySelectorAll("button")[1].onclick();
document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");
document.getElementsByTagName("form")[0].removeAttribute("method")
document.getElementsByTagName("demo");
document.getElementsByName("demo");
document.getElementsByClassName("demo");
document.getElementById("demo").innerHTML = Date();
document.getElementById("demo").innerHTML = text;
document.getElementById("demo").style.color = "blue";
document.getElementById("myBtn").addEventListener("click", functionName);
localStorage.setItem("name", "John Doe");
localStorage.getItem("name");
sessionStorage.setItem("name", "John Doe");
setTimeout(nameFunction, 3000);
window.clearInterval();
window.setInterval();
window.onerror=null;
window.history.go(-2);//forward() back() go()
w = new Worker("demo_workers.js");
w.terminate();
w = undefined;
navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
    position.coords.longitude;
    position.coords.latitude;
}

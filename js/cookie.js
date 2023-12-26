$(document).ready(function () {
    document.cookie = "myBoolean=true; path=/";
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    
    const myBooleanValue = getCookie("myBoolean") === "true";
    console.log(myBooleanValue); // 印出布林值

    if (myBooleanValue) {
        // 執行相應的操作
        console.log("布林值為 true");
    } else {
        console.log("布林值為 false");
    }
});

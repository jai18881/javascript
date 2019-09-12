import fs from 'file'
var f = function () {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', true);
    xhr.responseType = 'blob';
    xhr.onload = function (e) {

        let urlCreator = window.URL || window.webkitURL;
        let blobURL = urlCreator.createObjectURL(xhr.response);
        let srcElem = document.getElementById('hplogo123');
        srcElem.src = blobURL;
    };

    xhr.onabort = function (e) {
        console.log('load aborted');
    };
    xhr.onerror = function (e) {
        console.log('load error');
    };

    xhr.send();
}

f();

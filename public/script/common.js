function getAjax(url, success, fail) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState > 3) {
            if (xhr.status == 200) {
                success(xhr.responseText);
            } else {
                fail(xhr);
            }
        }

    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

function postAjax(url, data, success, fail) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
        function(k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState > 3) {
            if (xhr.status == 200) {
                success(xhr.responseText);
            } else {
                if (typeof fail === 'function') {
                    fail(xhr);
                }

            }
        }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}
// example request


//postAjax('http://foo.bar/', { p1: 1, p2: 'Hello World' }, function(data) { console.log(data); });
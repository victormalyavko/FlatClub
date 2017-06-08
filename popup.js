function hello() {
    var scripts = [
        'jquery.js',
        'alert.js',
    ];

    var flat_number;
    if (document.getElementById('flats_number').value != "")
        flat_number = document.getElementById('flats_number').value;
    else
        flat_number = 0;

    scripts.forEach(function (script) {
        chrome.tabs.executeScript({
            code: "var myVar= " + flat_number + ";"
        }, function () {
            chrome.tabs.executeScript(null, {file: script}, function (resp) {
                if (script !== 'alert.js') return;
            });
        });
    });
}

document.getElementById('btn').addEventListener('click', hello);
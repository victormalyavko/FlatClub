function hello() {
    var scripts = [
        'jquery-3.2.1.min.js',
        'alert.js',
    ];
    scripts.forEach(function (script) {
        chrome.tabs.executeScript(null, {file: script}, function (resp) {
            if (script !== 'alert.js') return;
        });
    });
}

document.getElementById('btn').addEventListener('click', hello);
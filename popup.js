function hello() {
    chrome.tabs.executeScript({
        file: 'alert.js'
    });
}

document.getElementById('btn').addEventListener('click', hello);
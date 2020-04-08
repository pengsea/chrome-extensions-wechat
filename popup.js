document.getElementById('triggerOptimize').onclick = function () {
    chromeTabs('optimize.js');
};
document.getElementById('triggerOptimizeMin').onclick = function () {
    chromeTabs('optimizeMin.js');
};

function chromeTabs(file) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[ 0 ].id,
            { file });
    });
}


let triggerOptimize = document.getElementById('triggerOptimize');//按钮

triggerOptimize.onclick = function () {
    chromeTabs('optimize.js');
};

function chromeTabs(file) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[ 0 ].id,
            { file });
    });
}


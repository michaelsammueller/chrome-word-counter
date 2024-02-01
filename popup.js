chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.wordCount) {
        document.getElementById('wordCount').textContent = `Word Count: ${request.wordCount}`;
    }
});

// On popup load, reset the word count display
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('wordCount').textContent = 'No words selected';
});

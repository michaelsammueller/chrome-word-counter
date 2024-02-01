document.addEventListener('copy', function() {
    var selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        var wordCount = selectedText.split(/\s+/).length;
        console.log('Word Count:', wordCount); // For debugging

        chrome.runtime.sendMessage({wordCount: wordCount});
    }
});

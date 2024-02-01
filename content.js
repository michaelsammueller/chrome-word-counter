document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        var wordCount = selectedText.split(/\s+/).length;
        console.log('Word Count:', wordCount);

        // Send the word count to the popup
        chrome.runtime.sendMessage({wordCount: wordCount});
    }
});

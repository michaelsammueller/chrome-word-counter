document.addEventListener('DOMContentLoaded', function() {
    var countButton = document.getElementById('countButton');
    countButton.addEventListener('click', function() {
        var textInput = document.getElementById('textInput').value;
        var wordCount = textInput.trim().split(/\s+/).length;
        if (textInput.length === 0) {
            wordCount = 0;
        }
        document.getElementById('wordCount').textContent = 'Word Count: ' + wordCount;
    });
});

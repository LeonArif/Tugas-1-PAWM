function renderTutorials() {
    var container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div id="if-else">
            <h1>Python if-else</h1>
            <h2>Basic structure of if-else in python</h2>
            <p>bla bla</p>
            ${codeRunner('ifelse-1', 'score = 70\nif score >= 60:\n    print("Passed")\nelse:\n    print("Failed")', 'If-Else Runner')}
        </div>
        <div id="loop">
            <h1>Python loop</h1>
            <h2>Basic structure of loops in python</h2>
            <p>bla bla</p>
            ${codeRunner('loop-1', 'for i in range(5):\n    print(i)', 'Loop Runner')}
        </div>
    `;
}

// Wait for DOM ready, then run everything
document.addEventListener('DOMContentLoaded', function() {
    renderTutorials();
    document.getElementById("sidebar-if-else").onclick = function() {
        document.getElementById("if-else").scrollIntoView({ behavior: 'smooth' });
    };
});
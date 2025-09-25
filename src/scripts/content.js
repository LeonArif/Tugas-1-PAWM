function codeRunner(id, defaultCode = 'print("Hello World")', label = "Try Python code:") {
    return `
    <div class="code-runner">
        ${label ? `<label for="python-code-${id}"><strong>${label}</strong></label><br>` : ""}
        <textarea id="python-code-${id}" rows="6" cols="40">${defaultCode}</textarea><br>
        <button onclick="runPython('python-code-${id}', 'output-${id}')">Run</button>
        <pre id="output-${id}"></pre>
    </div>
    `;
}

function renderTutorials() {
    var container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div id="if-else">
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h2 style="font-weight: 300;">Basic structure of if-else in python</h2>
            <p>bla bla</p>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            ${codeRunner('ifelse-1', 'score = 70\nif score >= 60:\n    print("Passed")\nelse:\n    print("Failed")', 'If-Else Runner')}
        </div>
        <div id="loop">
            <h1 style="font-weight: 500;">Python loop</h1>
            <h2 style="font-weight: 300;">Basic structure of if-else in python</h2>
            <p>bla bla</p>
                        <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            <h1 style="font-weight: 500;">Python if-else</h1>
            ${codeRunner('loop-1', 'for i in range(5):\n    print(i)', 'Loop Runner')}
        </div>
    `;
}
renderTutorials();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sidebar-if-else").addEventListener("click", function() {
        document.getElementById("if-else").scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById("sidebar-loop").addEventListener("click", function() {
        document.getElementById("loop").scrollIntoView({ behavior: 'smooth' });
    });
});
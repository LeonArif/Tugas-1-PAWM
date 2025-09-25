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
window._codeChecker = {};
window.monacoEditors = {};


function setupMonacoEditors(editors) {
    require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        editors.forEach(ed => {
            const instance = monaco.editor.create(document.getElementById(ed.containerId), {
                value: ed.defaultCode,
                language: 'python',
                theme: 'vs-light',
                fontSize: 16,
                fontFamily: "Consolas, 'Courier New', monospace",
                automaticLayout: true,
                minimap: { enabled: false }
            });
            window.monacoEditors[ed.containerId] = instance;
            document.getElementById(ed.buttonId).onclick = function() {
                runPythonMonaco(instance, ed.outputId);
            };
        });
    });
}


function codeRunner(id, defaultCode = 'print("Hello World")', label = "Try Python code:") {
    return `
    <div class="code-runner" id="code-runner-${id}">
        ${label ? `<h3>${label}</h3>` : ""}
        <div id="monaco-container-${id}" style="height:220px;border-radius:8px;border:1px solid #ccc;margin-bottom:8px;"></div>
        <button id="run-btn-${id}">Try it!</button>
        <pre id="output-${id}"></pre>
    </div>
    `;
}


function setupCodeCheckerEditor(config) {
    require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        const editor = monaco.editor.create(document.getElementById(config.editorId), {
            value: config.defaultCode,
            language: 'python',
            theme: 'vs-light',
            fontSize: 16,
            automaticLayout: true,
            minimap: { enabled: false }
        });
        window.monacoEditors[config.editorId] = editor;
        document.getElementById(config.checkBtnId).onclick = function() {
            runCodeChecker(editor, config.testcaseId, config.resultId);
        };
    });
    window.monacoEditors = window.monacoEditors || {};
}

function codeChecker(id, defaultCode, label, testcases) {
    window._codeChecker[id] = testcases;
    return `
    <div class="code-runner" id="code-checker-${id}">
        ${label ? `<h3>${label}</h3>` : ""}
        <div id="monaco-container-${id}" style="height:220px;border-radius:8px;border:1px solid #ccc;margin-bottom:8px;"></div>
        <button id="check-btn-${id}">Check!</button>
        <pre id="output-${id}"></pre>
    </div>
    `;
}

function setupCodeChecker(editors) {
    require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        editors.forEach(ed => {
            const instance = monaco.editor.create(document.getElementById(ed.containerId), {
                value: ed.defaultCode,
                language: 'python',
                theme: 'vs-light',
                fontSize: 16,
                fontFamily: "Consolas, 'Courier New', monospace",
                automaticLayout: true,
                minimap: { enabled: false }
            });
            window.monacoEditors[ed.containerId] = instance;
            document.getElementById(ed.buttonId).onclick = function() {
                runCodeChecker(instance, ed.id, ed.outputId);
            };
        });
    });
}

function runCodeChecker(monacoInstance, id, outputId) {
    const code = monacoInstance.getValue();
    const testcases = window._codeChecker[id];
    if (!Array.isArray(testcases) || testcases.length === 0) {
        document.getElementById(outputId).textContent = "No testcases found!";
        return;
    }
    let pass = true, firstFail = null, idx = 0;
    document.getElementById(outputId).textContent = "Checking...";

    function nextTest() {
        if (idx >= testcases.length) {
            document.getElementById(outputId).textContent =
                pass
                    ? "✅ PASS: All testcases passed!"
                    : `❌ FAIL\nTestcase #${firstFail.idx + 1} failed:\nInput: ${firstFail.tc.input}\nExpected: ${firstFail.tc.expected}\nGot: ${firstFail.actual}`;
            return;
        }
        const tc = testcases[idx];
        const userCode = `${code}\nresult = solve(${tc.input})`;
        Sk.configure({
            output: function() {},
            read: builtinRead
        });
        Sk.misceval.asyncToPromise(function() {
            return Sk.importMainWithBody("<stdin>", false, userCode, true);
        }).then(function(mod) {
            let actual = "";
            try {
                actual = mod.$d.result.v.toString();
            } catch (e) {
                actual = "[Error: No result]";
            }
            if (actual != tc.expected && pass) {
                pass = false;
                firstFail = {idx, tc, actual};
            }
            if (!pass) {
                idx = testcases.length;
            } else {
                idx++;
            }
            nextTest();
        }, function(err) {
            if (pass) {
                pass = false;
                firstFail = {idx, tc, actual: err.toString()};
            }
            idx = testcases.length;
            nextTest();
        });
    }
    nextTest();
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
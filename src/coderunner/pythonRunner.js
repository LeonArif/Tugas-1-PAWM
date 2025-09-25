function outf(text, outputId) {
    document.getElementById(outputId).innerHTML += text;
}

function runPython(codeId, outputId) {
    document.getElementById(outputId).innerHTML = "";
    Sk.configure({output: (text) => outf(text, outputId), read: builtinRead});
    Sk.importMainWithBody("<stdin>", false, document.getElementById(codeId).value, true);
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
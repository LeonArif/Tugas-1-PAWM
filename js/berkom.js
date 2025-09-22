let pyodideReadyPromise = loadPyodide();

const challenges = [
  {
    difficulty: "Easy",
    title: "Soal 1: IF-ELSE - Positif, Negatif, atau Nol",
    description: `Buat fungsi <b>check_number(n)</b> yang mengembalikan string:<br>
    - "Positif" jika n > 0<br>
    - "Negatif" jika n < 0<br>
    - "Nol" jika n == 0`,
    template: `def check_number(n):
    # tulis kode kamu di sini
    pass
`,
    testcases: [
      {input: [10], expected: "Positif"},
      {input: [-3], expected: "Negatif"},
      {input: [0], expected: "Nol"},
      {input: [100], expected: "Positif"}
    ],
    callCode: (tc) => `check_number(${tc.input[0]})`
  },
  {
    difficulty: "Easy",
    title: "Soal 2: LOOPS - Jumlahkan Semua Angka dari 1 sampai n",
    description: `Buat fungsi <b>sum_to_n(n)</b> yang mengembalikan jumlah semua angka dari 1 sampai n.`,
    template: `def sum_to_n(n):
    # tulis kode kamu di sini
    pass
`,
    testcases: [
      {input: [5], expected: 15},
      {input: [1], expected: 1},
      {input: [10], expected: 55},
      {input: [0], expected: 0}
    ],
    callCode: (tc) => `sum_to_n(${tc.input[0]})`
  },
  {
    difficulty: "Medium",
    title: "Soal 3: ARRAY - Nilai Terbesar dalam List",
    description: `Buat fungsi <b>find_max(arr)</b> yang menerima list angka dan mengembalikan nilai terbesar.`,
    template: `def find_max(arr):
    # tulis kode kamu di sini
    pass
`,
    testcases: [
      {input: [[1,5,3]], expected: 5},
      {input: [[10,2,8,11]], expected: 11},
      {input: [[-1,-5,-3]], expected: -1},
      {input: [[7]], expected: 7}
    ],
    callCode: (tc) => `find_max(${JSON.stringify(tc.input[0])})`
  },
    {
    difficulty: "Hard",
    title: "Soal 4: FUNCTION - FPB dengan Rekursi",
    description: `Buat fungsi <b>gcd(a, b)</b> yang menerima dua bilangan bulat dan mengembalikan FPB (Faktor Persekutuan Terbesar) menggunakan rekursi.<br><i>Hint: gunakan algoritma Euclidean.</i>`,
    template: 
        `
    def gcd(a, b):
    # tulis kode kamu di sini
    pass
    `,
    testcases: [
        {input: [10,15], expected: 5},
        {input: [21,14], expected: 7},
        {input: [7,3], expected: 1},
        {input: [100,10], expected: 10}
    ],
    callCode: (tc) => `gcd(${tc.input[0]}, ${tc.input[1]})`
    }
];

let editors = []; // Simpan instance CodeMirror tiap soal

function renderChallenges() {
  let html = "";
  challenges.forEach((c, idx) => {
    html += `
      <div class="challenge-block">
        <div class="challenge-difficulty ${c.difficulty.toLowerCase()}">${c.difficulty}</div>
        <div class="challenge-title">${c.title}</div>
        <div class="challenge-desc">${c.description}</div>
        <span class="label">Kode Python kamu:</span>
        <textarea id="editor${idx}">${c.template}</textarea><br>
        <button onclick="runTestCases(${idx})">Check Answers</button>
        <span class="label">Hasil Testcase:</span>
        <div id="output${idx}" class="outputbox"></div>
      </div>
    `;
  });
  document.getElementById("challenge-container").innerHTML = html;

  // Inisialisasi CodeMirror untuk semua editor
  editors = [];
  challenges.forEach((c, idx) => {
    editors.push(CodeMirror.fromTextArea(document.getElementById("editor"+idx), {
      mode: "python",
      theme: "dracula",
      lineNumbers: true,
      autoCloseBrackets: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      matchBrackets: true,
      styleActiveLine: true,
    }));
  });
}

async function runTestCases(idx) {
  document.getElementById("output"+idx).innerHTML = "Running...";
  let pyodide = await pyodideReadyPromise;
  let userCode = editors[idx].getValue();

  // Redirect stdout
  pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = sys.stderr = StringIO()
  `);

  // Load user code
  try {
    await pyodide.runPythonAsync(userCode);
  } catch (e) {
    document.getElementById("output"+idx).innerHTML = `<span style='color:#ff4f4f'>Error pada kode: ${e}</span>`;
    return;
  }

  // Jalankan testcases
  let results = "";
  const c = challenges[idx];
  for (let i=0; i<c.testcases.length; i++) {
    let tc = c.testcases[i];
    try {
      let result = pyodide.runPython(c.callCode(tc));
      let expected = tc.expected;
      if (typeof expected === "boolean") {
        result = result ? true : false;
      }
      let pass = (result === expected);
      results += `<div class="testcase">Input: <b>${c.callCode(tc)}</b> → Output: <b>${result}</b> | Expected: <b>${expected}</b> <span class="${pass?'tc-success':'tc-fail'}">${pass?'✓ Benar':'✗ Salah'}</span></div>`;
    } catch (e) {
      results += `<div class="testcase tc-fail">Error pada testcase ${i+1}: ${e}</div>`;
    }
  }
  document.getElementById("output"+idx).innerHTML = results;
}

// Render saat halaman siap
renderChallenges();
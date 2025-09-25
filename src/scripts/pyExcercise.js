function renderPythonExercises() {
    const container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div class="tutorial" id="python-exercises">
            <h1>Python Coding Exercises</h1>
            <h2>Exercise 1: If-Else Condition</h2>
            <p>
                <b>Instruction:</b> Write a function <i>solve(n)</i> that returns "Positive" if <i>n</i> is greater than 0, "Zero" if <i>n</i> is 0, and "Negative" if <i>n</i> is less than 0.
            </p>
            ${codeChecker(
                "exc1",
                `def solve(n):
    # Your code here
    pass`,
                "Implement solve(n):",
                [
                    {input: "7", expected: "Positive"},
                    {input: "0", expected: "Zero"},
                    {input: "-5", expected: "Negative"}
                ]
            )}
            <h2>Exercise 2: Loop (Sum 1 to n)</h2>
            <p>
                <b>Instruction:</b> Write a function <i>solve(n)</i> that returns the sum of all integers from 1 to <i>n</i> (inclusive).
            </p>
            ${codeChecker(
                "exc2",
                `def solve(n):
    # Your code here
    pass`,
                "Implement solve(n):",
                [
                    {input: "3", expected: "6"},
                    {input: "5", expected: "15"},
                    {input: "1", expected: "1"}
                ]
            )}
            <h2>Exercise 3: Array/List (Sum Elements)</h2>
            <p>
                <b>Instruction:</b> Write a function <i>solve(lst)</i> that returns the sum of all elements in the list <i>lst</i>. The input is a Python list.
            </p>
            ${codeChecker(
                "exc3",
                `def solve(lst):
    # Your code here
    pass`,
                "Implement solve(lst):",
                [
                    {input: "[1,2,3]", expected: "6"},
                    {input: "[5,5,5,5]", expected: "20"},
                    {input: "[]", expected: "0"}
                ]
            )}
            <h2>Exercise 4: Function (GCD)</h2>
            <p>
                <b>Instruction:</b> Write a function <i>solve(a_b)</i> that receives a tuple <i>(a, b)</i> and returns the greatest common divisor (GCD) of <i>a</i> and <i>b</i>.
            </p>
            ${codeChecker(
                "exc4",
                `def solve(a_b):
    # Your code here
    pass`,
                "Implement solve(a_b):",
                [
                    {input: "(12, 18)", expected: "6"},
                    {input: "(7, 13)", expected: "1"},
                    {input: "(20, 100)", expected: "20"}
                ]
            )}
        </div>
    `;

    setupCodeChecker([
        {
            id: "exc1",
            containerId: "monaco-container-exc1",
            buttonId: "check-btn-exc1",
            outputId: "output-exc1",
            defaultCode: `def solve(n):\n    # Your code here\n    pass`
        },
        {
            id: "exc2",
            containerId: "monaco-container-exc2",
            buttonId: "check-btn-exc2",
            outputId: "output-exc2",
            defaultCode: `def solve(n):\n    # Your code here\n    pass`
        },
        {
            id: "exc3",
            containerId: "monaco-container-exc3",
            buttonId: "check-btn-exc3",
            outputId: "output-exc3",
            defaultCode: `def solve(lst):\n    # Your code here\n    pass`
        },
        {
            id: "exc4",
            containerId: "monaco-container-exc4",
            buttonId: "check-btn-exc4",
            outputId: "output-exc4",
            defaultCode: `def solve(a_b):\n    # Your code here\n    pass`
        }
    ]);
}

// Only call after DOM is loaded!
window.addEventListener("DOMContentLoaded", renderPythonExercises);
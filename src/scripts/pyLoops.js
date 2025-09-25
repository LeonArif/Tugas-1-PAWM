function renderTutorials() {
    const container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div class="tutorial" id='python-loops'>
            <h1>Python Loops Tutorial</h1>
            <h2>Introduction to Loops</h2>
            <p>
                Loops are used to repeat a block of code multiple times. Python mainly provides two types of loops: <b>for</b> loops and <b>while</b> loops.<br>
            </p>
            
            <h2>For Loop</h2>
            <p>
                The <b>for</b> loop is used for iterating over a sequence (like a list, tuple, string, or range).
            </p>
            ${codeRunner('forloop-basic', 
                'for i in range(5):\n    print(i)', 
                'Try for loop with range:')
            }
            
            <h2>For Loop over a List</h2>
            <p>
                You can use a for loop to iterate through each item in a list.
            </p>
            ${codeRunner('forloop-list', 
                'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)', 
                'Try for loop over a list:')
            }

            <h2>For Loop with break</h2>
            <p>
                The <b>break</b> statement can be used to stop the loop before it has looped through all the items.
            </p>
            ${codeRunner('forloop-break', 
                'for i in range(10):\n    if i == 5:\n        break\n    print(i)', 
                'Try for loop with break:')
            }

            <h2>For Loop with continue</h2>
            <p>
                The <b>continue</b> statement can be used to skip the current iteration of the loop and continue with the next.
            </p>
            ${codeRunner('forloop-continue', 
                'for i in range(6):\n    if i == 3:\n        continue\n    print(i)', 
                'Try for loop with continue:')
            }
            
            <h2>While Loop</h2>
            <p>
                The <b>while</b> loop repeats as long as a condition is True.
            </p>
            ${codeRunner('whileloop-basic', 
                'count = 0\nwhile count < 5:\n    print(count)\n    count += 1', 
                'Try basic while loop:')
            }

            <h2>While Loop with break</h2>
            <p>
                The <b>break</b> statement can also be used in while loops.
            </p>
            ${codeRunner('whileloop-break', 
                'count = 0\nwhile True:\n    print(count)\n    count += 1\n    if count == 5:\n        break', 
                'Try while loop with break:')
            }

            <h2>While Loop with continue</h2>
            <p>
                The <b>continue</b> statement skips the current iteration and continues with the next.
            </p>
            ${codeRunner('whileloop-continue', 
                'count = 0\nwhile count < 6:\n    count += 1\n    if count == 3:\n        continue\n    print(count)', 
                'Try while loop with continue:')
            }

            <h2>Nested Loops</h2>
            <p>
                You can use loops inside loops. This is called nesting.
            </p>
            ${codeRunner('nested-loop', 
                'for i in range(1, 4):\n    for j in range(1, 4):\n        print("i =", i, ", j =", j)', 
                'Try nested loops:')
            }

            <h2>Loop with else</h2>
            <p>
                Python allows an <b>else</b> clause after a loop that runs if the loop was not terminated by <b>break</b>.
            </p>
            ${codeRunner('loop-else', 
                'for i in range(3):\n    print(i)\nelse:\n    print("Loop finished!")', 
                'Try loop with else:')
            }

            <h2>Summary</h2>
            <p>
                <ul>
                    <li><b>for</b> loops are for iterating over sequences.</li>
                    <li><b>while</b> loops run as long as a condition is True.</li>
                    <li>Use <b>break</b> to exit a loop early.</li>
                    <li>Use <b>continue</b> to skip to the next iteration.</li>
                    <li>Loops can be nested.</li>
                    <li>Loops can have an <b>else</b> clause.</li>
                </ul>
                <b>Ready for more Python? Happy coding!</b>
            </p>
            <button class="next-button" onclick="window.location.href='pyArrays.html'">
                Next: Arrays
            </button>
        </div>
    `;
    const editors = [
        {
            containerId: 'monaco-container-forloop-basic',
            buttonId: 'run-btn-forloop-basic',
            outputId: 'output-forloop-basic',
            defaultCode: 'for i in range(5):\n    print(i)'
        },
        {
            containerId: 'monaco-container-forloop-list',
            buttonId: 'run-btn-forloop-list',
            outputId: 'output-forloop-list',
            defaultCode: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)'
        },
        {
            containerId: 'monaco-container-forloop-break',
            buttonId: 'run-btn-forloop-break',
            outputId: 'output-forloop-break',
            defaultCode: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)'
        },
        {
            containerId: 'monaco-container-forloop-continue',
            buttonId: 'run-btn-forloop-continue',
            outputId: 'output-forloop-continue',
            defaultCode: 'for i in range(6):\n    if i == 3:\n        continue\n    print(i)'
        },
        {
            containerId: 'monaco-container-whileloop-basic',
            buttonId: 'run-btn-whileloop-basic',
            outputId: 'output-whileloop-basic',
            defaultCode: 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1'
        },
        {
            containerId: 'monaco-container-whileloop-break',
            buttonId: 'run-btn-whileloop-break',
            outputId: 'output-whileloop-break',
            defaultCode: 'count = 0\nwhile True:\n    print(count)\n    count += 1\n    if count == 5:\n        break'
        },
        {
            containerId: 'monaco-container-whileloop-continue',
            buttonId: 'run-btn-whileloop-continue',
            outputId: 'output-whileloop-continue',
            defaultCode: 'count = 0\nwhile count < 6:\n    count += 1\n    if count == 3:\n        continue\n    print(count)'
        },
        {
            containerId: 'monaco-container-nested-loop',
            buttonId: 'run-btn-nested-loop',
            outputId: 'output-nested-loop',
            defaultCode: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print("i =", i, ", j =", j)'
        },
        {
            containerId: 'monaco-container-loop-else',
            buttonId: 'run-btn-loop-else',
            outputId: 'output-loop-else',
            defaultCode: 'for i in range(3):\n    print(i)\nelse:\n    print("Loop finished!")'
        },
    ];

    setupMonacoEditors(editors);
}

renderTutorials()
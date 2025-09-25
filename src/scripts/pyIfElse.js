function renderTutorials() {
    const container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div class="tutorial" id='if-else'>
            <h1>Python If-Else Tutorial</h1>
            <h2>Basic structure of if-else in Python</h2>
            <p>
                In Python, the <b>if</b> statement is used to test a condition: if the condition is True, the code inside the if block is executed. Otherwise, you can use <b>else</b> to run code when the condition is False.<br>
            </p>
            ${codeRunner('ifelse-basic', 
                'x = 10\nif x > 5:\n    print("x is greater than 5")', 
                'Try basic if statement:')
            }

            <h2>If-Else Example</h2>
            <p>
                The <b>else</b> block runs when the <b>if</b> condition is False.
            </p>
            ${codeRunner('ifelse-else', 
                'x = 3\nif x > 5:\n    print("x is greater than 5")\nelse:\n    print("x is not greater than 5")', 
                'Try if-else statement:')
            }

            <h2>Example 1: Check Positive or Negative</h2>
            <p>
                Check if a number is positive or negative.
            </p>
            ${codeRunner('ifelse-positive', 
                'number = -7\nif number > 0:\n    print("Positive number")\nelse:\n    print("Negative number or zero")', 
                'Try positive/negative check:')
            }

            <h2>Example 2: Determine Pass or Fail</h2>
            <p>
                Check if the score is enough to pass.
            </p>
            ${codeRunner('ifelse-pass', 
                'score = 75\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")', 
                'Try pass/fail:')
            }

            <h2>Nested if-else</h2>
            <p>
                Sometimes, you need to make decisions inside other decisions. This is called nested if-else.
            </p>
            ${codeRunner('ifelse-nested', 
                'number = 0\nif number > 0:\n    print("Positive number")\nelse:\n    if number == 0:\n        print("Zero")\n    else:\n        print("Negative number")', 
                'Try nested if-else:')
            }

            <h2>if-elif-else for Multiple Conditions</h2>
            <p>
                Use <b>elif</b> for more than two conditions.
            </p>
            ${codeRunner('ifelse-elif', 
                'score = 85\nif score >= 90:\n    print("Grade A")\nelif score >= 80:\n    print("Grade B")\nelif score >= 70:\n    print("Grade C")\nelse:\n    print("Grade D")', 
                'Try if-elif-else:')
            }

            <h2>Summary</h2>
            <p>
                <ul>
                    <li><b>if</b> is for single condition checks.</li>
                    <li><b>else</b> is for when the <b>if</b> condition is False.</li>
                    <li><b>elif</b> is for multiple conditions.</li>
                    <li>if-else can be nested for complex decision logic.</li>
                </ul>
                <b>Happy learning Python!</b>
            </p>
            <button class="next-button" onclick="window.location.href='pyLoops.html'">
                Next: Loops
            </button>
        </div>
    `;
    const editors = [
        {
            containerId: 'monaco-container-ifelse-basic',
            buttonId: 'run-btn-ifelse-basic',
            outputId: 'output-ifelse-basic',
            defaultCode: 'x = 10\nif x > 5:\n    print("x is greater than 5")'
        },
        {
            containerId: 'monaco-container-ifelse-else',
            buttonId: 'run-btn-ifelse-else',
            outputId: 'output-ifelse-else',
            defaultCode: 'x = 3\nif x > 5:\n    print("x is greater than 5")\nelse:\n    print("x is not greater than 5")'
        },
        {
            containerId: 'monaco-container-ifelse-positive',
            buttonId: 'run-btn-ifelse-positive',
            outputId: 'output-ifelse-positive',
            defaultCode: 'number = -7\nif number > 0:\n    print("Positive number")\nelse:\n    print("Negative number or zero")'
        },
        {
            containerId: 'monaco-container-ifelse-pass',
            buttonId: 'run-btn-ifelse-pass',
            outputId: 'output-ifelse-pass',
            defaultCode: 'score = 75\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")'
        },
        {
            containerId: 'monaco-container-ifelse-nested',
            buttonId: 'run-btn-ifelse-nested',
            outputId: 'output-ifelse-nested',
            defaultCode: 'number = 0\nif number > 0:\n    print("Positive number")\nelse:\n    if number == 0:\n        print("Zero")\n    else:\n        print("Negative number")'
        },
        {
            containerId: 'monaco-container-ifelse-elif',
            buttonId: 'run-btn-ifelse-elif',
            outputId: 'output-ifelse-elif',
            defaultCode: 'score = 85\nif score >= 90:\n    print("Grade A")\nelif score >= 80:\n    print("Grade B")\nelif score >= 70:\n    print("Grade C")\nelse:\n    print("Grade D")'
        },
    ];

    setupMonacoEditors(editors);
}

renderTutorials()
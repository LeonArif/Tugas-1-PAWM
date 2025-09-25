function renderTutorials() {
    const container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div class="tutorial" id='python-functions'>
            <h1>Python Functions Tutorial</h1>
            <h2>Introduction</h2>
            <p>
                Functions are reusable blocks of code that perform a specific task. They help organize code, avoid repetition, and make programs easier to understand.
            </p>

            <h2>Defining a Function</h2>
            <p>
                Use <code>def</code> to define a function.
            </p>
            ${codeRunner('func-define', 
                'def say_hello():\n    print("Hello!")\nsay_hello()', 
                'Try defining and calling a function:')
            }

            <h2>Function Parameters</h2>
            <p>
                Pass data into functions using parameters.
            </p>
            ${codeRunner('func-params', 
                'def greet(name):\n    print("Hello", name)\ngreet("Python")', 
                'Try function with parameters:')
            }

            <h2>Returning a Value</h2>
            <p>
                Use <code>return</code> to send a result back to the caller.
            </p>
            ${codeRunner('func-return', 
                'def add(a, b):\n    return a + b\nresult = add(5, 7)\nprint(result)', 
                'Try function with return value:')
            }

            <h2>Default Parameter Values</h2>
            <p>
                You can set default values for parameters.
            </p>
            ${codeRunner('func-default', 
                'def greet(name="World"):\n    print("Hello", name)\ngreet()\ngreet("Alice")', 
                'Try default parameter values:')
            }

            <h2>Multiple Parameters</h2>
            <p>
                Functions can take multiple arguments.
            </p>
            ${codeRunner('func-multi', 
                'def multiply(x, y):\n    print(x * y)\nmultiply(3, 4)', 
                'Try multiple parameters:')
            }

            <h2>Function with a List Argument</h2>
            <p>
                You can pass lists to functions.
            </p>
            ${codeRunner('func-list', 
                'def print_items(items):\n    for item in items:\n        print(item)\nprint_items(["apple", "banana", "cherry"])', 
                'Try passing a list to a function:')
            }

            <h2>Returning Multiple Values</h2>
            <p>
                A function can return more than one value using tuples.
            </p>
            ${codeRunner('func-multireturn', 
                'def min_max(numbers):\n    return min(numbers), max(numbers)\nresult = min_max([4, 7, 2, 9])\nprint("Min:", result[0])\nprint("Max:", result[1])', 
                'Try returning multiple values:')
            }

            <h2>Summary</h2>
            <p>
                <ul>
                    <li>Functions help organize code and reduce repetition.</li>
                    <li>Parameters let you pass data to functions.</li>
                    <li><i>return</i> sends results back to the caller.</li>
                    <li>Functions can take lists and return multiple values.</li>
                </ul>
                <b>Practice writing your own functions to master Python programming!</b>
                <br>
                <br>
                <b>Now Let's do a quick review for all the things we've learned.</b>
            </p>
            <button class="next-button" onclick="window.location.href='pyExcercise.html'">
                Next: Excercise
            </button>
        </div>
    `;
    const editors = [
        {
            containerId: 'monaco-container-func-define',
            buttonId: 'run-btn-func-define',
            outputId: 'output-func-define',
            defaultCode: 'def say_hello():\n    print("Hello!")\nsay_hello()'
        },
        {
            containerId: 'monaco-container-func-params',
            buttonId: 'run-btn-func-params',
            outputId: 'output-func-params',
            defaultCode: 'def greet(name):\n    print("Hello", name)\ngreet("Python")'
        },
        {
            containerId: 'monaco-container-func-return',
            buttonId: 'run-btn-func-return',
            outputId: 'output-func-return',
            defaultCode: 'def add(a, b):\n    return a + b\nresult = add(5, 7)\nprint(result)'
        },
        {
            containerId: 'monaco-container-func-default',
            buttonId: 'run-btn-func-default',
            outputId: 'output-func-default',
            defaultCode: 'def greet(name="World"):\n    print("Hello", name)\ngreet()\ngreet("Alice")'
        },
        {
            containerId: 'monaco-container-func-multi',
            buttonId: 'run-btn-func-multi',
            outputId: 'output-func-multi',
            defaultCode: 'def multiply(x, y):\n    print(x * y)\nmultiply(3, 4)'
        },
        {
            containerId: 'monaco-container-func-list',
            buttonId: 'run-btn-func-list',
            outputId: 'output-func-list',
            defaultCode: 'def print_items(items):\n    for item in items:\n        print(item)\nprint_items(["apple", "banana", "cherry"])'
        },
        {
            containerId: 'monaco-container-func-multireturn',
            buttonId: 'run-btn-func-multireturn',
            outputId: 'output-func-multireturn',
            defaultCode: 'def min_max(numbers):\n    return min(numbers), max(numbers)\nresult = min_max([4, 7, 2, 9])\nprint("Min:", result[0])\nprint("Max:", result[1])'
        },
    ];

    setupMonacoEditors(editors);
}

renderTutorials()
function renderTutorials() {
    const container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div class="tutorial" id='python-arrays'>
            <h1>Python Arrays (Lists) Tutorial</h1>
            <h2>Introduction</h2>
            <p>
                In Python, the most common way to store sequences of items is by using <b>lists</b>. Lists can hold any data type, are ordered, and can be changed after creation.
            </p>

            <h2>Creating a List</h2>
            <p>
                Use square brackets <code>[]</code> to create a list.
            </p>
            ${codeRunner('list-create', 
                'numbers = [10, 20, 30, 40]\nprint(numbers)', 
                'Try creating a list:')
            }

            <h2>Accessing Elements</h2>
            <p>
                Access list items by their index. Indexing starts from 0.
            </p>
            ${codeRunner('list-access', 
                'numbers = [10, 20, 30, 40]\nprint(numbers[0])\nprint(numbers[2])', 
                'Try accessing list elements:')
            }

            <h2>Changing Elements</h2>
            <p>
                Lists are mutable, so you can change individual elements.
            </p>
            ${codeRunner('list-change', 
                'numbers = [10, 20, 30, 40]\nnumbers[1] = 99\nprint(numbers)', 
                'Try changing list elements:')
            }

            <h2>Adding Elements</h2>
            <p>
                Use <code>append()</code> to add an element at the end.
            </p>
            ${codeRunner('list-append', 
                'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers)', 
                'Try appending to a list:')
            }

            <h2>Removing Elements</h2>
            <p>
                Use <code>remove()</code> to remove a specific element.
            </p>
            ${codeRunner('list-remove', 
                'numbers = [10, 20, 30, 40]\nnumbers.remove(20)\nprint(numbers)', 
                'Try removing from a list:')
            }

            <h2>List Length</h2>
            <p>
                Use <code>len()</code> to get the number of elements in a list.
            </p>
            ${codeRunner('list-length', 
                'numbers = [10, 20, 30, 40]\nprint(len(numbers))', 
                'Try getting list length:')
            }

            <h2>Looping Through a List</h2>
            <p>
                Use a for loop to process every element.
            </p>
            ${codeRunner('list-loop', 
                'numbers = [10, 20, 30]\nfor n in numbers:\n    print(n)', 
                'Try looping through a list:')
            }

            <h2>List Slicing</h2>
            <p>
                Get a part of the list by slicing: <code>list[start:end]</code>
            </p>
            ${codeRunner('list-slice', 
                'numbers = [0, 1, 2, 3, 4, 5]\nprint(numbers[2:5])', 
                'Try list slicing:')
            }

            <h2>Nesting Lists</h2>
            <p>
                Lists can contain other lists (nested lists).
            </p>
            ${codeRunner('list-nest', 
                'matrix = [[1, 2], [3, 4], [5, 6]]\nprint(matrix[1][0])', 
                'Try nested lists:')
            }

            <h2>Summary</h2>
            <p>
                <ul>
                    <li>Lists store ordered, mutable collections.</li>
                    <li>Elements can be accessed, changed, added, and removed.</li>
                    <li>Lists can be sliced and nested.</li>
                </ul>
                <b>Practice with lists to master Python data handling!</b>
            </p>
            <button class="next-button" onclick="window.location.href='pyFunctions.html'">
                Next: Functions Tutorial
            </button>
        </div>
    `;
    const editors = [
        {
            containerId: 'monaco-container-list-create',
            buttonId: 'run-btn-list-create',
            outputId: 'output-list-create',
            defaultCode: 'numbers = [10, 20, 30, 40]\nprint(numbers)'
        },
        {
            containerId: 'monaco-container-list-access',
            buttonId: 'run-btn-list-access',
            outputId: 'output-list-access',
            defaultCode: 'numbers = [10, 20, 30, 40]\nprint(numbers[0])\nprint(numbers[2])'
        },
        {
            containerId: 'monaco-container-list-change',
            buttonId: 'run-btn-list-change',
            outputId: 'output-list-change',
            defaultCode: 'numbers = [10, 20, 30, 40]\nnumbers[1] = 99\nprint(numbers)'
        },
        {
            containerId: 'monaco-container-list-append',
            buttonId: 'run-btn-list-append',
            outputId: 'output-list-append',
            defaultCode: 'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers)'
        },
        {
            containerId: 'monaco-container-list-remove',
            buttonId: 'run-btn-list-remove',
            outputId: 'output-list-remove',
            defaultCode: 'numbers = [10, 20, 30, 40]\nnumbers.remove(20)\nprint(numbers)'
        },
        {
            containerId: 'monaco-container-list-length',
            buttonId: 'run-btn-list-length',
            outputId: 'output-list-length',
            defaultCode: 'numbers = [10, 20, 30, 40]\nprint(len(numbers))'
        },
        {
            containerId: 'monaco-container-list-loop',
            buttonId: 'run-btn-list-loop',
            outputId: 'output-list-loop',
            defaultCode: 'numbers = [10, 20, 30]\nfor n in numbers:\n    print(n)'
        },
        {
            containerId: 'monaco-container-list-slice',
            buttonId: 'run-btn-list-slice',
            outputId: 'output-list-slice',
            defaultCode: 'numbers = [0, 1, 2, 3, 4, 5]\nprint(numbers[2:5])'
        },
        {
            containerId: 'monaco-container-list-nest',
            buttonId: 'run-btn-list-nest',
            outputId: 'output-list-nest',
            defaultCode: 'matrix = [[1, 2], [3, 4], [5, 6]]\nprint(matrix[1][0])'
        },
    ];

    setupMonacoEditors(editors);
}

renderTutorials()
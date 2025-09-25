function renderTutorials() {
    const container = document.getElementById('tutorial-content');
    container.innerHTML = `
        <div class="tutorial" id="python-intro">
            <h1>Welcome to Python Programming</h1>
            <h2>What is Python?</h2>
            <p>
                Python is a popular, easy-to-learn programming language known for its readability and versatility. It is widely used for web development, data science, automation, artificial intelligence, and more.<br>
                Python was created by Guido van Rossum and first released in 1991. Its simple syntax makes it ideal for beginners and professionals alike.
            </p>

            <h2>Why Learn Python?</h2>
            <ul>
                <li><b>Easy to Read:</b> Python code is clean and straightforward, making it accessible for new programmers.</li>
                <li><b>Versatile:</b> Python can be used for building websites, analyzing data, automating tasks, creating games, and much more.</li>
                <li><b>Large Community:</b> Python has a huge community and countless resources for learning and troubleshooting.</li>
                <li><b>In-Demand:</b> Python is one of the most sought-after programming languages in tech jobs today.</li>
            </ul>

            <h2>What Will You Learn?</h2>
            <ul>
                <li>Basic Python syntax</li>
                <li>Variables and data types</li>
                <li>Control flow: if-else statements, loops</li>
                <li>Working with lists (arrays), functions</li>
                <li>And much more!</li>
            </ul>

            <h2>Try Python Now!</h2>
            <p>
                Here is a simple example. Click "Try it!" to run the code:
            </p>
            ${codeRunner('intro-hello', 'print("Hello, Python!")', 'Try your first Python code:')}

            <h2>Ready to Start?</h2>
            <p>
                Click the button below to start with <b>Python If-Else</b> basics!
            </p>
            <button class="next-button" onclick="window.location.href='pyIfElse.html'">
                Start Python If-Else Tutorial
            </button>
        </div>
    `;
    const editors = [
        {
            containerId: 'monaco-container-intro-hello',
            buttonId: 'run-btn-intro-hello',
            outputId: 'output-intro-hello',
            defaultCode: 'print("Hello, Python!")'
        },
    ];

    setupMonacoEditors(editors);
}

renderTutorials()
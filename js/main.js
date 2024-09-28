window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);

    const randomTexts = [
        "Lorem.",
        "Lorem ipsum.",
        "Lorem ipsum dolor.",
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet, consectetur.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices tortor.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis sapien placerat.",
    ];

    const generateButton = document.getElementById('generateButton');
    const wordCountInput = document.getElementById('wordCount');

    generateButton.addEventListener('click', () => {
        const wordCount = parseInt(wordCountInput.value, 10);
        alert(randomTexts[wordCount]);
    });
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}


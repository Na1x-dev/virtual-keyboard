var mainBlock = document.createElement('div');
var header = document.createElement('h1');
var outputBlock = document.createElement('div');
var inputBlock = document.createElement('div');
var outputField = document.createElement('textarea');
var inputLines = [];

const keyCodes = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Delete'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

const russianLayout = [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift', '↑', 'Del'],
    ['Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
];

const russianShiftLayout = [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift', '↑', 'Del'],
    ['Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
];

const englishLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑', 'Del'],
    ['Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
];

const englisShiftLayout = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', '↑', 'Del'],
    ['Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
];

const multiplierWidth = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.3],
    [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'auto'],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'auto'],
    ['auto', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1.6, 1, 1, 'auto', 1, 1.6, 1, 1, 1]
];

var layouts = [[englishLayout, englisShiftLayout], [russianLayout, russianShiftLayout]];

mainBlock.className = 'main-block';
header.className = 'main-header';
outputBlock.className = 'output-block';
outputField.className = 'output-field';
inputBlock.className = 'input-block';
outputField.readOnly = 'readonly';

header.innerHTML = "Virtual Keyboard";

document.body.append(mainBlock);
mainBlock.appendChild(header);
mainBlock.appendChild(outputBlock);
outputBlock.appendChild(outputField);
mainBlock.appendChild(inputBlock);

// function handleKeyDown(event) {
//     var key = event.key;
//     console.log(key);
// }

function createInputLines() {
    for (let i = 0; i < 5; i++) {
        var line = document.createElement('div');
        line.className = 'input-line';
        inputBlock.appendChild(line);
        inputLines.push(line);
    }
}

function createVirtualKeys(layout) {
    for (let i = 0; i < layout.length; i++) {
        let j = 0;
        for (let key of layout[i]) {
            var keyDiv = document.createElement('div');
            keyDiv.className = 'key-div';
            keyDiv.innerHTML = key;
            inputLines[i].appendChild(keyDiv);
            if (multiplierWidth[i][j] !== 'auto') {
                keyDiv.style.minWidth = keyDiv.offsetHeight * multiplierWidth[i][j] + "px";
            } else {
                keyDiv.style.width = '100%';
            }
            j++;
        }
    }
}

// function writeToTheOutputField(i, j){
//     if
//     outputField.value += englishLayout[i][j];
// }

function getKeyDiv(i, j) {
    return inputLines[i].getElementsByClassName('key-div')[j]
}

function changeLayout(language, shift) {
    var layout = layouts[language][shift];
    for (let i = 0; i < layout.length; i++) {
        let j = 0;
        for (let key of layout[i]) {
            getKeyDiv(i, j).innerHTML = key;
            j++;
        }
    }
}

function setPressedButtonColor(i, j) {
    getKeyDiv(i, j).style.backgroundColor = "#eee";
    getKeyDiv(i, j).style.color = "#333";
}

function setUnpressedButtonColor(i, j) {
    getKeyDiv(i, j).style.backgroundColor = "#557";
    getKeyDiv(i, j).style.color = "#eee";
}

function setHoverButtonColor(i, j) {
    getKeyDiv(i, j).style.backgroundColor = '#446';
    getKeyDiv(i, j).style.color = "#eee";
}


function setEventListenerToVirtualKey() {
    for (let i = 0; i < keyCodes.length; i++) {
        for (let j = 0; j < keyCodes[i].length; j++) {

            getKeyDiv(i, j).addEventListener("mousedown", function () {
                setPressedButtonColor(i, j);
                
            });
            getKeyDiv(i, j).addEventListener("mouseup", function () {
                setUnpressedButtonColor(i, j);
            });
            getKeyDiv(i, j).addEventListener("mouseover", function () {
                setHoverButtonColor(i, j);
            });
            getKeyDiv(i, j).addEventListener("mouseout", function () {
                setUnpressedButtonColor(i, j);
            });
        }
    }
}

document.addEventListener('keydown', function (event) {
    for (let i = 0; i < keyCodes.length; i++) {
        for (let j = 0; j < keyCodes[i].length; j++)
            if (event.code == keyCodes[i][j]) {
                setPressedButtonColor(i, j);
                if (event.shiftKey) {
                    changeLayout(0, 1);
                }
            }
    }
});

document.addEventListener('keyup', function (event) {
    for (let i = 0; i < keyCodes.length; i++) {
        for (let j = 0; j < keyCodes[i].length; j++)
            if (event.code === keyCodes[i][j]) {
                setUnpressedButtonColor(i, j);
                if (!event.shiftKey) {
                    changeLayout(0, 0);
                }
            }
    }
});

function main() {

    createInputLines();
    createVirtualKeys(englishLayout);

    outputBlock.style.width = inputBlock.offsetWidth - 26 + "px";
    setEventListenerToVirtualKey();
}

main();


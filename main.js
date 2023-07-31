var mainBlock = document.createElement('div');
var header = document.createElement('h1');
var outputBlock = document.createElement('div');
var inputBlock = document.createElement('div');
var outputField = document.createElement('textarea');
var themeButtonContainer = document.createElement('div');
var inputLines = [];
var shiftPressed = 0;
var colorRound = document.createElement('div');
//background, field, text, hover, active

let themeColor = {
    generalColor: '#557',
    blockColor: '#668',
    textColor: '#eee',
    hoverColor: '#446',
    clickedColor: '#333'
};

var themeColors =     [['#558', '#669', '#eee', '#447', '#333'],
['#588', '#699', '#eee', '#477', '#333'],
['#585', '#696', '#eee', '#474', '#333'],
['#885', '#996', '#eee', '#774', '#333'],
['#855', '#966', '#eee', '#744', '#333'],
['#eee', '#eee', '#333', '#999', '#eee'],
['#333', '#333', '#eee', '#555', '#333']];

var chosedTheme = 0;

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

themeButtonContainer.className = 'theme-button-container';
mainBlock.className = 'main-block';
header.className = 'main-header';
outputBlock.className = 'output-block';
outputField.className = 'output-field';
inputBlock.className = 'input-block';
colorRound.className = 'color-round';
outputField.readOnly = 'readonly';

header.innerHTML = "Virtual Keyboard";

document.body.appendChild(themeButtonContainer);
document.body.append(mainBlock);
mainBlock.appendChild(header);
mainBlock.appendChild(outputBlock);
outputBlock.appendChild(outputField);
mainBlock.appendChild(inputBlock);
mainBlock.appendChild(colorRound);

function createInputLines() {
    for (let i = 0; i < 5; i++) {
        var line = document.createElement('div');
        line.className = 'input-line';
        inputBlock.appendChild(line);
        inputLines.push(line);
    }
}

function colorFillAnimation() {
    colorRound.style.transitionDuration = '0s';
    colorRound.style.opacity = '1';
    colorRound.style.zIndex = '10';
    colorRound.style.backgroundColor = themeColors[chosedTheme][0];
    setTimeout(() => {
        colorRound.style.transitionDuration = '1s';
        colorRound.style.width = '200vw';
        colorRound.style.height = '200vw';
    }, 1);

    setTimeout(function () {
        changeTheme();
        colorRound.style.opacity = 0;
        colorRound.style.zIndex = '-1';

    }, 300);
    setTimeout(() => {
        colorRound.style.width = '0';
        colorRound.style.height = '0';
        colorRound.style.transitionDuration = '0s';
    }, 1000);


}

function createThemeButtons() {
    for (let i = 0; i < themeColors.length; i++) {
        var themeButton = document.createElement('div');
        themeButton.className = 'theme-button';
        themeButton.onclick = function () {
            chosedTheme = i;
            colorFillAnimation();

        };
        themeButton.style.backgroundColor = themeColors[i][0];
        themeButton.style.borderColor = themeColors[i][2];
        themeButtonContainer.appendChild(themeButton);
    }
}

function changeTheme() {
    document.body.style.backgroundColor = themeColors[chosedTheme][0];
    outputField.style.backgroundColor = themeColors[chosedTheme][1];
    outputField.style.color = themeColors[chosedTheme][2];
    inputBlock.style.backgroundColor = themeColors[chosedTheme][1];
    outputField.style.borderColor = themeColors[chosedTheme][3];
    inputBlock.style.borderColor = themeColors[chosedTheme][3];
    themeButtonContainer.style.backgroundColor = themeColors[chosedTheme][1];
    themeButtonContainer.style.borderColor = themeColors[chosedTheme][3];
    header.style.color = themeColors[chosedTheme][2];
    for (let i = 0; i < keyCodes.length; i++) {
        for (let j = 0; j < keyCodes[i].length; j++) {
            getKeyDiv(i, j).style.backgroundColor = themeColors[chosedTheme][0];
            getKeyDiv(i, j).style.borderColor = themeColors[chosedTheme][3];
            getKeyDiv(i, j).style.color = themeColors[chosedTheme][2];


        }
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

function writeToTheOutputField(i, j) {

    if (keyCodes[i][j].includes('Digit') || keyCodes[i][j].includes('Key') || keyCodes[i][j] === 'Backquote' || keyCodes[i][j] === 'Minus' || keyCodes[i][j] === 'Equal' || keyCodes[i][j] === 'BracketLeft' || keyCodes[i][j] === 'BracketRight' || keyCodes[i][j] === 'Backslash' || keyCodes[i][j] === 'Semicolon' || keyCodes[i][j] === 'Quote' || keyCodes[i][j] === 'Comma' || keyCodes[i][j] === 'Period' || keyCodes[i][j] === 'Slash' || keyCodes[i][j] === 'Space') {
        outputField.value += layouts[0][shiftPressed][i][j];
    }
    else if (keyCodes[i][j] === 'Backspace') {
        outputField.value = outputField.value.slice(0, -1);
    }
}

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
    getKeyDiv(i, j).style.backgroundColor = themeColors[chosedTheme][2];
    getKeyDiv(i, j).style.color = themeColors[chosedTheme][4];
    if (keyCodes[i][j] === 'Shift') {
        shiftPressed = 1;
    }
}

function setUnpressedButtonColor(i, j) {
    getKeyDiv(i, j).style.backgroundColor = themeColors[chosedTheme][0];
    getKeyDiv(i, j).style.color = themeColors[chosedTheme][2];
}

function setHoverButtonColor(i, j) {
    getKeyDiv(i, j).style.backgroundColor = themeColors[chosedTheme][3];
    getKeyDiv(i, j).style.color = themeColors[chosedTheme][2];
}

function setUnPressedButtonColorWithMouse(i, j) {
    getKeyDiv(i, j).style.backgroundColor = themeColors[chosedTheme][3];
    getKeyDiv(i, j).style.color = themeColors[chosedTheme][2];
}

function setUnHoverButtonColor(i, j) {
    getKeyDiv(i, j).style.backgroundColor = themeColors[chosedTheme][0];
    getKeyDiv(i, j).style.color = themeColors[chosedTheme][2];
}

function checkShiftForMouse(i, j, shiftPressedDefault) {
    if (keyCodes[i][j] === 'ShiftLeft' || keyCodes[i][j] === 'ShiftRight') {
        shiftPressed = shiftPressedDefault;
    }
}


function setEventListenerToVirtualKey() {
    for (let i = 0; i < keyCodes.length; i++) {
        for (let j = 0; j < keyCodes[i].length; j++) {
            getKeyDiv(i, j).addEventListener("mousedown", function () {
                checkShiftForMouse(i, j, 1);
                changeLayout(0, shiftPressed);
                writeToTheOutputField(i, j);
                setPressedButtonColor(i, j);
            });
            getKeyDiv(i, j).addEventListener("mouseup", function () {
                checkShiftForMouse(i, j, 0);
                setUnPressedButtonColorWithMouse(i, j);
                changeLayout(0, shiftPressed);
            });
            getKeyDiv(i, j).addEventListener("mouseover", function () {
                setHoverButtonColor(i, j);
            });
            getKeyDiv(i, j).addEventListener("mouseout", function () {
                setUnHoverButtonColor(i, j);
            });
        }
    }
}

document.addEventListener('keydown', function (event) {
    for (let i = 0; i < keyCodes.length; i++) {
        for (let j = 0; j < keyCodes[i].length; j++)
            if (event.code == keyCodes[i][j]) {
                if (event.shiftKey) {
                    shiftPressed = 1;
                }
                writeToTheOutputField(i, j);
                setPressedButtonColor(i, j);
                changeLayout(0, shiftPressed);
            }
    }
});

document.addEventListener('keyup', function (event) {
    for (let i = 0; i < keyCodes.length; i++) {
        for (let j = 0; j < keyCodes[i].length; j++)
            if (event.code === keyCodes[i][j]) {
                if (!event.shiftKey) {
                    shiftPressed = 0;
                }
                setUnpressedButtonColor(i, j);
                changeLayout(0, shiftPressed);

            }
    }
});

function main() {
    createThemeButtons();
    createInputLines();
    createVirtualKeys(englishLayout);
    changeTheme();
    outputBlock.style.width = inputBlock.offsetWidth - 26 + "px";
    setEventListenerToVirtualKey();
}

main();


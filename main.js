var mainBlock = document.createElement('div');
var header = document.createElement('h1');
var outputBlock = document.createElement('div');
var inputBlock = document.createElement('div');
var outputField = document.createElement('textarea');
var inputLines = [];

const keyCodes = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

const russianLayout = [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift'],
    ['Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
];

const englishLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→']
];

let keys =
    [['`', '1', '2', '3'],
    [],
    [],
    [],
    []];

mainBlock.className = 'main-block';
header.className = 'main-header';
outputBlock.className = 'output-block';
outputField.className = 'output-field';
inputBlock.className = 'input-block';

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

function createInputLines(){
    for(let i=0; i<5; i++){
        var line = document.createElement('div');
        line.className = 'input-line';
        inputBlock.appendChild(line);
        inputLines.push(line);
    }
}

function createVirtualKeys(layout) {
    for (let i = 0; i < layout.length; i++) {
        for (let key of layout[i]) {
            var keyDiv = document.createElement('div');
            keyDiv.className = 'key-div';
            keyDiv.appendChild(document.createTextNode(key));
            inputLines[i].appendChild(keyDiv);

            keyDiv.style.width = keyDiv.offsetHeight + "px";
            inputLines[i].appendChild(keyDiv);
            // console.log(keyDiv.offsetW);            
        }
    }
}

function main(){
    createInputLines();
    createVirtualKeys(englishLayout);
}

main();


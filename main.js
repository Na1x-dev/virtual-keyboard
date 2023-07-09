var mainBlock = document.createElement('div');
var header = document.createElement('h1');
var outputBlock = document.createElement('div');
var inputBlock = document.createElement('div');
var outputField = document.createElement('textarea');


mainBlock.className = 'main-block';
header.className = 'main-header';
outputBlock.className = 'output-block';
outputField.className = 'output-field';
inputBlock.className = 'input-block';
// outputField.cols = '500';

header.innerHTML = "Virtual Keyboard";

document.body.append(mainBlock);
mainBlock.appendChild(header);
mainBlock.appendChild(outputBlock);
outputBlock.appendChild(outputField);
mainBlock.appendChild(inputBlock);


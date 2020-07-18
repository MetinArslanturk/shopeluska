const axios = require('axios');
const { exec } = require('child_process');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function myExec() {
    const child = exec('npm test', ['test']);

    child.stderr.on('data', function (data) {
        console.log(`${data.toString()}`);
    });

    child.stdout.pipe(process.stdout);
}

function startTests() {
    axios.get('http://localhost:8081/shopeluska-api/bereadyfortests').then(
        (res) => {
            console.log('DB ready for test');
            myExec();
        },
        (err) => {
            console.log('ERROR');
            console.log(err);
        }
    );
}

process.stdin.on('keypress', (str, key) => {
    if (str === 'h') {
        startTests();
    }

    if (str === 'j' || (key.ctrl && key.name === 'c')) {
        process.exit();
    }
});
startTests();

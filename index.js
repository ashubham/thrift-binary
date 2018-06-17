const
    child_process = require('child_process'),
    os = require('os'),
    fs = require('fs'),
    path = require('path');

let platform = os.platform();
let THRIFT_BIN = path.join(__dirname, `bin/thrift_${platform}`);
let supported = true;

try {
    fs.accessSync(THRIFT_BIN, fs.constants.F_OK);
} catch (e) {
    console.log('Thrift Binary does not support your platform yet!');
    supported = false;
}

function spawn(args) {
    if(!supported) {
        console.log('Thrift Binary does not support your platform yet!');
        return;
    }
    child_process.spawn(THRIFT_BIN,
        args,
        {stdio: [process.stdin, process.stdout, process.stderr]});
}

module.exports = {
    spawn
};
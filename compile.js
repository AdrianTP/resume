var exec = require('child_process').exec;

var run = function(cmd, max) {
    var max = max != null ? max : 10000;
    var timeout;
    var p = exec(cmd, function(error, stdout, stderr) {
        stdout != null && console.log(stdout);
        error != null && console.log(error);
        stderr != null && console.log(stderr);
    }).on('exit', function(code) {
        console.log('done: ' + cmd);
        clearTimeout(timeout);
    });

    timeout = setTimeout(function() {
        console.log('killing: ' + cmd);
        p.kill();
    }, max);
}
//run("coffee -c *.coffee",1000);
run("sass --update --scss sass:css");
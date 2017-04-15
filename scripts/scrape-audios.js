#!/usr/bin/nodejs
var exec = require('child_process').exec;

exec('jekyll build ..', function (error, stdout, stderr) {
    console.log(stdout);
    require('fs').readFile('../_site/stolpersteine.json', function (err, data) {
        if (err) {
            console.log('OH NO');
            throw err;
        } else {
            data;
            json = JSON.parse(data);
            json.forEach(function(item, index){
                if(item.audio){
                    console.log(item.audio);
                    exec('wget ' + item.audio + ' -P ../audio/');
                }
            });
        }
    });
});
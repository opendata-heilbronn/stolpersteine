#!/usr/bin/nodejs
var exec = require('child_process').exec;
var fs = require('fs');
var folder = '../_list/';

fs.readdir(folder, function(err, files) {
    files.forEach(function(filename) {
    fs.readFile(folder + filename, function (err, data) {
        if (err) {
            return console.log(err);
        } else {
                file = data.toString().replace('audio: http://stolpersteine-heilbronn.de', 'audio: ');
                fs.writeFile(folder + filename, file, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("saved: " + filename);
                }); 

            }
});
    });
    });
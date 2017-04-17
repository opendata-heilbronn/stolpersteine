#!/usr/bin/nodejs
var exec = require('child_process').exec;
var fs = require('fs');

function a() {
    fs.mkdir("./import_from_geojson",function(e){
    if(e) {
        console.log(e);
    }
});

    fs.readFile('../Stolpersteine\ Kitzingen.geojson', function (err, data) {
        if (err) {
            console.log('OH NO');
            throw err;
        } else {
            json = JSON.parse(data);
            json.features.forEach(function(item, index){
                var file = "---\n" +
                "title: \"" + item.properties.name +
                "images: [\"" + item.properties.gx_media_links + "\"]\n" +
                "x: " + item.geometry.coordinates[1] + "\n" +
                "y: " + item.geometry.coordinates[0] + "\n---\n\n" + 
                item.properties.description;
                var name = "./import_from_geojson/" + item.properties.name + ".md";
                fs.writeFile(name, file, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("saved: " + name);
                }); 

            });
        }
    });
}
a();
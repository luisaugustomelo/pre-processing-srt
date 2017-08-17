var ffmpeg = require('fluent-ffmpeg');
var fs = require('fs');

//var stream  = fs.createWriteStream('outputfile1.mp4');

var command = ffmpeg(fs.createReadStream('./aula.mp4')).outputOptions([
    '-v quiet',
    '-y',
    '-i', 'input.ts',
    '-vcodec', 'copy',
    '-acodec', 'copy',
    '-ss', '00:00:00',
    '-t', '00:30:00',
    '-sn', 'test1.mkv'
]);

console.log(command);
/*var proc = new ffmpeg({source: firstFile, nolog: true})
        .output(stream)
            .seek(30);*/

//console.log(command);


fs.readdirSync('./').forEach(file => {
    //console.log(file);
})

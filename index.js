var fs = require('graceful-fs');
var path = require('path');
const filePath = 'data/output.txt';

if (process.argv.length <= 2) {
    console.error('Usage: npm start [path]');
    process.exit(1);
}

fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    else {
        for (var i = 0; i < list.length; i++) {
            action(path.join(process.argv[2], list[i]), list[i]);
        }
    }
});

function action(fullpath, basename) {
    fs.stat(fullpath, function (err, stats) {
        if (err) {
            console.error(err);
        }
        else if (stats.isFile()) {
        //    console.log(basename);
            listName = basename + '\n';
            fs.appendFile(filePath, listName, 'utf8', function(err) {
                if (err) {
                    throw err;
                }
            });
         }
    });
}
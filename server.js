var http = require('http');
var edge = require('edge');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.write("Are AppSetting's available to Node.exe? \n");
    res.write("AnAppSetting = " + process.env.AnAppSetting + "\n");
    res.write("\n");
    
    res.write("Are AppSetting's available to C# code invoked by Edge.js? \n");

    getSetting(null, function (error, value) {
        if (error) {
            res.end(error.message);
            return;
        }

        res.write("AnAppSetting = " + value + "\n");
        res.end('\n');
    });
    
}).listen(port);

var getSetting = edge.func({
    assemblyFile: __dirname + "/Edge-AppSettings-Service/bin/Debug/Edge-AppSettings-Service.dll",
    typeName: 'EdgeAppSettingsService.TestService',
    methodName: 'Invoke'
});

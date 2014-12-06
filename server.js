var http = require('http');
var edge = require('edge');
var port = process.env.port || 1337;

http.createServer(function (req, res) {
    var APPSETTING_KEY = "AnAppSetting";
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.write("Are AppSetting's available to Node.exe? \n");
    res.write(APPSETTING_KEY + " = " + process.env[APPSETTING_KEY] + "\n");
    res.write("\n");
    
    res.write("Are AppSetting's available to C# code invoked by Edge.js? \n");

    getSetting(APPSETTING_KEY, function (error, value) {
        if (error) {
            res.end(error.message);
            return;
        }

        res.write(APPSETTING_KEY + " = " + value + "\n");
        
        res.write("\n");    
        res.write(process.toString());
        res.write(process.toString());

        res.end('\n');
    });
    
}).listen(port);

var getSetting = edge.func({
    assemblyFile: __dirname + "/Edge-AppSettings-Service/bin/Debug/Edge-AppSettings-Service.dll",
    typeName: 'EdgeAppSettingsService.AppSettingService',
    methodName: 'Invoke'
});

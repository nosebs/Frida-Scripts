const base = Process.findModuleByName("libcocos2dcpp.so").base;
const malloc = new NativeFunction(Module.findExportByName("libcocos2dcpp.so", "malloc"), "pointer", ["int"]);

function strPtr(message) {
    var charPtr = malloc(message.length + 1);
    Memory.writeUtf8String(charPtr, message);
    return charPtr
}

Interceptor.attach(base.add(5265368), {
	onEnter: function (args) {
		if (args[1].readUtf8String().match("boomlings")) {
			args[1] = strPtr(args[1].readUtf8String().replace("www.boomlings.com", "brawlstars.com"));
		}
		
	}
});
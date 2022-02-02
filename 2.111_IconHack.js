var Hook = {
  isIconUnlocked: function () {
    Interceptor.replace(Module.findExportByName('libcocos2dcpp.so', '_ZN11GameManager14isIconUnlockedEi8IconType'), new NativeCallback(function() {
      return 1;
    }, 'int', ['int', 'int', 'int']));
  },
  isColorUnlocked: function () {
    Interceptor.replace(Module.findExportByName('libcocos2dcpp.so', '_ZN11GameManager15isColorUnlockedEib'), new NativeCallback(function() {
      return 1;
    }, 'int', ['bool', 'int']));
  },
  getLoadingString: function () {
    //TODO: make this
  },
}

function toast(toastText) {	
	Java.perform(function() { 
		var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();

		Java.scheduleOnMainThread(function() {
				var toast = Java.use("android.widget.Toast");
				toast.makeText(context, Java.use("java.lang.String").$new(toastText), 1).show();
		});
	});
}

rpc.exports = {
  init: function (stage, options) {
    setTimeout(function() {
      
      Hook.isIconUnlocked();
      Hook.isColorUnlocked();
      
      Hook.getLoadingString();
    }, 1000);
  }
}
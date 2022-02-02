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

rpc.exports = {
  init: function (stage, options) {
    setTimeout(function() {
      
      Hook.isIconUnlocked();
      Hook.isColorUnlocked();
      
      Hook.getLoadingString();
    }, 1000);
  }
}

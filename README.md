# WeChatMiniGameTest
Test WeChat mini game's cache mechanism

WeChat distributes 50MB storage spaces to every mini game.If your app runs out of storages spaces,"wx.saveFile" will fail.
In this case,user needs to clean storage spaces manully.

NOTICE:WeChat Dev Tools can not recreate this problem since the cache size on pc is unlimited.

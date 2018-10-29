(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Download.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ea300Io4p9HtagRwdZL1dlD', 'Download', __filename);
// Download.js

'use strict';

var _properties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: (_properties = {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        spriteFrame1: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame2: {
            default: null,
            type: cc.SpriteFrame
        }
    }, _defineProperty(_properties, 'spriteFrame2', {
        default: null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'spriteFrame3', {
        default: null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'spriteFrame4', {
        default: null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'spriteFrame5', {
        default: null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'spriteFrame6', {
        default: null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'spriteFrame7', {
        default: null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'spriteFrame8', {
        default: null,
        type: cc.SpriteFrame
    }), _defineProperty(_properties, 'tick', 0), _properties),

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    update: function update(dt) {
        this.tick++;
        if (this.tick === 600) {
            var self = this;
            cc.loader.loadRes('9', cc.SpriteFrame, function (err, item) {
                self.getComponent(cc.Sprite).spriteFrame = item;
            });
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Download.js.map
        
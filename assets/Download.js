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

    properties: {
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
        },
        spriteFrame2: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame3: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame4: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame5: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame6: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame7: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame8: {
            default: null,
            type: cc.SpriteFrame
        },
        tick:0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    
    },

    update (dt) {
        this.tick++;
        if (this.tick === 600)
        {
            var self = this;
            cc.loader.loadRes('9',cc.SpriteFrame, function (err, item) {
                self.getComponent(cc.Sprite).spriteFrame = item;
            });
        }
    },
});

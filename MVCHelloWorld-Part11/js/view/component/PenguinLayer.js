"use strict";

var res = require('./../ui/Resource.js').res;


var PenguinLayer = cc.Layer.extend({

    winSize: cc.Size(400, 300),

    ctor:function (space) {
        this._super();
    },

    init:function () {
        this._super();




        return true;
    }
});

exports.PenguinLayer = PenguinLayer;
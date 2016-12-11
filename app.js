System.register("DoorGame", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DoorGame;
    return {
        setters: [],
        execute: function () {
            DoorGame = (function () {
                function DoorGame() {
                }
                DoorGame.prototype.Run = function () {
                    var el = document.getElementById("hw");
                    el.innerText = "hello world!";
                };
                return DoorGame;
            }());
            exports_1("DoorGame", DoorGame);
        }
    };
});
/// <reference path="DoorGame.ts"/>
System.register("main", ["DoorGame"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var DoorGame_1;
    return {
        setters: [
            function (DoorGame_1_1) {
                DoorGame_1 = DoorGame_1_1;
            }
        ],
        execute: function () {/// <reference path="DoorGame.ts"/>
            (function () {
                var game = new DoorGame_1.DoorGame();
                game.Run();
            })();
        }
    };
});
//# sourceMappingURL=app.js.map
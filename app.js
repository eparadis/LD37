System.register("Room", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Room;
    return {
        setters: [],
        execute: function () {
            Room = (function () {
                function Room() {
                    this.doorOpenable = [false, true, true, true, true, false];
                    this.playerPosition = 0;
                }
                Room.prototype.openDoor = function (doorId) {
                    this.playerPosition = Number(doorId);
                    console.log(this.playerPosition);
                };
                return Room;
            }());
            exports_1("Room", Room);
        }
    };
});
System.register("RoomView", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var HTMLRoom;
    return {
        setters: [],
        execute: function () {
            HTMLRoom = (function () {
                function HTMLRoom(parent) {
                    this.parent = parent;
                }
                HTMLRoom.prototype.Draw = function (room) {
                    var isOpenable = room.doorOpenable;
                    var playerPosition = room.playerPosition;
                    var numDoors = isOpenable.length;
                    // draw player position
                    var playerParent = document.createElement('div');
                    this.parent.appendChild(playerParent);
                    playerParent.id = 'playerParent';
                    for (var i = 0; i < numDoors; i += 1) {
                        var playerCell = document.createElement('div');
                        playerCell.className = "playerCell";
                        if (i == playerPosition) {
                            playerCell.innerText = "P";
                        }
                        playerParent.appendChild(playerCell);
                    }
                    // draw doors
                    var doorParent = document.createElement('div');
                    this.parent.appendChild(doorParent);
                    doorParent.id = 'doorParent';
                    for (var i = 0; i < numDoors; i += 1) {
                        var btn = document.createElement('button');
                        btn.innerText = i.toString() + (isOpenable[i] ? " open" : " locked");
                        btn.setAttribute('doorNumber', i.toString());
                        if (!isOpenable[i]) {
                            btn.classList.add('disabled');
                        }
                        btn.onclick = function (ev) { room.openDoor(this.getAttribute('doorNumber')); };
                        doorParent.appendChild(btn);
                    }
                };
                return HTMLRoom;
            }());
            exports_2("HTMLRoom", HTMLRoom);
        }
    };
});
System.register("DoorGame", ["Room"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Room_1, DoorGame;
    return {
        setters: [
            function (Room_1_1) {
                Room_1 = Room_1_1;
            }
        ],
        execute: function () {
            DoorGame = (function () {
                function DoorGame(view) {
                    this.view = view;
                }
                DoorGame.prototype.Run = function () {
                    this.view.Draw(new Room_1.Room());
                };
                return DoorGame;
            }());
            exports_3("DoorGame", DoorGame);
        }
    };
});
System.register("main", ["DoorGame", "RoomView"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var DoorGame_1, RoomView_1;
    return {
        setters: [
            function (DoorGame_1_1) {
                DoorGame_1 = DoorGame_1_1;
            },
            function (RoomView_1_1) {
                RoomView_1 = RoomView_1_1;
            }
        ],
        execute: function () {
            (function () {
                var roomView = new RoomView_1.HTMLRoom(document.getElementById('room'));
                var game = new DoorGame_1.DoorGame(roomView);
                game.Run();
            })();
        }
    };
});
//# sourceMappingURL=app.js.map
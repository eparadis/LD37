System.register("Player", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Player;
    return {
        setters: [],
        execute: function () {
            Player = (function () {
                function Player() {
                }
                Player.prototype.move = function (location) {
                    this.position = Number(location);
                    console.log(location);
                };
                return Player;
            }());
            exports_1("Player", Player);
        }
    };
});
System.register("Room", ["Door", "Player"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Door_1, Player_1, Room;
    return {
        setters: [
            function (Door_1_1) {
                Door_1 = Door_1_1;
            },
            function (Player_1_1) {
                Player_1 = Player_1_1;
            }
        ],
        execute: function () {
            Room = (function () {
                function Room() {
                    this.doorOpenable = [false, true, true, true, true, false];
                    this.player = new Player_1.Player();
                }
                Room.prototype.playerIsIn = function (position) {
                    return this.player.position == position;
                };
                Room.prototype.openDoor = function (doorId) {
                    // logic about what happens when you open a door goes here
                    // for now, just move the player to that door, which is 
                    // kinda what would happen some of the time
                    this.player.move(doorId);
                };
                Room.prototype.addDoors = function (doorParent, isOpenable) {
                    var numDoors = isOpenable.length;
                    for (var i = 0; i < numDoors; i += 1) {
                        var name_1 = i.toString();
                        if (i == 0) {
                            name_1 = "entrance";
                        }
                        if (i == numDoors - 1) {
                            name_1 = "exit";
                        }
                        var door = new Door_1.Door(doorParent, name_1, this);
                        if (isOpenable[i]) {
                            door.unlock();
                        }
                    }
                };
                return Room;
            }());
            exports_2("Room", Room);
        }
    };
});
System.register("Door", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Door;
    return {
        setters: [],
        execute: function () {
            Door = (function () {
                function Door(parent, name, room) {
                    this.openable = false;
                    this.name = name;
                    this.btn = document.createElement('button');
                    this.btn.setAttribute('doorNumber', this.name);
                    this.btn.onclick = function (ev) { room.openDoor(name); };
                    this.setAppearance();
                    parent.appendChild(this.btn);
                }
                Door.prototype.unlock = function () {
                    this.openable = true;
                    this.setAppearance();
                };
                Door.prototype.setAppearance = function () {
                    this.btn.innerText = this.name + (this.isOpenable() ? " open" : " locked");
                    this.btn.classList.remove('disabled');
                    if (!this.isOpenable()) {
                        this.btn.classList.add('disabled');
                    }
                };
                Door.prototype.isOpenable = function () {
                    return this.openable;
                };
                return Door;
            }());
            exports_3("Door", Door);
        }
    };
});
System.register("RoomView", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
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
                    var numDoors = isOpenable.length;
                    // draw player position
                    this.drawPlayer(room);
                    // draw doors
                    var doorParent = document.createElement('div');
                    this.parent.appendChild(doorParent);
                    doorParent.id = 'doorParent';
                    room.addDoors(doorParent, isOpenable);
                };
                HTMLRoom.prototype.drawPlayer = function (room) {
                    var playerParent = document.createElement('div');
                    this.parent.appendChild(playerParent);
                    playerParent.id = 'playerParent';
                    for (var i = 0; i < room.doorOpenable.length; i += 1) {
                        var playerCell = document.createElement('div');
                        playerCell.className = "playerCell";
                        if (room.playerIsIn(i)) {
                            playerCell.innerText = "P";
                        }
                        playerParent.appendChild(playerCell);
                    }
                };
                return HTMLRoom;
            }());
            exports_4("HTMLRoom", HTMLRoom);
        }
    };
});
System.register("DoorGame", ["Room"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
                    this.room = new Room_1.Room();
                }
                DoorGame.prototype.Run = function () {
                    this.view.Draw(this.room);
                };
                return DoorGame;
            }());
            exports_5("DoorGame", DoorGame);
        }
    };
});
System.register("main", ["DoorGame", "RoomView"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
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
/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="../src/DoorGame.ts"/>
/// <reference path="../src/RoomView.ts"/>
/// <reference path="../src/Room.ts"/>

import { DoorGame } from '../src/DoorGame';
import { RoomView } from '../src/RoomView';
import { Room } from '../src/Room';
import { assert } from 'chai';

class FakeView implements RoomView {
  Draw( room: Room ) : void {
  }
}

describe('DoorGame', () => {
  beforeEach(() => {
  });

  it('a doorgame can be constructed', () => {
    const testObj = new DoorGame(new FakeView());
    assert.ok(true);
  });


  describe('Run', () => {

    //it('', ()=>{});
  });
});
/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Item = require('../../app/models/item');

describe('Item', function(){
  describe('constructor', function(){
    it('should create a new Item object', function(){
      var o = {name: 'iPod', weight: '2.5', color: 'blue', dimension:{l:'3', w: '5', h:'10'}, quantity:'30', msrp:'200', percentOff:'5'};
      var ipod = new Item(o);
      
      expect(ipod).to.be.instanceof(Item);
      expect(ipod.name).to.equal('iPod');
      expect(ipod.dimension.l).to.equal(3);
      expect(ipod.dimension.w).to.equal(5);
      expect(ipod.dimension.h).to.equal(10);
      expect(ipod.weight).to.closeTo(2.5, 0.1);
      expect(ipod.color).to.equal('blue');
      expect(ipod.quantity).to.equal(30);
      expect(ipod.msrp).to.equal(200);
      expect(ipod.percentOff).to.equal(5);
    });
   });
});

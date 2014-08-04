'use strict';

function Item(o){
  this.name         =o.name;
  this.dimension    ={};
  this.dimension.l  =o.dimension.l * 1;
  this.dimension.w  =o.dimension.w * 1;
  this.dimension.h  =o.dimension.h * 1;
  this.weight = o.weight * 1;
  this.color = o.color;
  this.quantity = o.quantity * 1;
  this.msrp = o.msrp * 1;
  this.percentOff = o.percentOff * 1;
}

module.exports = Item;

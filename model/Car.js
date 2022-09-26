const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Car = db.define('Car', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  modelo:{
    type:DataTypes.STRING,
    required: true
  },
  motor: {
    type: DataTypes.DOUBLE,
    required: true
  },
  ano: {
    type: DataTypes.INTEGER,
    required: true
  },
  fab:{
    type:DataTypes.STRING,
    required: true
  },
  vlr: {
    type: DataTypes.DOUBLE,
    required: true
  },
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  cor:{
    type:DataTypes.STRING,
    required: true
  },
  opc: {
    type: DataTypes.STRING,
    required: true
  },


})

module.exports = Car
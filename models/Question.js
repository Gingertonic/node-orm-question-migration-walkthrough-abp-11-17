'use strict';

const db = require("../config/db")

class Question{
 static CreateTable() {
  //  sql.CREATETABLE
   return new Promise (function(resolve){
   resolve ("Kept my promise!")
  })
 }
}


module.exports = Question;

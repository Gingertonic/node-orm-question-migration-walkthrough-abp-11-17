'use strict';

const db = require("../config/db")

class Question{
 static CreateTable() {
  //  sql.CREATETABLE
   return new Promise (function(resolve){
     sql CREATE TABLE questions (id INTEGER PRIMARY KEY, content TEXT);
   resolve ("Kept my promise!")
  })
 }
}


module.exports = Question;

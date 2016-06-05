var supertest = require("supertest");
var should = require("should");
var expect = require("expect.js");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:80");

// UNIT test begin

 describe("API test",function(){


   it(" / should return greeting message",function(done){

     server
     .get("/")
     .expect("Content-type",/json/)
     .expect(200) // THis is HTTP response
     .end(function(err,res){
       res.status.should.equal(200);
       done();
     });
   });

   it(" /uerpref GET should return array",function(done){

     server
     .get("/userpref")
     .expect("Content-type",/json/)
     .expect(200) 
     .end(function(err,res){
       res.status.should.equal(200);
       expect(res.body).to.be.an( 'array' );


       done();
     });
   });

   it(" /uerpref/:user_id GET should return user preferences ",function(done){

     server
     .get("/userpref/1")
     .expect("Content-type",/json/)
     .expect(200) 
     .end(function(err,res){
       res.status.should.equal(200);
       expect(res.body.user_id).to.be.a('number');
       expect(res.body.language).to.be.a('string');
       expect(res.body.dateformat).to.be.a('string');
       expect(res.body.timeformat).to.be.a('string');
       expect(res.body.timezone).to.be.a('string');
       done();
     });
   });

   it(" /uerpref/ POST should return id of created user preferences ",function(done){

      var uprf = {
        user_id: 24,
        language: 'UA',
        dateformat: 'DMY',
        timeformat: '24h',
        timezone: 'UTC+3'
      };
     server
     .post("/userpref")
     .send(uprf)
     .expect(201)
     .end(function(err,res){
       res.status.should.equal(uprf.user_id);
       done();
     });
   });

   it(" /uerpref/1 PUT should return id of updated user preferences ",function(done){

      var uprf = {
        user_id: 1,
        language: 'UA',
        dateformat: 'DMY',
        timeformat: '24h',
        timezone: 'UTC+3'
      };
     server
     .put("/userpref/1")
     .send(uprf)
     .expect(200)
     .end(function(err,res){
       done();
     });
   });
});
 
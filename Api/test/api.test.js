const request = require("supertest")
const {expect} = require("chai");
const app = require("../index");
const {invertText} = require("../tools");

// Testing endpoint

describe("GET /iecho", ()=>{
    it("respond with json", done =>{
        request(app)
            .get("/iecho")
            .set("Accept", "application/json")
            .query({
                text: "test"
            })
            .expect("Content-Type", /json/)
            .expect(200, done)
    });
    it("If the parameters are correct, it should respond with the inverted text", done=>{
        request(app)
            .get("/iecho")
            .set("Accept", "application/json")
            .query({
                text: "test"
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .expect({
                text: "tset"
            })
            .end(done)
    });
    it("respond with a bad request if we don't send a text", done=>{
        request(app)
            .get("/iecho")
            .set("Accept", "application/json")
            .query({
                text: 1
            })
            .expect("Content-Type", /json/)
            .expect(400, done)
    });
    it("In the case that it is not a text, it should return 'error': 'no text'", done=>{
        request(app)
            .get("/iecho")
            .set("Accept", "application/json")
            .query({
                text: 1
            })
            .expect("Content-Type", /json/)
            .expect(400)
            .expect({
                error: "no text"
            })
            .end(done)
    });

});


// Testing Tools

const exampleText = invertText("test");

describe("Invert text function",()=>{
    it("Return a string", ()=>{
        expect(exampleText).to.be.a("string");
    })
    it("Return inverted text", () =>{
        expect(exampleText).equal("tset")
    })

});
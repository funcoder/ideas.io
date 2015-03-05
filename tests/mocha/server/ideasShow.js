if (!(typeof MochaWeb === 'undifiend')){
    MochaWeb.testOnly(function(){
        describe("ideas should exist", function() {
            it("should have ideas if I add one", function() {
                Ideas.insert({ title: "This is an idea"});
                var noIdeas = Ideas.find().count();
                chai.expect(noIdeas).to.not.equal(0);
            })
        })
    })
    
    MochaWeb.testOnly((function() {
        describe("idea title is correct", function() {
            it("should have an idea with the title 'test'", function() {
                Ideas.insert({title: "test"});
                var idea = Ideas.find({title: 'test'});
                chai.expect(idea).to.not.equal(null);
            });
        });
    }));
}
if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("toolbar options", function(){
      it("toolbar should have option to Add idea", function(){
        var html = $(".glyphicon-plus").html();
        chai.expect(html).to.not.equal(null);
      });
    });
  });
}

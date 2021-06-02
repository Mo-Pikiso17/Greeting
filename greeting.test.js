describe('greet function' , function(){
    it('should greet a user once', function(){

        let greetingName= greeting();

        greetingName.greets();
        greetingName.greets();
        greetingName.greets();

        // billTypes.textCall();
        // billTypes.textCall();
        // billTypes.textCall();

        assert.equal(, greetingName.getCount());
        // assert.equal(8.25, billTypes.getTextCallTotal());
        // assert.equal(0.00, billTypes.getTextSmsTotal());



        // assert.equal("Hello, Tess", greets ("Tess"));

        // assert.equal("Hello, Tess", greet ());
        // assert.deepEqual([2,2],[2,2]);
    });

    it('if you enter anything that does not consist of alphabets should not be accepted it.', function(){
        assert.equal("please enter a valid name!", greets (7));
        // assert.deepEqual([2,2],[2,2]);
    });

});
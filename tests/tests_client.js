beforeEach(function () {
  sinon.spy($, 'ajax');
});

afterEach(function () {
  $.ajax.restore();
});

describe('postCats', function () {
  it('makes a POST request to /cats', function () {
    var testCat = {
      name: 'Remus',
      age: 11
    };

    postCat(testCat);

    expect($.ajax).to.be.called;
    expect($.ajax.getCall(0).args[0].url).to.equal('/cats');
    expect($.ajax.getCall(0).args[0].type).to.equal('post');
  });

  it('sends a cat object as data', function () {
    var testCat = {
      name: 'Romulus',
      age: 8
    };

    postCat(testCat);

    expect($.ajax.getCall(0).args[0].data).to.have.property('name');
    expect($.ajax.getCall(0).args[0].data).to.have.property('age');
  });
});

(function() {

  describe('On the visualize page', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'spec/fixtures/';
      loadFixtures('jasmine/visualize.html');
      return setup_visualize();
    });
    describe('setup_visualize', function() {
      it('correctly sets all_colors', function() {
        return expect(all_colors).toEqual(["blue", "red"]);
      });
      it('correctly sets frequencies', function() {
        var correct_freqs;
        correct_freqs = {
          "blue": [0.5, 0.0, 1.0, 0.2, 0.2],
          "red": [0.0, 0.0, 0.0, 0.2, 1]
        };
        return expect(frequencies).toEqual(correct_freqs);
      });
      return it('correctly binds click handlers', function() {
        $("li.vis_facet").first().click();
        return expect($("span.facet").eq(0)).toHaveClass("border");
      });
    });
    return describe('select_facet', function() {
      it('correctly selects the facet', function() {
        select_facet($("li.vis_facet").first());
        return expect($("span.facet").eq(0)).toHaveClass("border");
      });
      return it('correctly colors words for the facet', function() {
        select_facet($("li.vis_facet").first());
        expect($("span.word_0")).toHaveClass("blue-vis");
        expect($("span.word_1")).not.toHaveClass("blue-vis");
        expect($("span.word_2")).toHaveClass("blue-vis");
        expect($("span.word_3")).toHaveClass("blue-vis");
        return expect($("span.word_4")).toHaveClass("blue-vis");
      });
    });
  });

}).call(this);

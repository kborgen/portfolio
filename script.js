(function($) {

  function App() {};
  App.prototype = {

    rollover: function() {
      $('.sub-banners li').on('click', function() {
        $(this).find('span').slideToggle();
      });
    },

    init: function() {
      this.rollover();
    }
  }

  var app = new App();

  $(document).ready(function() {
    app.init();
  });

}(jQuery));

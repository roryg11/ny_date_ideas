$(document).ready(function() {
  $(document).on('click', '#entry-header', function() {
    $.ajax( {
      url: '/date_ideas',
    }).done(function(data) {
      $('#entry-header').remove();
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      var colorPalette = ['#DB6B4C', '#5186A5', '#CACE80', '#2CB281', '#982649'];
      var randomNumber = Math.floor(Math.random()*4);
      randomColor = colorPalette[randomNumber];
      $('body').css('background-color', randomColor);
      $('.button').hover(function(){
        $(this).css("color", randomColor);
      }, function(){
        $(this.css("color", '#424242'));
      })
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var context = {
          title: data.date_idea.title,
          copyOne: data.date_idea.copy_one,
          copyTwo: data.date_idea.copy_two,
          link: data.date_idea.link
          };
      var html = template(context);
      $('.date-idea-container').html(html);
    }).then(function(data) {
      $('#idea-link').on('click', function() {
        window.location.href=data.date_idea.link;
      })
    })
  })


});

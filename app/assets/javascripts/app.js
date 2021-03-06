$(document).ready(function() {
  $(document).on('click', '.get-info-button', function() {
    $.ajax( {
      url: '/date_ideas',
    }).done(function(data) {
      $('.get-info-button').remove();
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      var colorPalette = ['#FC7A57', '#68AED6', '#EDF296', '#97D5A4','#B2DD7A','#EABE7C', '#DB6B4C', '#5186A5', '#CACE80', '#2CB281', '#982649'];
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
        window.open(data.date_idea.link, '_blank');
      })
    })
  })


});

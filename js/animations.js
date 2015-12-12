$(document).ready(function() {

  function initialTasks() {
    $('abbr.timeago').timeago();
    $('#tweet-controls').hide();
    $('.tweet-actions').hide();
    $('.content .stats').hide();
    $('.content .reply').hide();
    $('[data-toggle="tooltip"]').tooltip();
  }

  initialTasks();

  $('.tweet-compose').on('click', function () {
    $('.tweet-compose').css('height', '5em');
    $('#tweet-controls').show();
  });

  $('.tweet-compose').keyup(function () {
    var lengthStr = $('.tweet-compose').val().length;
    var lengthNum = Number(lengthStr);
    var remainingCount = 140 - lengthNum;
    $('#char-count').text(remainingCount);

    if (remainingCount <= 10)
      $('#char-count').css('color', 'red');
    else
      $('#char-count').css('color', '');

    if (remainingCount < 0)
      $('.button#tweet-submit').css('display', 'none');
    else
      $('.button#tweet-submit').show();
  });

  $('.button#tweet-submit').on('click', function() {
    var imageSrc = $('#dashboard img').attr('src');
    var name = $('#dashboard p').html();
    var tweet = $('.tweet-compose').val()
    var today = new Date();
    var todaysDate = today.toISOString();
    var str = 	'<div class="tweet"> <div class="content">' +
          '<img class="avatar" src= "'  + imageSrc + '" />' +
          ' <strong class="fullname">' + name + '</strong><span class="username">@username</span>' +
          '<p class="tweet-text">' + tweet + '</p>' +
          '<div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li>' +
          '<li><span class="icon action-retweet"></span> Retweet</li>' +
          '<li><span class="icon action-favorite"></span> Favorite</li>' +
          '<li><span class="icon action-more"></span> More</li>' +
          '</ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p>' +
          '<p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p>' +
          '<p>FAVORITES</p></div><div class="users-interact"><div><img data-toggle="tooltip" data-placement="bottom" title="Use our picture tools to get the look you want" src="img/alagoon.jpg" />' +
          '<img data-toggle="tooltip" data-placement="bottom" title="Use our picture tools to get the look you want" src="img/vklimenko.jpg" /></div></div>' +
          '<abbr class="timeago" title="' + todaysDate + '"></abbr></div><div class="reply">' +
          '<img class="avatar" src="img/alagoon.jpg" />' +
          '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
          '</div></div> </div><!-- .tweet -->';
     $('#stream').prepend(str);
     $('.tweet-compose').css('height', '');
     $('.tweet-compose').val('');
     initialTasks();

  });

   /* $('.tweet').hover(function () {
      $('.tweet-actions', this).show();
   }, function () {
      $('.tweet-actions', this).hide();
   }); */

   $('#stream').on('mouseenter', '.tweet', function() {
       $('.tweet-actions', this).clone().prependTo('.tweet-text', this);
       $('.tweet-actions:first-child', this).show();
       $('.content .stats', this).show();
       $('.content .reply', this).show();
   });

   $('#stream').on('mouseleave', '.tweet', function() {
        $('.tweet-actions', this).hide();
        $('.content .stats', this).hide();
        $('.content .reply', this).hide();
   });


});

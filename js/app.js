$(document).ready(function(){

  var titles = $('#archive-titles');

  var blogPost = $('#blogPost');


  $.ajax({ 
    type: 'GET', 
    url: 'https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (info) { 
     $(info.articles).each(function(index, value){
        titles.append('<li>' + '<a href="#">' + value.title + '</a>' + '</li>'); //displays article titles 
      }); 
      $(info.articles).each(function(index, value){
        blogPost.append('<h2>' + value.title + '</h2>' + '<br>' +'<p>' + value.long_description + '</p>'); //displays blog titles
      });
   
     // $("#article-titles").hover(function(){
        //   $(this).attr("src", function(index, value){
        //       return value.replace(value.urlToImage);
        //   });
        // });

    }
  }); //ajax

}); //ready 
(function($){
 $.fn.correctedPost=function(config){
  var me = this,
   blogId,
   postId;
   
   var settings = $.extend(true,{
	   url: '',
	   postId:'',
	   labels:[],
	   title:'Corrected Post: ',
	   itemClass: 'related_item',
	      wrapperClass: 'related_items_wapper',
	   titleClass: 'title',
	   shuffle:true,
	   thumbUsePost:true,
	   thumbWidth:100,
	   thumbHeight:75,
	   maxPosts: 6
	  },config);
   
   return init();
   
   function init() {
	   $('<div>')
         .css('font-weight', 'bold')
         .css('padding-left', 15)
         .append(
            $('<a>')
               .attr('href', '#')
               .html('Correction')
               .click(function() {
                  compare();
               })
	   ).appendTo(me);
	   
   }
   function compare() {
      var hasCorrection = false;
      var textComment;
      $('.comment-content').each(function(i, item) {
         if ($(item).text().toUpperCase().indexOf('[ORIGINAL]') > -1) {
            hasCorrection = true;
            var htmlComment = $(item).html();
            htmlComment = htmlComment.replace(/<br>/g, ' ');
            $(item).html(htmlComment);
            textComment = $(item).text()
               .replace('[ORIGINAL]','')
               .replace('[original]','')
               .replace('[Original]','')
               .replace('[ORIGINEL]','')
               .replace('[originel]','')
               .replace('[Originel]','')
               .replace('Publié par fabio à 19:00 Au', '')
               .replace(/´/g, "'");
               
         }         
      });
      
      if (hasCorrection) {
         var footer = $('.post .post-footer');
         $('.post .post-footer').remove();
         //alert(footer);
         var textPost = $('.post').text();
         //alert(textPost);
         //alert(textComment);
         //original, corrected
         var textDiff = diffString(textComment, textPost);
         $('.post-body').html(textDiff);
         $('.post-body').append(footer);
      }
   }
 };
})(jQuery);
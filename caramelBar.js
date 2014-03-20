(function($){
    $.fn.caramelBar = function(options){
        var settings = {
          "top" : 0,
          "left" : 0,
          "right" : 0,
          "width" : "100%",
          "height" : "100%",
          "spacing" : 0
        };
        
        if(options){$.extend(settings, options); }
            
        return this.each(function(){
      var $this = $(this),
              pos = $this.css('position'),
              ogl = $this.css('left') && $this.css('marginLeft'),
              ogt = $this.css('top') && $this.css('marginTop'),
              ogr = $this.css('right') && $this.css('marginRight'),
              ogw = $this.css('width'),
              ogh = $this.css('height'),
              ul = $this.find('ul'),
              li = ul.children('li'),
              ulh = ul.css('height'),
              ulw = ul.css('width'),
              lih = li.css('height'),
              liw = li.css('width');
              
              
              stickyNavTop = $this.offset().top,
              stickyNav = function(){
                var scrollTop = $(window).scrollTop();
                
                if(scrollTop > stickyNavTop){
                   
                   $this.css({
                       "position" : "fixed",
                       "top" : settings.top,
                       "left" : settings.left,
                       "right" : settings.right
                   });
                   
                   if(settings.width && settings.height){
                       $this.css({
                           "width" : settings.width,
                       "height" : settings.height
                       });
                       
                       ul.css({
                           'height': '100%',
                            'width': '100%'
                        });
                       li.css({
                           'width': '100%',
                            'marginTop': settings.spacing
                        });
                   }
                   
                }else{
                    
                  $this.css({
                      "position" : pos,
                      "left" : ogl,
                      "top" : ogt,
                      "right" : ogr,
                      "width" : ogw,
                      "height" : ogh
                      
                  });
                  ul.css({
                      'height': ulh,
                      'width': ulw
                  });
                       li.css({
                           'width': liw,
                            'height' : lih
                        });
                }
              };
              
              stickyNav();
              
              $(window).scroll(function(){
              stickyNav();
          });
          });

    };
    })(jQuery);
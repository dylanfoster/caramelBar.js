(function($){    
	$.fn.caramelBar = function(options){                        
		var settings = {          
			"top" : 0,          
			"left" : 0,          
			"right" : 0,          
			"width" : "auto",          
			"height":"auto",
			"spacing" : null
			};        
			if(options){$.extend(settings, options); }                    
			return this.each(function(){     
				var $this = $(this),              
				pos = $this.css('position'),              
				ogl = $this.css('left') && $this.css('marginLeft'),              
				ogt = $this.css('top') && $this.css('marginTop'),              
				ogr = $this.css('right') && $this.css('marginRight'),              
				ogh = $this.css('height'),              
				ogw = $this.css('width'),              
				ul = $this.find('ul'),              
				li = ul.children('li'),              
				ulh = ul.css('height', '100%'),              
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
							"right" : settings.right, 'z-index':'9999'                   
						});                                      
						if((settings.width && settings.height) !== "auto"){                       
							$this.css({                           
								"width" : settings.width,                       
								"height" : settings.height                       
							});                                              
							ul.css({                          
								
								"width" : settings.width,                       
								"height" : settings.height                        
							});                       
							li.css({                            
								"width" : settings.width,                            
								'marginTop': settings.spacing                        
								});                   
						}else{                       
							ul.css({                           
								'height': ulh,                           
								'width':ulw                       
							});                       
							li.css({                           
								'height':lih,                           
								'width':liw                       
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
							'height' : lih,
							'marginTop' : 0                        
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
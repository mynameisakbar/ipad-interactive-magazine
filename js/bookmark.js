	function Annotation(){  //Initialize the Annotation variables
		this.xPos = 7;
		this.yPos = 65;
		this.height = 25/100*window.innerHeight;
		this.margin = 10;

		this.add = function(text,pageNum){ // Add annotation
			var maxAnn = 3,
			activeItem = carouselMain.getActiveItem(),
			activeId = activeItem.id,
			fullBool = false,
			yPos = this.yPos,
			pageComp,
			annArr = [],
			lastAnn;
			if(pageNum){
				pageComp = carouselMain.getComponent(parseFloat(pageNum)-1);
			} 
			annArr = $('#'+((pageComp) ? pageComp.id : activeId)).find('.ann');
			lastAnn = annArr[annArr.length-1];
			
			switch(annArr.length){
				case 0:
					break;
				case 3:
					fullBool = true;
					break;
				default:
 				
				console.log(yPos =lastAnn.offsetTop+lastAnn.offsetHeight+10)
			}

			if(!fullBool){
			    var ann = new Ext.Panel({
			        cls: 'ann',
			        floating: true,
			        html:"<p>"+text+"</p>"+"<div class='annEdit'></div>",
			        x:7,
			        y:yPos,
			        width:'25%',
			        height:'25%',
			        scroll:"vertical",
			        style:"background-color:rgba(0,0,0,0.8);font-size:12px;color:#fff",
			        hideOnMaskTap:false,
			        listeners:{
			        	el:{
			        		click:function(event, object){
			        			var annNum,
			        				oid = $(object).parents('.ann').attr('id');
			        			
				        		annArr = $('#'+((pageComp) ? pageComp.id : activeId)).find('.ann');
				        		for(var i = 0;i < annArr.length;i++){
				        			
						        	if($(annArr[i]).attr('id') == oid){
						        		annNum = ++i;
						        		break;
						        	}
					        	}
					        	if(/android/i.test(navigator.userAgent)){
									  Android.editAnnotation(annNum, getActivePage());
								}
								else {
									window.location = "/delite?annNum="+annNum+"&pageNum="+getActivePage();
								}
				        	},
			        		delegate:'.annEdit'
			        	}
			        }
			    })
			   
			    var comp = pageComp || activeItem;
			    comp.add(ann);
	        	comp.doLayout();
	        	 ann.on('afterlayout',function(event,object,gg){
			    	console.log(event.id);
			    	console.log($('#'+event.id).find('.x-panel-body')[0]);
			    	$('#'+event.id).find('.x-panel-body')[0].style.width = "100%";
			    	$('#'+event.id).find('.x-panel-body')[0].style.height = "100%";
			    	$('#'+event.id).find('.x-scroller')[0].style.height = "100%";
			    },this);
				annArr = $('#'+comp.id).find('.ann');
				for(var i = 0;i < annArr.length;i++){
		        	Ext.getCmp(annArr[i].id).show('fade');
	        	}
	        	comp.doLayout();
	    	}

	    	return true;
		};

		this.del = function(annNum,pageNum){ //Delete Annotation
			var activePage = (pageNum || getActivePage()) -1;
			Ext.getCmp($('#'+carouselMain.getComponent(activePage).id).find('.ann')[annNum-1].id).destroy();
			var annArr = $('#'+carouselMain.getComponent(activePage).id).find('.ann');
			for(var i = 0;i < annArr.length;i++){
				var yPos = this.yPos;
				switch(i){
					case 1:
						yPos = this.yPos+this.height+this.margin;
						break;
					case 2:
						yPos = 2*this.height+2*this.margin+this.yPos;
						break;
				}
	        	Ext.getCmp(annArr[i].id).setPosition(7,yPos);
		    }

			return true;
		};

		this.hide = function(){ //Hide All Annotation
			var annArr = $('body').find('.ann');
			for(var i = -1,l=annArr.length;++i<l;){
				Ext.getCmp(annArr[i].id).hide();
			}

			return true;
		};

		this.show = function(){ //Show All Annotation
			var annArr = $('body').find('.ann');
			for(var i = -1,l=annArr.length;++i<l;){
				Ext.getCmp(annArr[i].id).show();
			}

			return true;
		};

		this.update = function(text,annNum,pageNum){
			var activePage = (pageNum || getActivePage()) -1;
			var ann = $('#'+carouselMain.getComponent(activePage).id).find('.ann').eq(annNum-1);
			
			$(ann).find('p').html(text);

			return true;
		};

		return this;
	}   

    function getActivePage(){
    	return carouselMain.getActiveIndex()+1;
    }

	function addBookmark(pageNum){
		deleteBookmark();
		var activeId = (pageNum) ? carouselMain.getComponent(parseFloat(pageNum)-1).id : carouselMain.getActiveItem().id;
		$('#'+activeId).append("<div id='bookmark'><p>"+(pageNum || getActivePage())+"</p></div>");
		
		return true;
	}
	
	function deleteBookmark(){	
  	$('#bookmark').remove();
 	}


function realignAnnotation(){
 var time = 0;
		if(/android/i.test(navigator.userAgent)){
			time = 1000;
		}
		setTimeout(function(){
 			$('.ann').each(function(){	
 				var annLength = 0;	
 				var _this = $(this);
  			if(annLength = _this.prevAll('.ann').length){
   				var top = parseFloat(_this.prev()[0].offsetTop);
  				var height = parseFloat(_this.prev()[0].offsetHeight);
    			_this[0].style.top = top+height+10+'px';
    }
 		$(_this[0]).find('.x-scroller')[0].style.minHeight = '';
 		$(_this[0]).find('.x-scroller')[0].style.width = '100%';	
		$(_this[0]).find('.x-scroller')[0].style.height = '100%';
		 })
 		},time);
  }

	var annotation = new Annotation();
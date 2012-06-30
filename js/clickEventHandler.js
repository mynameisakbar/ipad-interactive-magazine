var popupPanel;
var heightPop;
var widthPop;
if(Ext.getOrientation() == 'landscape'){
	if (window.innerWidth<700){
		heightPop=312;
		widthPop=343;
	}else{
		heightPop=600;
		widthPop=725;
	}
}else{
	if (window.innerWidth<450){
		heightPop=312;
		widthPop=343;
	}else{
		heightPop=725;
		widthPop=600;
	}
}

function onArticleClick(content, imgSrc, title){ //For duplet
    window.location.hash = '#b';
	var deviceWidth = window.innerWidth;
    var deviceHeight = window.innerHeight;

    if (this.popup){
        var width = getRoundValue(deviceWidth, 0.9);
        //var height = getRoundValue(deviceHeight, 0.9);
        //this.popup.setSize(width, height);
        this.popup.setSize(width,'auto');
        this.popup.update(getDetailedPage(content, imgSrc, title));
        this.popup.show('pop');
        popupPanel = 'open';
    }
    else{
        var width = getRoundValue(deviceWidth, 0.9);
        var height = getRoundValue(deviceHeight, 0.9);
        this.popup = new Ext.Panel({
            id: 'detailedPanel',
            floating: true,
            modal: true,
            centered: true,
            width: width,
            //height: height,
            hideOnMaskTap: true,
            indicator: false,
            scroll: 'vertical',
            padding:3,
            html: getDetailedPage(content, imgSrc, title),
            cls: 'baseFont',
            listeners:
            {
                /*orientationchange:
                {
                    fn: function()
                    {
                        var height = getRoundValue(window.innerHeight, 0.9);
                        this.setWidth(getRoundValue(window.innerWidth, 0.9));
                        var trueHeight = $('#detailedPanel .imgPanelWrapper')[0].clientHeight;

                        height = (trueHeight > height) ? height :trueHeight;
                        
                        this.setHeight($('#detailedPanel .imgPanelWrapper')[0].clientHeight);
                    }
                },*/
                show: function(){
                    this.doLayout();
                    this.setWidth(getRoundValue(window.innerWidth, 0.9));
                    //this.setHeight(getRoundValue(window.innerHeight, 0.9));
                    for(var i=0; Ext.query('.x-mask')[i];i++){
                            Ext.query('.x-mask')[i].style.width = window.innerWidth+'px';
                            Ext.query('.x-mask')[i].style.height = window.innerHeight+'px';
                    }

                    var height = getRoundValue(window.innerHeight, 0.9);
                    var trueHeight = $('#detailedPanel .imgPanelWrapper')[0].clientHeight;
                    height = (trueHeight > height) ? height :trueHeight;
                    
                    this.setHeight(height);
                    
                },
                beforehide: function(){
	                  window.location.hash = '#a';
										hideXMask();
                    return true;
                }
            }
        });
        this.popup.show('pop');
        popupPanel = 'open';
    }
}

function onContentClick(summary, imgSrc, title){
		window.location.hash = '#b';
    var deviceWidth = window.innerWidth;
    var deviceHeight = window.innerHeight;

    if (this.contentPanel){
        var width = getRoundValue(deviceWidth, 0.9);
        //var height = getRoundValue(deviceHeight, 0.9);
		var height = '100%';
        this.contentPanel.setSize(width, height);
        this.contentPanel.update(getContent(summary, imgSrc, title));
        
        this.contentPanel.show('pop');
    }
    else{
        var width = getRoundValue(deviceWidth, 0.9);
        var height = getRoundValue(deviceHeight, 0.9);
        this.contentPanel = new Ext.Panel({
            id: 'contentPanel',
            floating: true,
            modal: true,
            centered: true,
            width: width,
            height: "100%",
            hideOnMaskTap: true,
            indicator: false,
            scroll: 'vertical',
            padding:3,
            html: getContent(summary, imgSrc, title),
            listeners:
            {
                /*orientationchange:
                {
                    fn: function()
                    {   
                        deviceWidth = window.innerWidth;
                        deviceHeight = window.innerHeight;
                        var width = getRoundValue(deviceWidth, 0.9);
                        var height = getRoundValue(deviceHeight, 0.9);
                        Ext.getCmp('contentPanel').setSize(width, height);
                    }
                },*/
                show:function(){
                    Ext.query('.wrapper')[0].style.height = Ext.query('#contentPanel')[0].style.height;
                },
                beforehide: function(){
                    window.location.hash = '#a';
										hideXMask();
                }
            }
        });
        this.contentPanel.show('pop');
    }
}

function onArticle2Click(content, id){
	window.location.hash = '#b';
    var deviceWidth = window.innerWidth;
    var deviceHeight = window.innerHeight;
    var width = getRoundValue(deviceWidth, 0.9);
    var height = getRoundValue(deviceHeight, 0.9);

    content = unescape(content);

        if(this.multiImgPanel){
            this.multiImgPanel.destroy();
        }

        var htmlContent = getScroller(content,spage[id].smallImgSrc,spage[id].title);
        this.multiImgPanel = new Ext.Panel({
            id: 'multiImgPanel',
            floating: true,
            modal: true,
            centered: true,
            width: width,
            height: height,
            hideOnMaskTap: true,
            indicator: false,
            padding:3,
            style:"background-color:rgba(0,0,0,0.7)",
            scroll: 'vertical',
            layout:{
                type:'vbox',
                align:'stretch'
            },
            items:[{width:width,scroll:'horizontal',html:htmlContent[0]},{html:htmlContent[1]}],
            cls: 'baseFont allPadding',
            listeners:
            {
                orientationchange:
                {
                    fn: function()
                    {
                        deviceWidth = window.innerWidth;
                        deviceHeight = window.innerHeight;
                        var width = getRoundValue(deviceWidth, 0.9);
                        var height = getRoundValue(deviceHeight, 0.9);
                        Ext.getCmp('multiImgPanel').setSize(width, height);
                    }
                },
                show: function(){
                    this.setWidth(getRoundValue(deviceWidth, 0.9));
                    this.setHeight(getRoundValue(deviceHeight, 0.9));
                    for(var i=0; Ext.query('.x-mask')[i];i++){
                        Ext.query('.x-mask')[i].style.width = window.innerWidth+'px';
                        Ext.query('.x-mask')[i].style.height = window.innerHeight+'px';

                    }
                },
                beforehide: function(){
                    window.location.hash = '#a';
					hideXMask();
                }

            }
        });
        this.multiImgPanel.show('pop');
}


function onArticle4Click(content,id){
		window.location.hash = '#b';
    var deviceWidth = window.innerWidth;
    var deviceHeight = window.innerHeight;

    content = "<div class='article'><br/>"+unescape(content)+"</div>";

    if (this.multiImgPanel){
        var width = getRoundValue(deviceWidth, 0.9);
        var height = getRoundValue(deviceHeight, 0.9);
        this.multiImgPanel.setSize(width, height);
        this.multiImgPanel.update(content);
        this.multiImgPanel.show('pop');
    }
    else{
        var width = getRoundValue(deviceWidth, 0.9);
        var height = getRoundValue(deviceHeight, 0.9);
        this.multiImgPanel = new Ext.Panel({
            id: 'multiImgPanel',
            floating: true,
            modal: true,
            centered: true,
            width: width,
            height: height,
            hideOnMaskTap: true,
            indicator: false,
            scroll: 'vertical',
            padding:3,
            style:"background-color:rgba(0,0,0,0.7)",
            html: content,
            cls: 'baseFont allPadding',
            listeners:
            {
                orientationchange:
                {
                    fn: function()
                    {
                        deviceWidth = window.innerWidth;
                        deviceHeight = window.innerHeight;
                        var width = getRoundValue(deviceWidth, 0.9);
                        var height = getRoundValue(deviceHeight, 0.9);
                        Ext.getCmp('multiImgPanel').setSize(width, height);
                    }
                },
                show: function(){
                    this.setWidth(getRoundValue(deviceWidth, 0.9));
                    this.setHeight(getRoundValue(deviceHeight, 0.9));
                    for(var i=0; Ext.query('.x-mask')[i];i++){
                        Ext.query('.x-mask')[i].style.width = window.innerWidth+'px';
                        Ext.query('.x-mask')[i].style.height = window.innerHeight+'px';

                    }
                },
                beforehide: function(){
                    window.location.hash = '#a';
										hideXMask();
                }

            }
        });
        this.multiImgPanel.show('pop');
    }
}

function onImgClick(content, imgSrc, title){
		window.location.hash = '#b';
    var deviceWidth = window.innerWidth;
    var deviceHeight = window.innerHeight;

    if(content == 'undefined'){
        content = "";
    }
    else{
        content = unescape(content);
    }

    if (this.imgPanel){
        deviceWidth = window.innerWidth;
        deviceHeight = window.innerHeight;

        var width = getRoundValue(deviceWidth, 0.8);
        this.imgPanel.setSize(width, 'auto');
        this.imgPanel.update(getDetailedImg(content, imgSrc));
        this.imgPanel.show('pop');
       
    }
    else{
        this.imgPanel = new Ext.Panel({
            id: 'imgPanel',
            floating: true,
            modal: true,
            centered: true,
            width: getRoundValue(deviceWidth,0.8),
            //height: getRoundValue(deviceHeight,0.9),
            hideOnMaskTap: true,
            padding:3,
            scroll:'vertical',
            html: getDetailedImg(content, imgSrc),
            listeners:{
                /*orientationchange:
                {
                    fn: function()
                    {
                        deviceWidth = window.innerWidth;
                        deviceHeight = window.innerHeight;
                        var width = getRoundValue(deviceWidth, 0.8); 
                        var height = getRoundValue(deviceHeight, 0.9); 
                        
                        this.setWidth(width);
                        var trueHeight = $('#imgPanel .imgPanelWrapper')[0].clientHeight;
                        height = (trueHeight>height) ? height : trueHeight;
                        this.setHeight(height);
                    }
                },*/
                show: function(){
                    this.setWidth(getRoundValue(window.innerWidth,0.8));
                    //this.setHeight(getRoundValue(window.innerHeight,0.9));
                    for(var i=0; Ext.query('.x-mask')[i];i++){
                        Ext.query('.x-mask')[i].style.width = window.innerWidth+'px';
                        Ext.query('.x-mask')[i].style.height = window.innerHeight+'px';
                    }
                    var height = getRoundValue(window.innerHeight, 0.9);
                    var trueHeight = $('#imgPanel .imgPanelWrapper')[0].clientHeight;
                    height = (trueHeight > height) ? height :trueHeight;
                    
                    this.setHeight(height);
                     
                },
                beforehide: function(){
									  window.location.hash = '#a';
                    hideXMask();
                }
            }
        });
        this.imgPanel.show('pop');
    }
}
function createCoverPagePanel(img,mdl,btm){
	    var panelObj = new Ext.Panel({
                items: [
	                {html:giveMeHeader(img)},
	                {html: getFancy(mdl)},
	                {html: getLayout3(btm)},
                ],
        });

        return panelObj;
}

function createCoverPagePanelWithText(img,mdl,btm_eng,btm_chi,lang){
        var panelObj = new Ext.Panel({
                items: [
                    {html:giveMeHeader(img)},
                    {html: getFancy(mdl)},
                    {html: getLayout1x(btm_eng,btm_chi,lang),cls:"coverText"},
                ],
        });

        return panelObj;
}

function createMultiImageScrollerPanel(img,eng,chi,lang){
	var panelObj = new Ext.Panel({
            items: [
                {html:giveMeHeader(img)},
                {
		        cls:'slidee',
                height:'267',
                html: getImageScrollerLayout(eng, "267", "200", "130"),
                scroll:'horizontal'
                },
                {html: getLayout1(eng,chi,lang),
                cls:"coverText"},
            ],
        });

        return panelObj;
}

function createMultiImageScrollerPanelwithCap(img,cptImg,eng,chi,lang){
	var panelObj = new Ext.Panel({
            items: [
                {html:giveMeHeader(img)},
                {
		        cls:'slidee',
                height:'267',
                html: getImageScrollerLayout(eng, "267", "200", "130"),
                scroll:'horizontal'
                },
                {cls:'coverCaption',height:(20/100*window.innerHeight),html: getCoverCaptionImageWrapper(cptImg)},
                {html: getLayout1(eng,chi,lang),
                cls:"coverText"},
            ],
        });

        return panelObj;
}

function createDupletPanel(img,mdl,btm){

	    var panelObj = new Ext.Panel({
            defaults:{style:'overflow:hidden'},
            items: [
	            {html: giveMeHeader(img)},
	            {flex:1,html: getLayoutDuplet(mdl)},
	            {flex:1,html: getLayoutDuplet(btm)},
            ]
        });
        return panelObj;
}

function createThreeImagePanel(img,mdl_eng,mdl_chi,lang){

	    var panelObj = new Ext.Panel({
            items:[
                {html:giveMeHeader(img)},
                {width:'100%',html: getThreeImageLayout(mdl_eng)},
                {flex:1,style:"padding:0 3%",cls:'coverText',html: getLayout1(mdl_eng,mdl_chi,lang)},
            ]
        })
        return panelObj;
}

function createThreeImagePanelWithCaption(img,mdl_eng,mdl_chi,cptImg,lang){

        var panelObj = new Ext.Panel({
            items:[
                {html:giveMeHeader(img)},
                {width:'100%',html: getThreeImageLayout(mdl_eng)},
                {cls:'coverCaption',height:(20/100*window.innerHeight),html: getCoverCaptionImageWrapper(cptImg)},
                {flex:1,style:"padding:0 3%",cls:'coverText',html: getLayout1(mdl_eng,mdl_chi,lang)},
            ]
        })
        return panelObj;
}

function createThreeImagePanelNoCap(img,mdl_eng,mdl_chi,lang){

	    var panelObj = new Ext.Panel({
            items:[
                {html:giveMeHeader(img)},
                {width:'100%',html: getThreeImageLayout(mdl_eng)},
                {flex:1,style:"padding:0 3%",cls:'coverText',html: getLayout1(mdl_eng,mdl_chi,lang)},
            ]
        })
        return panelObj;
}

function createThreeImagePanelNoSub(img,mdl){

	    var panelObj = new Ext.Panel({
            items:[
                {html:giveMeHeader(img)},
                {width:'100%',html: getThreeImageLayout(mdl)},
                {flex:1,style:"padding:0 3%",cls:'coverText',html: getCoverTextLayout(mdl)},
            ]
        })
        return panelObj;
}

function createImageCover(bgcolor,imgSrc){

    var panelObj = new Ext.Panel({
          height:'100%',
          items:[{
            style:"background-color:"+bgcolor,
            height:'100%',
            flex:1,
            items:[{
							height:'100%',
              html:"<img class='bigCover' style='margin:0 auto;display:block' src='"+imgSrc+"'>"
            }]
          }]
    })

    return panelObj;
    
}

function createCoverWithSideTOC(tocLinkArr,tocImageArr,tocHeaderImage,tocMainImage){

    var itemsArr = [];
		var that;

    for(var i = 0;i <tocLinkArr.length;i++){

        var obj = {
						eventFunction: tocLinkArr[i],
            listeners:{
              el:{
                tap: function(event,obj){
                  carouselMain.setActiveItem(itemsArr[$('#'+this.id).find('img').attr('place')].eventFunction);
                }
              }
            },
            html:"<img height='100%' place='"+i+"' style='float:right;display:block;padding-right:50px' src='"+tocImageArr[i]+"'>"
        };

        itemsArr.push(obj);
    }

    var panelObj = new Ext.Panel({
          height:'100%',
          items:[{
            flex:1,
            style:'background-color:white',
            layout:{
              type:'vbox',
              align:'stretch'
            },
            defaults:{
              layout:{
                type:'vbox',
                align:'end'
              }
            },
            items:[{
              flex:1,
              items:[{
                flex:1,
                html:"<img height='100%' style='float:right;display:block;margin-right:20px;' src='"+tocHeaderImage+"'>",
              }]
            },{
              flex:4,
              html:"<div style='width:100%; height:100%; overflow:hidden;'><img height='100%' style='float:right;display:block' src='"+tocMainImage+"'></div>",
            },{
              flex:2,
              defaults:{flex:1},
              items:itemsArr
              
            }]
          }],
          
        })

        return panelObj;
}
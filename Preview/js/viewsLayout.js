var carouselMain,
    firstPage,
    secondpage,
    spage,
    thpage,
    fourthpage,
    fifthpage,
    editorPage,
    bigCover,
    toc,
    ceylonCover,
    kotCover,
    kotStory,
    coverPageWithText,
    ocbcCover,
    objArr,
		cartier1;

var oriOrient = window.orientation;

//Check for iPad Device
var iPad = navigator.userAgent;
iPad = /iPad/i.test(iPad);


Ext.setup({
    onReady: function() {
        window.location.hash = "#loaded";
        initLayout();
        updateOrientation(true);
        if(/android/i.test(navigator.userAgent)){
          Android.htmlLoaded();
        }
    }
});

function initLayout(){

        var coverPage = generateArticleCovers();
        var dupletPage = btm_createDupletPage();
        spage = btm_createPage2();

        firstPage = createCoverPagePanel('images/Assets/railway1.jpg',coverPage.p1_a,coverPage.p1_b);

        coverPageWithText = createCoverPagePanelWithText('images/Assets/railway1.jpg',coverPage.p1_a,spage.p9_eng,spage.p9_chi);
        
        secondpage = createMultiImageScrollerPanel('images/Assets/railway1.jpg',spage.p2_eng,spage.p2_chi);
        
        thpage = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p3_a,dupletPage.p3_b);

        fourthpage = createCoverPagePanel('images/Assets/boat.jpg',coverPage.p4_a,coverPage.p4_b);

        fifthpage = createMultiImageScrollerPanel('images/Assets/boat.jpg',spage.p9_eng,spage.p9_chi);

        sixthpage = createThreeImagePanel('images/Assets/journal.jpg',spage.p6,spage.p9_chi,"images/coverCaption.jpg");

        /*var fourPanel = new Ext.Panel({
          layout:{
            type:'hbox',
            align:'stretch',
          },
          items:[{
            layout:{
              type:'vbox',
              align:'stretch'
            },
            flex:1,
            items:[{
              flex:1,
              style:'background-color:red',
              html:'1'
            },{
              flex:3,
              style:'background-color:green',
              html:'2'
            }]
          },{
            layout:{
              type:'vbox',
              align:'stretch'
            },
            flex:1,
            items:[{
              flex:1,
              style:'background-color:blue',
              html:'3'
            },{
              flex:3,
              style:'background-color:grey',
              scroll:'vertical',
              html:'4'
            }]
          }]
        })*/


         var fourPanel =new Ext.Panel({
	            flex:1,
	            items: [{
	              flex:1,
	                layout:{
	                  type:'hbox',
	                  align:'stretch',
	                },
	                items:[{
	                  flex:3,
	                  layout:{
	                    type:'vbox',
	                    align:'stretch'
	                  },
	                  items:[{
	                    flex:1,
	                    html:"<div style='width:100%;height:100%; overflow:hidden; position:relative'><img width='100%' style='display:block;' src='images/Assets/muji/logo.jpg'><img height='50%' style='display:block;position:absolute;bottom:0;right:0;background:rgba(255,255,255,0.3)' src='images/Assets/muji/caption.png'></div>",
	                  },{
	                    flex:2,
	                    html:getCoverTextLayoutWithoutScroller(spage.fourPanel_chi),
	                    cls:'coverText'
	                  }]

	                },{
	                  flex:2,
	                  layout:{
	                    type:'vbox',
	                    align:'stretch'
	                  },
	                  style:'background-color:#e5e5e5',
	                  items:[{
	                    flex:1,
	                    html:"<div style='width:100%;height:100%; overflow:hidden'><img width='96%' style='display:block;margin:2% auto 0' src='images/Assets/muji/side.jpg'></div>"
	                  },{
	                    flex:2,
	                    html:formatArticle(spage.fourPanel_eng),
	                    scroll:'vertical',
	                    height:'100%'
	                  }]
	                }]
	            }]
	        });

	        journalTOC = new Ext.Panel({
	          items:[{
	            flex:1,
	            html:"<img class='journalToc' style='margin:0 auto;display:block' src='images/Assets/journal_toc/journal.png'>",
	          },{
	            flex:3,
	            html:"<div class='segmentThree'><span><img src='images/Assets/journal_toc/1.png' onclick='carouselMain.setActiveItem(thpage_shop1)'></span><span><img src='images/Assets/journal_toc/arrow_bg.png'></span></div><div class='segmentThree'><span><img src='images/Assets/journal_toc/2.png' onclick='carouselMain.setActiveItem(thpage_watch1)'></span><span><img src='images/Assets/journal_toc/arrow_bg.png'></span></div><div class='segmentThree'><span><img src='images/Assets/journal_toc/3.png' onclick='carouselMain.setActiveItem(journal_travel1)'></span><span><img src='images/Assets/journal_toc/arrow_bg.png'></span></div>",
	          }]
	        })

	        editorPage = new Ext.Panel({
	          items:[{
	            html:giveMeHeader('images/Assets/editor.jpg'),
	          },{
	            html:getFlexibleCover(spage.p11_eng,spage.p11_chi,'chi'),
	            cls:"coverText"
	          }]
	        })

	        bigCover = createImageCover('black','images/bigCover.jpg');
	        toc = createImageCover('white','images/table_of_contents.jpg');
	        toc.addListener({
	          click:function(){onContentClick()},
	          element:'el'
	        })
	        ceylonCover = createImageCover('white','images/Assets/P20.jpg');

	        ceylonTOC = new Ext.Panel({
	          height:"100%",
	          items:[{
	              flex:1,
	              items:[{
	                id:"abc",
	                height:"100%",
	                html:"<div class='imageWallTop'><img src='images/Assets/Caption-cover.jpg'></div><div class='imageWall' onclick='carouselMain.setActiveItem(c_story1)' style='background:url(images/Assets/toc_ceylon/1.jpg)'><img src='images/Assets/toc_ceylon/1.png'></div><div class='imageWall' onclick='carouselMain.setActiveItem(c_story2)' style='background:url(images/Assets/toc_ceylon/2.jpg)' ><img src='images/Assets/toc_ceylon/2.png'></div><div class='imageWall' style='background:url(images/Assets/toc_ceylon/3.jpg);' onclick='carouselMain.setActiveItem(c_story3)'><img src='images/Assets/toc_ceylon/3.png'></div><div class='imageWall imageWallLeft' onclick='carouselMain.setActiveItem(c_story4)' style='background:url(images/Assets/toc_ceylon/4.jpg);background-size:100% 100%;'><img src='images/Assets/toc_ceylon/4.png'></div><div class='imageWall imageWallLeft' onclick='carouselMain.setActiveItem(featured_5)' style='background:url(images/Assets/toc_ceylon/5.jpg);background-size:100% 100%;'><img style='float:right' src='images/Assets/toc_ceylon/5.png'></div>",   
	              }]
	          }]  
	        })

					/*ads*/
					patek_1 = createImageCover('black','images/ads/pp1.jpg');
					patek_2 = createImageCover('black','images/ads/pp2.jpg');
					channel_1 = createImageCover('black','images/ads/chanel1.jpg');
					channel_2 = createImageCover('black','images/ads/chanel2.jpg');
					vertu_1 = createImageCover('black','images/ads/vertu1.jpg');
					vertu_2 = createImageCover('black','images/ads/vertu2.jpg');
					chopard = createImageCover('black','images/ads/chopard.jpg');
					jaeger = createImageCover('black','images/ads/jaeger.jpg');
					mandarin = createImageCover('black','images/ads/mandarin.jpg');
					mont = createImageCover('black','images/ads/mont.jpg');
					olympus = createImageCover('black','images/ads/olympus.jpg');
					piaget = createImageCover('black','images/ads/piaget.jpg');
					sichuan = createImageCover('black','images/ads/sichuan.jpg');
					ocbcp = createImageCover('black','images/ads/ocbcpremier.jpg');
					ocbcr = createImageCover('black','images/ads/ocbcrolex.jpg');
					bulgari = createImageCover('black','images/ads/bulgari.jpg');

	        kotCover = createImageCover('white','images/Assets/kingoftea.jpg');
					staffbox = createImageCover('white','images/staffbox.jpg');
	        kotStory = createMultiImageScrollerPanel('images/Assets/boat.jpg',spage.kot,spage.kot_chi);

						thpage_shop1 = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p6_a,dupletPage.p6_b);
						thpage_shop2 = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p7_a,dupletPage.p7_b);
						thpage_shop3 = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p8_a,dupletPage.p8_b);
						thpage_shop4 = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p9_a,dupletPage.p9_b);
						thpage_shop5 = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p10_a,dupletPage.p10_b);
						thpage_shop6 = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p11_a,dupletPage.p11_b);
						thpage_shop7 = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p12_a,dupletPage.p12_b);

						mix = createDupletPanel('images/Assets/JournalShopping.jpg',dupletPage.p19_a,dupletPage.p19_b);

						/*watchout journal*/
						        thpage_watch1 = createDupletPanel('images/Assets/JournalWatchOut.jpg',dupletPage.p13_a,dupletPage.p13_b);
										thpage_watch2 = createDupletPanel('images/Assets/JournalWatchOut.jpg',dupletPage.p14_a,dupletPage.p14_b);
										thpage_watch3 = createDupletPanel('images/Assets/JournalWatchOut.jpg',dupletPage.p15_a,dupletPage.p15_b);
										thpage_watch4 = createDupletPanel('images/Assets/JournalWatchOut.jpg',dupletPage.p16_a,dupletPage.p16_b);
										thpage_watch5 = createDupletPanel('images/Assets/JournalWatchOut.jpg',dupletPage.p17_a,dupletPage.p17_b);
										thpage_watch6 = createDupletPanel('images/Assets/JournalWatchOut.jpg',dupletPage.p18_a,dupletPage.p18_b);


										journal_travel1= createThreeImagePanelNoSub('images/Assets/journal.jpg',spage.p6);
										journal_travel2= createThreeImagePanelWithCaption('images/Assets/journal.jpg',spage.jt2,spage.jt2_chi,"images/Assets/caption-travel.png", 'chi');

																		c_story1 = createImageCover('white','images/Assets/P22.jpg');
										        				f_story1 = createMultiImageScrollerPanel('images/Assets/Caption-cover.jpg',spage.kot1,spage.kot1_chi);

																		c_story2 = createImageCover('white','images/Assets/P24.jpg');
																		f_story2 = createMultiImageScrollerPanel('images/Assets/Caption-cover.jpg',spage.kot2,spage.kot2_chi);

																		c_story3 = createImageCover('white','images/kotCover.jpg');
														        f_story3 = createMultiImageScrollerPanel('images/Assets/Caption-cover.jpg',spage.kot3,spage.kot3_chi);

																		c_story4 = createImageCover('white','images/Assets/P27.jpg');
														        f_story4 = createMultiImageScrollerPanel('images/Assets/Caption-cover.jpg',spage.kot4,spage.kot4_chi);

																		f_story5 = createMultiImageScrollerPanel('images/Assets/Caption-cover.jpg',spage.kot5,spage.kot5_chi);
																		/*featured_5 = createCoverPagePanelWithText('images/Assets/Caption-cover.jpg', coverPage.p_featured,spage.kot5,spage.kot5_chi);

																		c_story6 = createImageCover('white','images/Assets/P30.jpg');*/
														        erotic = createCoverPagePanelWithText('images/Assets/Caption-collect.png',coverPage.p_erotic, spage.erotic,spage.erotic_chi);

																		c_rado= createImageCover('white','images/Assets/c_rado.jpg');
																		timepieces= createMultiImageScrollerPanel('images/Assets/Caption-P31.jpg', spage.tp, spage.tp_chi, 'chi');			

																		c_piaget1= createImageCover('white','images/Assets/c_piaget1.jpg');
																	 	piaget_1= createMultiImageScrollerPanel('images/Assets/Caption-P31.jpg',spage.piaget,spage.piaget_chi);	
																	  c_piaget2= createImageCover('white','images/Assets/c_piaget2.jpg');
																		piaget_2 = createMultiImageScrollerPanel('images/Assets/Caption-P31.jpg',spage.piaget2,spage.piaget2_chi, 'chi');

																		c_wine= createImageCover('white','images/Assets/c_wine.jpg');
														        article_wine =createThreeImagePanelNoCap('images/Assets/Caption-P36.jpg',spage.wine,spage.wine_chi,'chi');

																		/*i_cover_feature = createImageCover('white','images/Assets/P39a.jpg');
																		i_article_feature = createMultiImageScrollerPanelwithCap('images/Assets/Caption-P39.jpg',"images/Assets/Title-P31.jpg",spage.kotI,spage.kotI_chi);

																		i_cover_feature = createImageCover('white','images/Assets/i-ocbc.jpg');*/
																		i_article_feature = createCoverPagePanelWithText('images/Assets/Caption-P39.jpg',coverPage.p_feat, spage.kotI, spage.kotI_chi);

																		ocbc_wealth = createCoverPagePanelWithText('images/Assets/Caption-P40.jpg', coverPage.p_wealth,spage.wealth,spage.wealth_chi);
																		ocbc_wealth2 = createCoverPagePanelWithText('images/Assets/Caption-bw.jpg', coverPage.p_bw,spage.wealth2,spage.wealth2_chi, 'chi');

																		dinnerPage = new Ext.Panel({
														          items:[{
														            html:giveMeHeader('images/Assets/Caption-P41.jpg'),
														          },{
														            html:getFlexibleCover(spage.dinner,spage.dinner_chi),
														            cls:"coverText"
														          }]
														        })

																						c_indulgence= createImageCover('white','images/Assets/c_indulgence.jpg');
																		        i_indulgence = createMultiImageScrollerPanel('images/Assets/Caption-P42.jpg',spage.kot_indulgence,spage.kot_indulgence_chi);

																						c_jewellery= createImageCover('white','images/Assets/P44.jpg');
																		        i_jewellery = createMultiImageScrollerPanel('images/Assets/Caption-P44.jpg',spage.kot_jewel,spage.kot_jewel_chi);

																						c_happenings= createImageCover('white','images/Assets/c_hermes.jpg');
																		        happenings_hermes = createMultiImageScrollerPanel('images/Assets/Caption-P46.jpg',spage.kotH,spage.kotH_chi);

																						c_gourmet= createImageCover('white','images/Assets/c_gourmet.jpg');
																		        i_gourmet = createMultiImageScrollerPanel('images/Assets/Caption-P48.jpg',spage.kotG,spage.kotG_chi,'chi');

																						wheels = createCoverPagePanelWithText('images/Assets/Caption-P50.jpg', coverPage.p_wheels,spage.wheels,spage.wheels_chi);

																						c_art1= createImageCover('white','images/Assets/c_art1.jpg');
																						art1 = createThreeImagePanel('images/Assets/Caption-art.jpg',spage.art,spage.art_chi, 'chi');

																						c_art2= createImageCover('white','images/Assets/c_art2.jpg');
																						art2 = createMultiImageScrollerPanel('images/Assets/Caption-art.jpg', spage.art2,spage.art2_chi, 'chi');

																						/*muji = createCoverPagePanelWithText('images/Assets/Caption-P46.jpg', coverPage.p_muji,spage.fourPanel_eng,spage.fourPanel_chi,'chi');*/

																						ocbcCover = createCoverWithSideTOC([i_article_feature,ocbc_wealth,dinnerPage,c_indulgence],['images/Assets/P38/1.jpg','images/Assets/P38/2.jpg','images/Assets/P38/3.jpg','images/Assets/P38/4.jpg'],'images/Assets/P38/header.png','images/Assets/P38/image.jpg');

																						c_fashion= createImageCover('white','images/Assets/c_case.jpg');
																		        fashion_case = createThreeImagePanel('images/Assets/Caption-feature.jpg',spage.fashion,spage.fashion_chi,'chi');

																						c_cartier= createImageCover('white','images/Assets/cartiermain.jpg');
																		        i_cartier = createMultiImageScrollerPanel('images/Assets/Tag-cartier.jpg',spage.cartier,spage.cartier_chi);



	        carouselMain = new Ext.Carousel({
	            fullscreen: true,
	            indicator: false,
	            layout: {
	                type: 'vbox',
	                align: 'stretch',
	            },
	            style:"background-color:#fff",
	            defaults: {			
	                flex: 1,
	                style: "background-color:#fff",
	                layout:{
	                    type:'vbox',
	                    align:'stretch'
	                }
	            },
	            listeners:{
	                afterrender : function(){
	                    setTimeout(function(){
	                        carouselMain.getActiveItem().doLayout();
	                    },800); 
	                },
	                cardswitch:function(currentComponent,currentCard){
	                    currentCard.doLayout();
	                    magicTruncate(currentCard);

	 										realignAnnotation();
											window.location.hash = '#jump';
	                }
	            },
	            activeItem:0,
	            /*items: [thpage,fourPanel,ocbcCover,coverPageWithText,sixthpage,bigCover,toc,journalTOC,editorPage,ceylonCover,ceylonTOC,kotCover,kotStory],*/
	            /*items: [ocbc_wealth2, art2, art1, bigCover, patek_1, patek_2, channel_1, channel_2, vertu_1, vertu_2, toc, omega, staffbox, parmigiani, editorPage, hublot, journalTOC, thpage_shop1, c_cartier, i_cartier, cartier_1, cartier_3, cartier_4, cartier_2, thpage_shop2, thpage_shop3, thpage_shop4, thpage_shop5, panerai,
							thpage_shop6, montblanc, thpage_shop7, mix, thpage_watch1, thpage_watch2, chopard, thpage_watch3, ap1, ap2, thpage_watch4, thpage_watch5, thpage_watch6, journal_travel1, fm, journal_travel2, fjb, /*coverPageWithText,*/ 
							/*ceylonCover, thg, ceylonTOC, c_story1, f_story1, hw, c_story2, f_story2, solange,c_story3, f_story3, ademco, c_story4, f_story4, 
							featured_5, c_story6, f_story6, mujiads, timepieces, c_design ,article_design, piaget_2, c_fashion, i_fashion, /*fourPanel, muji,  asme, c_wine, article_wine, ocbcCover, 
							/*i_cover_feature, i_article_feature, ocbcp ,ocbc_wealth, dinnerPage, ocbca, c_indulgence, i_indulgence, c_jewellery, i_jewellery, c_happenings, i_happenings, 
							c_gourmet, i_gourmet, sarasin ,wheels, ph, ocbcr],*/
							items: [bigCover, patek_1, patek_2, channel_1, channel_2, vertu_1, vertu_2, toc, jaeger, staffbox, chopard, editorPage, bulgari, journalTOC, thpage_shop1, thpage_shop2, thpage_shop3, thpage_shop4, thpage_shop5, thpage_shop6, thpage_shop7, mix, thpage_watch1, thpage_watch2, thpage_watch3,thpage_watch4, thpage_watch5, piaget, thpage_watch6, mont, journal_travel1, journal_travel2,
							ceylonCover, ceylonTOC, olympus,f_story1, f_story2, f_story3, f_story4, f_story5, erotic, c_piaget1, piaget_1, c_piaget2, piaget_2, c_rado, timepieces, c_happenings, happenings_hermes, c_fashion, fashion_case, c_art1, art1, c_art2, art2, c_wine, article_wine, 
							ocbcCover, i_article_feature,ocbcp, ocbc_wealth, ocbc_wealth2, c_indulgence, i_indulgence, sichuan, c_gourmet, i_gourmet, wheels, mandarin, ocbcr],
							html:"<div id='toc' onclick='onContentClick()'></div>"
        });
}

function updateOrientation(force)
        {
            if(window.orientation != oriOrient || iPad || force){
                var currentCard = carouselMain.getActiveItem();
                
                oriOrient = window.orientation;
                //carouselMain.setWidth(window.innerWidth-1);
                carouselMain.setWidth(window.innerWidth);
                carouselMain.setHeight(window.innerHeight);
                currentCard.doLayout();
                setTimeout(function(){
                    updateImgPanel();
                    var coverCaptionArray = getAllId('.coverCaption');
                    for(var i = 0; coverCaptionArray[i];i++){
                        carouselMain.query(coverCaptionArray[i])[0].setHeight(20/100*window.innerHeight);
                    }
										realignAnnotation();
                    magicTruncate(currentCard);
                },600);// for android
            //}
                
            }
            
            
        }


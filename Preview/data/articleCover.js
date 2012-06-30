function generateArticleCoverImage(name,content,img){
	var multiplier = getMultipler();
	var article_1_content = content;
	var article_1_summary = truncate(article_1_content, 500);
	var article_1_imgSrc = img;
	var article_1_title = img;
	var article_1 = new createArticle(name,article_1_content, article_1_summary, article_1_title, article_1_imgSrc);

    return article_1;
}

function generateArticleCoverCaption(name,content,img){
	var multiplier = getMultipler();
	var article_1_content = content;
	var article_1_summary = truncate(article_1_content, 500);
	var article_1_imgSrc = img;
	var article_1_title = img;
	var article_1 = new createArticle(name,article_1_content, article_1_summary, article_1_title, article_1_imgSrc);

    return article_1;
}

function generateArticleCovers(){
	var articleArr = [];
	//push array
	var str = "",
		strImg = "";
	
	str = "布莱德湖心有座高出水面40米的小岛，岛上的巴洛克式教堂为昔日教徒祈祷的圣地，现已辟为教堂艺术博物馆。前往小岛可乘坐由船伕人手操控的小艇，或自己划船过去. In 1004, the German emperor Henry II built the Bled castle and church, perched atop a steep cliff on the island in the middle of Lake Bled. Once, the baroque church attracted pilgrims to worship, it today houses a church art museum. The island may be reached by means of a pletna boat, which resembles a large gondola. (Photo: Vila Bled)";
	strImg = "images/Assets/P44.jpg";
	articleArr.push(generateArticleCoverImage("p1_a",str,strImg));

	str = "火车是“慢游”经典，过去百多年在地球各大洲穿行的豪华火车，从南非的Rovos Rail，到澳洲的Ghan，都用贵族的气息和奢侈的时间打造，让今日的种种奢华旅游显得逊色。</br>TEXT 黄少伟 & LIM HUI SIN";
	strImg = "images/Assets/Template3-Img02.jpg";
	articleArr.push(generateArticleCoverCaption("p1_b",str,strImg));  

	str = "布莱德湖心有座高出水面40米的小岛，岛上的巴洛克式教堂为昔日教徒祈祷的圣地，现已辟为教堂艺术博物馆。前往小岛可乘坐由船伕人手操控的小艇，或自己划船过去. In 1004, the German emperor Henry II built the Bled castle and church, perched atop a steep cliff on the island in the middle of Lake Bled. Once, the baroque church attracted pilgrims to worship, it today houses a church art museum. The island may be reached by means of a pletna boat, which resembles a large gondola. (Photo: Vila Bled)";
	strImg = "images/Assets/P79.jpg";
	articleArr.push(generateArticleCoverImage("p4_a",str,strImg));

	str = "英国知名女设计师Anouska Hempel的私人 豪华木制游艇Beluga，首次开放给公众租用。无微不至的个人化服务，让游艇客人 惬意遨游在诗情画意、阳光灿烂的 亚得里亚海。TEXT 黄少伟 & LIM HUI SIN PHOTO DALMATIAN DESTINATION";
	strImg = "images/Assets/P79-Caption.jpg";
	articleArr.push(generateArticleCoverCaption("p4_b",str,strImg));
	
	str = "";
	strImg = "images/Assets/P-erotic.jpg";
	articleArr.push(generateArticleCoverImage("p_erotic",str,strImg));
	
	str = "";
	strImg = "images/Assets/P-wealth.jpg";
	articleArr.push(generateArticleCoverImage("p_wealth",str,strImg));
	
	str = "";
	strImg = "images/Assets/P-motoring.jpg";
	articleArr.push(generateArticleCoverImage("p_wheels",str,strImg));
	
	str = "";
	strImg = "images/Assets/P-feat.jpg";
	articleArr.push(generateArticleCoverImage("p_feat",str,strImg));
	
	str = "";
	strImg = "images/Assets/P-beyond.jpg";
	articleArr.push(generateArticleCoverImage("p_bw",str,strImg));

	var page = new createPage(articleArr);
	return page;
}
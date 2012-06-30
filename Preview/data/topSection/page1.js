function top_createPage1()
{
	var multiplier = getMultipler();
	var article_1_content = "What difference does 1/1,000th of a second makes? For a Formula 1 race car at full throttle, it can land you – or cost you – a World Championship. The ultra-precise Mikrotimer Flying 1000 Concept Chronograph from TAG Heuer is the only mechanical timepiece that can precisely gauge this phenomenon, all thanks to the first-ever integrated column wheel mechanical 1/100th of a second wrist chronograph with foudroyante central hand display. This innovation of unrivalled precision and chronometry combined two assortments beating at 28,800 and 360,000 beats per hour respectively, thanks to the normal speed and high speed watchmaking chains working independently. For those who are always racing against time, this concept watch will be in production from middle of the year in a limited edition of 150, encased in a beautiful rose gold case.";
	var article_1_summary = truncate(article_1_content, 1000 * multiplier);
	var article_1_imgSrc = "images/Assets/Template2-Img01.jpg";
	var article_1_title = "TAG Heuer Mikrotimer Flying 1000 Concept Chronograph";
	var article_1 = new createArticle(article_1_content, article_1_summary, article_1_title,article_1_imgSrc);
	
	var page =new createPage(article_1);
    return page;
}
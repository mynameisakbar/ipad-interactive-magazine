function top_createPage3()
{
	var multiplier = getMultipler();
	var article_1_content = "Vivamus at sodales leo. Vivamus consectetur imperdiet pellentesque. Cras iaculis nisl sit amet nunc pretium quis elementum felis tristique. Sed eu enim ac diam egestas aliquam non id lorem. Aenean fermentum, quam eget fermentum elementum, massa metus interdum urna, at commodo lectus nisi id metus. Ut justo tortor, aliquet eget eleifend vel, varius id felis. Cras lacinia diam at nulla cursus et commodo velit ullamcorper. Morbi vitae erat dolor. Sed tortor nisi, iaculis vitae tincidunt eu, volutpat sed est. Proin tincidunt, diam mattis porta eleifend, justo ligula blandit tortor, id iaculis sem velit sed mi. Aliquam quis libero metus, interdum feugiat est. Vivamus at sodales leo. Vivamus consectetur imperdiet pellentesque. Cras iaculis nisl sit amet nunc pretium quis elementum felis tristique. Sed eu enim ac diam egestas aliquam non id lorem. Aenean fermentum, quam eget fermentum elementum, massa metus interdum urna, at commodo lectus nisi id metus. Ut justo tortor, aliquet eget eleifend vel, varius id felis. Cras lacinia diam at nulla cursus et commodo velit ullamcorper. Morbi vitae erat dolor. Sed tortor nisi, iaculis vitae tincidunt eu, volutpat sed est. Proin tincidunt, diam mattis porta eleifend, justo ligula blandit tortor, id iaculis sem velit sed mi. Aliquam quis libero metus, interdum feugiat est.";
	var article_1_summary = truncate(article_1_content, 1000 * multiplier);
	var article_1_imgSrc = "images/300x200/img06.jpg";
	var article_1_title = "Round 2 For Jake Gyllenhaal & Taylor Swift?";
	var article_1 = new createArticle(article_1_content, article_1_summary, article_1_title,article_1_imgSrc);
	
	var page =new createPage(article_1);
    return page;
}


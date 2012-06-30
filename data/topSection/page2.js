function top_createPage2()
{
	var multiplier = getMultipler();
	var article_1_content = "Nulla magna nisl, sollicitudin eu gravida eu, hendrerit vel tellus. Etiam purus enim, egestas non consectetur vitae, luctus sit amet mauris. Donec nec enim eget elit pellentesque viverra semper non tortor. Vivamus placerat ligula nec sapien molestie quis tristique risus dapibus. Vivamus a orci augue. Nulla facilisi. Duis cursus venenatis adipiscing. Nunc et leo et neque blandit lacinia eget at erat. In non libero ultrices arcu condimentum convallis. Nulla facilisi. Cras aliquet, diam a accumsan rhoncus, dolor mauris laoreet lorem, quis varius velit justo mollis metus. Phasellus neque sapien, consectetur ut interdum et, malesuada in neque. Praesent est felis, mattis quis sagittis nec, condimentum nec urna. Mauris at erat lectus.Nulla magna nisl, sollicitudin eu gravida eu, hendrerit vel tellus. Etiam purus enim, egestas non consectetur vitae, luctus sit amet mauris. Donec nec enim eget elit pellentesque viverra semper non tortor. Vivamus placerat ligula nec sapien molestie quis tristique risus dapibus. Vivamus a orci augue. Nulla facilisi. Duis cursus venenatis adipiscing. Nunc et leo et neque blandit lacinia eget at erat. In non libero ultrices arcu condimentum convallis. Nulla facilisi. Cras aliquet, diam a accumsan rhoncus, dolor mauris laoreet lorem, quis varius velit justo mollis metus. Phasellus neque sapien, consectetur ut interdum et, malesuada in neque. Praesent est felis, mattis quis sagittis nec, condimentum nec urna. Mauris at erat lectus.";
	var article_1_summary = truncate(article_1_content, 100 * multiplier);
	var article_1_imgSrc = "images/300x200/img05.jpg";
	var article_1_title = "First to get wet for Katy Perry";
	var article_1_link = "http://www.mobdis.com";
	var article_1 = new createArticle(article_1_content, article_1_summary, article_1_title,article_1_imgSrc, article_1_link);
	
	var page = new createPage(article_1);
    return page;
}
/*this one is used for the content*/
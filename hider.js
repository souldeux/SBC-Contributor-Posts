jQuery( document ).ready(function() {


	var $editor_mode_button = jQuery(document.createElement('input')).attr({type:'button', id:'editor_mode_button', value:'Enter Contributor Mode'}).addClass('button button-large button-primary').click(enterContributorMode);
	jQuery("#post").prepend($editor_mode_button);

	//`:contains` returns full haystack - not just needle. we filter to return only the child we want, not child + parents
	function findElementByText(text){
		var jSpot = jQuery("div:contains("+text+")")
			.filter(function() { return jQuery(this).children().length === 0;});
		return jSpot;
	};

	function enterContributorMode(){

		//change button text
		jQuery("#editor_mode_button").val("Currently in Contributor Mode - Save Post as Draft & Refresh Page to Exit").prop('disabled', true).removeClass('button-primary');

		//change "Bottom Line" label to "Excerpt"
		findElementByText("Bottom Line").text('Excerpt');

		//Layout Options > Primary Category: Books
		jQuery('.it_option option[value="11"]').prop('selected', true);

		//hide some content blocks in their entirety; don't use Screen Options since changes persist
		jQuery("#it_shortcode_meta_box, #it_post_meta_box, #sharing_meta, #it_post_reset, #it_post_attributes, #it_post_awards, #it_post_badges, #it_post_reactions, #amazonLinkID")
			.hide();

		//hide some stuff in the main "add new post" area
		jQuery(".wp-editor-tabs, #wp-content-media-buttons").hide();



		jQuery("#_post_type_2").prop('checked', true); //review options > post type: review
		jQuery("#_post_type_2").parent().parent().hide(); //hides review options > post type

		//Negatives > amazon buy link
		findElementByText("Negatives").text('Paste Embed Code from Amazon').append("<p>Paste immediately after your code: [post_thumbnail_size=\"medium\"]</p>");
		jQuery("#_negatives").prop('placeholder', "From the book's Kindle page on Amazon, click <Embed>.\n\rSelect 'Embed on your site (HTML).'\n\rSelect your Amazon Associates ID.\n\rCopy-paste code into this field.");

		//for other elements found by text, we want to hide the parent div
		findElementByText("Rating Metric").parent().hide();
		findElementByText("Schema Type").parent().hide();
		findElementByText("Total Score Override").parent().hide();


		//hide publish button, give "save as draft" the same styling as publish button
		jQuery("#save-post").addClass('button-primary');
		jQuery("#major-publishing-actions, #misc-publishing-actions").hide();
		jQuery("#minor-publishing-actions").css('margin-bottom', '10px');

		//add instructions to coauthor area
		jQuery("#coauthors-edit").prepend("<p>Include all columnists contributing to this rec</p>");

		//add formatting instructions to post area
		jQuery("#wp-content-wrap").prepend("<p>If you have quotes, paste this in before Favorite Quotes: <b>[section label=\"Hot Quotes\" anchor=\"Hot Quotes\"]</b></p><p>Surround your quotes like this: <b>[su_quote]INSERT QUOTE HERE[/su_quote]</b></p>");

		//In "Categories" tab, hide "Book News" category
		jQuery("#category-8").hide();

		//Hide extra rating categories
		jQuery("#category-1, #category-4488, #category-4491").hide();

		//Hide extra "misc" categories
		jQuery("#category-4490, #category-4741, #category-27, #category-27, #category-4489, #category-44, #category-4492, #category-59, #category-2607, #category-4714, #category-64, #category-5050, #category-68, #in-category-28").hide();

		//Select default categories: Books, Genre, Heat rating, Rating, Series, Columnists
		jQuery("#in-category-11, #in-category-25, #in-category-29, #in-category-54, #in-category-56, #in-category-13").prop('checked', true);

		//add instructions to some category labels
		//genre
		jQuery("#in-category-25").parent().append(" (all that apply)");
		//heat rating
		jQuery("#in-category-29").parent().append(" (select only one)");
		//rating
		jQuery("#in-category-54").parent().append(" (select only one, unless Platinum)");
		//series
		jQuery("#in-category-56").parent().append(" (all that apply)");
		//columnists
		jQuery("#in-category-13").parent().append(" (you + any others)");

		

		//Hide "screen options"
		jQuery("#show-settings-link").hide();
	};

});
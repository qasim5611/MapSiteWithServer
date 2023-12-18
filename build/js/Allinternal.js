{/*  */}
					setREVStartSize({c: 'rev_slider_1_1',rl:[1920,1441,1025,480],el:[750,600,600,500],gw:[1400,1100,600,300],gh:[750,600,600,500],layout:'fullscreen',offsetContainer:'',offset:'',mh:"0"});
					var	revapi1,
						tpj;
					jQuery(function() {
						tpj = jQuery;
						if(tpj("#rev_slider_1_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_1_1");
						}else{
							revapi1 = tpj("#rev_slider_1_1").show().revolution({
								jsFileLocation:"//chapel.qodeinteractive.com/wp-content/plugins/revslider/public/assets/js/",
								sliderLayout:"fullscreen",
								duration:"3000ms",
								visibilityLevels:"1920,1441,1025,480",
								gridwidth:"1400,1100,600,300",
								gridheight:"750,600,600,500",
								minHeight:"",
								editorheight:"750,600,600,500",
								responsiveLevels:"1920,1441,1025,480",
								disableProgressBar:"on",
								navigation: {
									onHoverStop:false,
									arrows: {
										enable:true,
										tmp:"<span class=\"eltdf-arrow-holder\" data-num=\"{{param1}}\"><span></span></span>",
										style:"chapel-nav",
										hide_onmobile:true,
										hide_under:"1025px",
										left: {
											h_offset:50
										},
										right: {
											h_offset:50
										}
									},
									bullets: {
										enable:true,
										tmp:"<span></span>",
										style:"chapel-light",
										hide_over:"1024px",
										v_offset:40
									}
								},
								parallax: {
									levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
									type:"scroll",
									origo:"slideCenter",
									speed:0
								},
								fallbacks: {
									allowHTML5AutoPlayOnAndroid:true
								},
							});
						}

					});
				{/* </script> */}
{/* <script> */}
					var htmlDivCss = unescape(".scroll-down-svg-rev%20%7B%0A%20%20width%3A%2040px%3B%0A%20%20height%3A%2040px%3B%0A%7D%0A%0A.scroll-down-svg-rev%20path%3Anth-of-type%282%29%20%7B%0A%20%20animation%3A%202s%20scroll-svg-move-down%20infinite%3B%0A%7D");
					var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
					if(htmlDiv) {
						htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
					}else{
						var htmlDiv = document.createElement('div');
						htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
						document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
					}
				// </script>
{/* <script> */}
					var htmlDivCss = unescape("%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20width%3A%2040px%3B%0A%20%20%20%20height%3A%2030px%3B%0A%20%20%20%20margin%3A%200%3B%0A%20%20%20%20padding%3A%200%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20color%3A%20%23c59a8e%3B%0A%20%20%20%20background%3A%20none%3B%0A%20%20%20%20border%3A%200%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%20%20outline%3A%20none%3B%0A%20%20%20%20-webkit-appearance%3A%20none%3B%0A%20%20%20%20z-index%3A%2020%3B%0A%20%20%20%20transition%3A%20color%20.2s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%3Abefore%20%7B%0A%09display%3A%20none%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20.eltdf-arrow-holder%3Abefore%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20padding%3A%2010px%200%3B%0A%20%20%20%20font-family%3A%20%27Noto%20Serif%27%2C%20serif%3B%0A%20%20%20%20font-size%3A%2013px%3B%0A%20%20%20%20font-style%3A%20italic%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20color%3A%20%20%23c59a8e%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20transform%3A%20translateX%280%29%3B%0A%20%20%20%20transition%3A%20all%20.3s%20.15s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20.eltdf-arrow-holder%3Aafter%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20width%3A%20auto%3B%0A%20%20%20%20min-width%3A%2012px%3B%0A%20%20%20%20padding%3A%2010px%207px%3B%0A%20%20%20%20font-family%3A%20%27Noto%20Serif%27%2C%20serif%3B%0A%20%20%20%20font-size%3A%2013px%3B%0A%20%20%20%20font-style%3A%20italic%3B%0A%20%20%20%20color%3A%20%23c59a8e%3B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transition%3A%20all%20.3s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20.eltdf-arrow-holder%20span%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%202px%3B%0A%20%20%20%20bottom%3A%202px%3B%0A%20%20%20%20background-color%3A%20%23ffffff%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20%7B%0A%20%20left%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20.eltdf-arrow-holder%20span%20%7B%0A%20%20left%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20content%3A%20attr%28data-num%29%3B%0A%20%20left%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20content%3A%20%27prev%27%3B%0A%20%20left%3A%200%3B%0A%20%20transform%3A%20translateX%2820px%29%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%3Ahover%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20opacity%3A%200%3B%0A%20%20transform%3A%20translateX%2820px%29%3B%0A%20%20transition%3A%20all%20.3s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%3Ahover%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20opacity%3A%201%3B%0A%20%20transform%3A%20translateX%280%29%3B%0A%20%20transition%3A%20all%20.3s%20.15s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20%7B%0A%20%20right%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20.eltdf-arrow-holder%20span%20%7B%0A%20%20right%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20content%3A%20attr%28data-num%29%3B%0A%20%20right%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20content%3A%20%27next%27%3B%0A%20%20right%3A%200%3B%0A%20%20transform%3A%20translateX%28-20px%29%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%3Ahover%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20opacity%3A%200%3B%0A%20%20transform%3A%20translateX%28-20px%29%3B%0A%20%20transition%3A%20all%20.3s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%3Ahover%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20opacity%3A%201%3B%0A%20%20transform%3A%20translateX%280%29%3B%0A%20%20transition%3A%20all%20.3s%20.15s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%20%7B%0A%09display%3A%20inline-block%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20margin%3A%200%203px%3B%0A%20%20%20%20padding%3A%203px%3B%0A%20%20%20%20background%3A%20none%3B%0A%20%20%20%20border%3A%200%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%20%20outline%3A%20none%3B%0A%20%20%20%20-webkit-appearance%3A%20none%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%20span%20%7B%0A%09display%3A%20inline-block%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%208px%3B%0A%20%20%20%20height%3A%208px%3B%0A%20%20%20%20border-radius%3A%203em%3B%0A%20%20%20%20background-color%3A%20%23000000%3B%0A%20%20%09opacity%3A%20.5%3B%0A%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20transition%3A%20background-color%20.2s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%3Ahover%20span%2C%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet.selected%20span%20%7B%0A%09background-color%3A%20%23000000%3B%0A%20%20%09opacity%3A%201%3B%0A%7D%0A%0A.eltdf-light-header%20%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%20span%20%7B%0A%09background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%201%29%3B%0A%7D%0A%0A.eltdf-light-header%20%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullett%3Ahover%20span%2C%0A.eltdf-light-header%20%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet.selected%20span%20%7B%0A%20%20%20%20background-color%3A%20%23fff%3B%0A%7D%0A");
					var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
					if(htmlDiv) {
						htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
					}else{
						var htmlDiv = document.createElement('div');
						htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
						document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
					}
				// </script>
{/* <script> */}
					var htmlDivCss = unescape("%0A%0A%0A%0A%0A%0A%0A%0A");
					var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
					if(htmlDiv) {
						htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
					}else{
						var htmlDiv = document.createElement('div');
						htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
						document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
					}
				// </script>

                // <script data-cfasync="false" src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
					setREVStartSize({c: 'rev_slider_14_2',rl:[1920,1441,1025,480],el:[580,512,1062,910],gw:[1400,1100,600,280],gh:[580,512,1062,910],layout:'fullwidth',mh:"0"});
					var	revapi14,
						tpj;
					jQuery(function() {
						tpj = jQuery;
						if(tpj("#rev_slider_14_2").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_14_2");
						}else{
							revapi14 = tpj("#rev_slider_14_2").show().revolution({
								sliderType:"hero",
								jsFileLocation:"//chapel.qodeinteractive.com/wp-content/plugins/revslider/public/assets/js/",
								visibilityLevels:"1920,1441,1025,480",
								gridwidth:"1400,1100,600,280",
								gridheight:"580,512,1062,910",
								minHeight:"",
								editorheight:"580,512,1062,910",
								responsiveLevels:"1920,1441,1025,480",
								disableProgressBar:"on",
								navigation: {
									onHoverStop:false
								},
								fallbacks: {
									allowHTML5AutoPlayOnAndroid:true
								},
							});

						}

					});
				{/* </script> */}

// {/* <script> /* <![CDATA[ */var tribe_l10n_datatables = {"aria":{"sort_ascending":": activate to sort column ascending","sort_descending":": activate to sort column descending"},"length_menu":"Show _MENU_ entries","empty_table":"No data available in table","info":"Showing _START_ to _END_ of _TOTAL_ entries","info_empty":"Showing 0 to 0 of 0 entries","info_filtered":"(filtered from _MAX_ total entries)","zero_records":"No matching records found","search":"Search:","all_selected_text":"All items on this page were selected. ","select_all_link":"Select all pages","clear_selection":"Clear Selection.","pagination":{"all":"All","next":"Next","previous":"Previous"},"select":{"rows":{"0":"","_":": Selected %d rows","1":": Selected 1 row"}},"datepicker":{"dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesMin":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"nextText":"Next","prevText":"Prev","currentText":"Today","closeText":"Done","today":"Today","clear":"Clear"}};/* ]]> */ </script><link href="https://fonts.googleapis.com/css?family=Roboto:400%7CNoto+Serif:italic%7CMontserrat:500%2C400%2C600" rel="stylesheet" property="stylesheet" type="text/css" media="all"> */}

		var c = document.body.className;
		c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
		document.body.className = c;
	{/* </script> */}

		if(typeof revslider_showDoubleJqueryError === "undefined") {
			function revslider_showDoubleJqueryError(sliderID) {
				var err = "<div class='rs_error_message_box'>";
				err += "<div class='rs_error_message_oops'>Oops...</div>";
				err += "<div class='rs_error_message_content'>";
				err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
				err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
				err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
				err += "</div>";
			err += "</div>";
				jQuery(sliderID).show().html(err);
			}
		{/* }		</script> */}

			var wc_product_block_data = JSON.parse( decodeURIComponent( '%7B%22min_columns%22%3A1%2C%22max_columns%22%3A6%2C%22default_columns%22%3A3%2C%22min_rows%22%3A1%2C%22max_rows%22%3A6%2C%22default_rows%22%3A1%2C%22thumbnail_size%22%3A300%2C%22placeholderImgSrc%22%3A%22https%3A%5C%2F%5C%2Fchapel.qodeinteractive.com%5C%2Fwp-content%5C%2Fuploads%5C%2Fwoocommerce-placeholder-300x300.png%22%2C%22min_height%22%3A500%2C%22default_height%22%3A500%2C%22isLargeCatalog%22%3Afalse%2C%22limitTags%22%3Afalse%2C%22hasTags%22%3Atrue%2C%22productCategories%22%3A%5B%7B%22term_id%22%3A15%2C%22name%22%3A%22Faith%22%2C%22slug%22%3A%22faith%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A15%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A5%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Fchapel.qodeinteractive.com%5C%2Fproduct-category%5C%2Ffaith%5C%2F%22%7D%2C%7B%22term_id%22%3A61%2C%22name%22%3A%22Family%22%2C%22slug%22%3A%22family%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A61%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A2%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Fchapel.qodeinteractive.com%5C%2Fproduct-category%5C%2Ffamily%5C%2F%22%7D%2C%7B%22term_id%22%3A60%2C%22name%22%3A%22Holiday%22%2C%22slug%22%3A%22holiday%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A60%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A2%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Fchapel.qodeinteractive.com%5C%2Fproduct-category%5C%2Fholiday%5C%2F%22%7D%2C%7B%22term_id%22%3A63%2C%22name%22%3A%22Love%22%2C%22slug%22%3A%22love%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A63%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A1%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Fchapel.qodeinteractive.com%5C%2Fproduct-category%5C%2Flove%5C%2F%22%7D%2C%7B%22term_id%22%3A62%2C%22name%22%3A%22Prayer%22%2C%22slug%22%3A%22prayer%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A62%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A5%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22https%3A%5C%2F%5C%2Fchapel.qodeinteractive.com%5C%2Fproduct-category%5C%2Fprayer%5C%2F%22%7D%5D%2C%22homeUrl%22%3A%22https%3A%5C%2F%5C%2Fchapel.qodeinteractive.com%5C%2F%22%7D' ) );
		{/* </script> */}

var wpcf7 = {"apiSettings":{"root":"https:\/\/chapel.qodeinteractive.com\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"cached":"1"};

// </script>

var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%"};

var wc_cart_fragments_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_7a7af869fde19dc3a73c35b0abbfcc37","fragment_name":"wc_fragments_7a7af869fde19dc3a73c35b0abbfcc37","request_timeout":"5000"};

var eltdfGlobalVars = {"vars":{"eltdfAddForAdminBar":0,"eltdfElementAppearAmount":-100,"eltdfAjaxUrl":"https:\/\/chapel.qodeinteractive.com\/wp-admin\/admin-ajax.php","sliderNavPrevArrow":"eltdf-custom-arrow-left","sliderNavNextArrow":"eltdf-custom-arrow-right","ppExpand":"Expand the image","ppNext":"Next","ppPrev":"Previous","ppClose":"Close","eltdfStickyHeaderHeight":0,"eltdfStickyHeaderTransparencyHeight":70,"eltdfTopBarHeight":38,"eltdfLogoAreaHeight":0,"eltdfMenuAreaHeight":131,"eltdfMobileHeaderHeight":70}};
var eltdfPerPageVars = {"vars":{"eltdfMobileHeaderHeight":70,"eltdfStickyScrollAmount":1150,"eltdfHeaderTransparencyHeight":0,"eltdfHeaderVerticalWidth":0}};
        }


        		var htmlDivCss = unescape("%0A%0A%0A%0A%0A%0A%0A%0A");
            var htmlDiv = document.getElementById(
              "rs-plugin-settings-inline-css"
            );
            if (htmlDiv) {
              htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
            } else {
              var htmlDiv = document.createElement("div");
              htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
              document
                .getElementsByTagName("head")[0]
                .appendChild(htmlDiv.childNodes[0]);
            }



            	var htmlDivCss = unescape(
                "%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20width%3A%2040px%3B%0A%20%20%20%20height%3A%2030px%3B%0A%20%20%20%20margin%3A%200%3B%0A%20%20%20%20padding%3A%200%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20color%3A%20%23c59a8e%3B%0A%20%20%20%20background%3A%20none%3B%0A%20%20%20%20border%3A%200%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%20%20outline%3A%20none%3B%0A%20%20%20%20-webkit-appearance%3A%20none%3B%0A%20%20%20%20z-index%3A%2020%3B%0A%20%20%20%20transition%3A%20color%20.2s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%3Abefore%20%7B%0A%09display%3A%20none%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20.eltdf-arrow-holder%3Abefore%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20padding%3A%2010px%200%3B%0A%20%20%20%20font-family%3A%20%27Noto%20Serif%27%2C%20serif%3B%0A%20%20%20%20font-size%3A%2013px%3B%0A%20%20%20%20font-style%3A%20italic%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20color%3A%20%20%23c59a8e%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20transform%3A%20translateX%280%29%3B%0A%20%20%20%20transition%3A%20all%20.3s%20.15s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20.eltdf-arrow-holder%3Aafter%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20width%3A%20auto%3B%0A%20%20%20%20min-width%3A%2012px%3B%0A%20%20%20%20padding%3A%2010px%207px%3B%0A%20%20%20%20font-family%3A%20%27Noto%20Serif%27%2C%20serif%3B%0A%20%20%20%20font-size%3A%2013px%3B%0A%20%20%20%20font-style%3A%20italic%3B%0A%20%20%20%20color%3A%20%23c59a8e%3B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transition%3A%20all%20.3s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows%20.eltdf-arrow-holder%20span%20%7B%0A%09position%3A%20absolute%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20height%3A%202px%3B%0A%20%20%20%20bottom%3A%202px%3B%0A%20%20%20%20background-color%3A%20%23ffffff%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20%7B%0A%20%20left%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20.eltdf-arrow-holder%20span%20%7B%0A%20%20left%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20content%3A%20attr%28data-num%29%3B%0A%20%20left%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20content%3A%20%27prev%27%3B%0A%20%20left%3A%200%3B%0A%20%20transform%3A%20translateX%2820px%29%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%3Ahover%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20opacity%3A%200%3B%0A%20%20transform%3A%20translateX%2820px%29%3B%0A%20%20transition%3A%20all%20.3s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-leftarrow%3Ahover%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20opacity%3A%201%3B%0A%20%20transform%3A%20translateX%280%29%3B%0A%20%20transition%3A%20all%20.3s%20.15s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20%7B%0A%20%20right%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20.eltdf-arrow-holder%20span%20%7B%0A%20%20right%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20content%3A%20attr%28data-num%29%3B%0A%20%20right%3A%200%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20content%3A%20%27next%27%3B%0A%20%20right%3A%200%3B%0A%20%20transform%3A%20translateX%28-20px%29%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%3Ahover%20.eltdf-arrow-holder%3Abefore%20%7B%0A%20%20opacity%3A%200%3B%0A%20%20transform%3A%20translateX%28-20px%29%3B%0A%20%20transition%3A%20all%20.3s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-nav.tparrows.tp-rightarrow%3Ahover%20.eltdf-arrow-holder%3Aafter%20%7B%0A%20%20opacity%3A%201%3B%0A%20%20transform%3A%20translateX%280%29%3B%0A%20%20transition%3A%20all%20.3s%20.15s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%20%7B%0A%09display%3A%20inline-block%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20margin%3A%200%203px%3B%0A%20%20%20%20padding%3A%203px%3B%0A%20%20%20%20background%3A%20none%3B%0A%20%20%20%20border%3A%200%3B%0A%20%20%20%20border-radius%3A%200%3B%0A%20%20%20%20outline%3A%20none%3B%0A%20%20%20%20-webkit-appearance%3A%20none%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%20span%20%7B%0A%09display%3A%20inline-block%3B%0A%20%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20%20width%3A%208px%3B%0A%20%20%20%20height%3A%208px%3B%0A%20%20%20%20border-radius%3A%203em%3B%0A%20%20%20%20background-color%3A%20%23000000%3B%0A%20%20%09opacity%3A%20.5%3B%0A%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20transition%3A%20background-color%20.2s%20ease-out%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%3Ahover%20span%2C%0A%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet.selected%20span%20%7B%0A%09background-color%3A%20%23000000%3B%0A%20%20%09opacity%3A%201%3B%0A%7D%0A%0A.eltdf-light-header%20%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet%20span%20%7B%0A%09background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%201%29%3B%0A%7D%0A%0A.eltdf-light-header%20%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullett%3Ahover%20span%2C%0A.eltdf-light-header%20%23rev_slider_1_1_wrapper%20.chapel-light%20.tp-bullet.selected%20span%20%7B%0A%20%20%20%20background-color%3A%20%23fff%3B%0A%7D%0A"
              );
              var htmlDiv = document.getElementById(
                "rs-plugin-settings-inline-css"
              );
              if (htmlDiv) {
                htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
              } else {
                var htmlDiv = document.createElement("div");
                htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
                document
                  .getElementsByTagName("head")[0]
                  .appendChild(htmlDiv.childNodes[0]);
              }




              	var htmlDivCss = unescape(
                  ".scroll-down-svg-rev%20%7B%0A%20%20width%3A%2040px%3B%0A%20%20height%3A%2040px%3B%0A%7D%0A%0A.scroll-down-svg-rev%20path%3Anth-of-type%282%29%20%7B%0A%20%20animation%3A%202s%20scroll-svg-move-down%20infinite%3B%0A%7D"
                );
                var htmlDiv = document.getElementById(
                  "rs-plugin-settings-inline-css"
                );
                if (htmlDiv) {
                  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
                } else {
                  var htmlDiv = document.createElement("div");
                  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
                  document
                    .getElementsByTagName("head")[0]
                    .appendChild(htmlDiv.childNodes[0]);
                }




                		setREVStartSize({
                      c: "rev_slider_1_1",
                      rl: [1920, 1441, 1025, 480],
                      el: [750, 600, 600, 500],
                      gw: [1400, 1100, 600, 300],
                      gh: [750, 600, 600, 500],
                      layout: "fullscreen",
                      offsetContainer: "",
                      offset: "",
                      mh: "0",
                    });
                    var revapi1, tpj;
                    jQuery(function () {
                      tpj = jQuery;
                      if (tpj("#rev_slider_1_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1_1");
                      } else {
                        revapi1 = tpj("#rev_slider_1_1")
                          .show()
                          .revolution({
                            jsFileLocation:
                              "//chapel.qodeinteractive.com/wp-content/plugins/revslider/public/assets/js/",
                            sliderLayout: "fullscreen",
                            duration: "3000ms",
                            visibilityLevels: "1920,1441,1025,480",
                            gridwidth: "1400,1100,600,300",
                            gridheight: "750,600,600,500",
                            minHeight: "",
                            editorheight: "750,600,600,500",
                            responsiveLevels: "1920,1441,1025,480",
                            disableProgressBar: "on",
                            navigation: {
                              onHoverStop: false,
                              arrows: {
                                enable: true,
                                tmp: '<span class="eltdf-arrow-holder" data-num="{{param1}}"><span></span></span>',
                                style: "chapel-nav",
                                hide_onmobile: true,
                                hide_under: "1025px",
                                left: {
                                  h_offset: 50,
                                },
                                right: {
                                  h_offset: 50,
                                },
                              },
                              bullets: {
                                enable: true,
                                tmp: "<span></span>",
                                style: "chapel-light",
                                hide_over: "1024px",
                                v_offset: 40,
                              },
                            },
                            parallax: {
                              levels: [
                                5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48,
                                49, 50, 51, 30,
                              ],
                              type: "scroll",
                              origo: "slideCenter",
                              speed: 0,
                            },
                            fallbacks: {
                              allowHTML5AutoPlayOnAndroid: true,
                            },
                          });
                      }
                    });




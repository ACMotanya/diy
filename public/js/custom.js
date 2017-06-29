////////////////////////////////////////
/// LOGIN INTO THE STORE AND VERIFY  ///
////////////////////////////////////////
function login()
{
  var password;

  if ( localStorage.getItem('session_no') && typeof(localStorage.getItem('session_no')) === "string" && localStorage.getItem('session_no').length === 25 ) {   
    windowHash("shop");
    redirect("store");
  }

  var $loading = $('#loadingDiv').hide();

  $(document).ajaxStart(function () {
    $loading.show();
  }).ajaxStop(function () {
    $loading.hide();
  });

  $("#content").hide();
  $("#login-form").on("submit", function(e) {
     var goHead;
     e.preventDefault();
     username = $('#login-form-username').val();
     password = $('#login-form-password').val();
     var openOrderLines;
     var invoiceLines;

     $.ajax({
      type: "GET",
      url: "https://netlink.laurajanelle.com:444/nlhtml/custom/netlink.php?",
      data: {request_id: "APICLOGIN",
             username: username,
             password: password,
             loc_no: 800},
      async: false,
      success: function(response) {
        if (response.replace(/\s+/g,'').length === 25) {
          goHead = "go";
          $.get("https://www.laurajanelle.com/phphelper/savecart/session.php?customer=" + username.toLowerCase() + "", function(answer){
            if (answer === "0") {
              $.get("https://www.laurajanelle.com/phphelper/savecart/session.php?customer=" + username.toLowerCase() + "&sessid=" + response + "");
              session_no = response.replace(/\s+/g,'');
              localStorage.setItem('session_no', session_no);
            } else if (answer.length === 25 ) {
              localStorage.setItem('session_no', answer);
            }
            localStorage.setItem('username', username);
          }).done(function() {
            windowHash("shop");
            redirect("store");
          });
        } else {
          alert("Login credentials are incorrect, try again.");
          goHead = "stop";
        }
      }
    });
  });
}



//////////////////////////
// Filter Function      //
//////////////////////////
function filterFunction2(a,b,c,d,e,f,g,h)
{
  $.ajax({
    type: "GET",
    url: "https://netlink.laurajanelle.com:444/nlhtml/custom/netlink.php?",
    data: {
      request_id: a,
      level1: b,
      level2: c,
      level3: d,
      level4: e,
      level5: f,
      session_no: g,
      loc_no: h
    },
    success: function(response) {
      $('#display-products').empty();
      itemRender("display-products", response);
    }
  });
}

function itemRender(div,response)
{
  lines = response.split("\n");
  lines.shift();
  if ( lines.length <= 1) {

    document.getElementById(div).innerHTML += '<h1>There are no results</h1>';
  } else {
    var html = [];
    var linesPlus = [];
    for (i=0; i<lines.length - 1; i++) {
      linesPlus.push(lines[i].split("|"));
    }

    for (i=0; i<linesPlus.length; i++) {
      var flds = linesPlus[i];
      console.log(flds[1]);

      prod  = '<li><div class="product"><figure class="product-image-area"><a href="#" title="' + flds[1] + '" class="product-image"><img src="https://www.laurajanelle.com/ljimages/' + flds[0].trim()  + '-sm.png" alt="' + flds[1] + '"></a>';
      prod += '<a href="#" class="product-quickview"><i class="fa fa-share-square-o"></i><span>Quick View</span></a></figure><div class="product-details-area"><h2 class="product-name"><a href="#" title="' + flds[1] + '">' + flds[1] + '</a></h2>';
      prod += '<div class="product-price-box"><span class="product-price">$' + flds[4] + '</span></div><div class="product-actions"><a href="#" class="addtowishlist" title="Add to Wishlist"><i class="fa fa-heart"></i></a><a href="#" class="addtocart" title="Add to Cart"><i class="fa fa-shopping-cart"></i><span>Add to Cart</span></a><a href="#" class="comparelink" title="Add to Compare"><i class="glyphicon glyphicon-signal"></i></a></div></div></div></li>';

      html.push(prod);
    }
    document.getElementById(div).innerHTML += html.join('');
  }
}


//////////////////////////////
// Get Detail View for Item //
//////////////////////////////
function detailView()
{
  jQuery("#images, #addInfo, #productGalleryThumbs").empty();
  jQuery(".product-name, .product-short-desc").remove();

  var picsGallery;
  var picArray = ["", "-pk", "-rl"];
  var dets;
  var secondColumn;
  var detailString;
  var color;
  var type;
  var metal;
  var secondImage;
  var hash = window.location.hash.split("+");
  var stock_no = hash[1];

  if (hash.length === 5 ) {
    detailString = window.location.hash;
    color = hash[2];
    type  = hash[3];
    metal = hash[4];
    localStorage.setItem(stock_no, detailString);
  } else if ( localStorage.getItem(stock_no) !== null  && localStorage.getItem(stock_no) != "undefined" && localStorage.getItem(stock_no).length >= 15 ) {      //  add back if undefined ever comes up again
    dets = localStorage.getItem(stock_no).split("+");
    color = dets[2];
    type  = dets[3];
    metal = dets[4];
  }


  $.ajax({
    type: "GET",
    url: "https://netlink.laurajanelle.com:444/nlhtml/custom/netlink.php?",
    data: {request_id: "APISTKDTL", stock_no: stock_no, session_no: "RGOT9DTDD9GER9ATTGBG9OT7Z"},
    success: function(response) {

      lines = response.split("\n");
      // lines[0] is header row
      // lines[1]+ are data lines
      fields = lines[1].split("|");

      /* Fill in the pictures for the product */

      var pics =  '<div class="product-img-wrapper"><img id="product-zoom" src="https://www.laurajanelle.com/ljimages/' + fields[0] + '-lg.png" data-zoom-image="https://www.laurajanelle.com/ljimages/' + fields[0] + '-lg.png" alt="'+ fields[1] +'"></div>';
          pics += '<a href="#" class="product-img-zoom" title="Zoom"><span class="glyphicon glyphicon-search"></span></a></div><a href="#" class="product-img-zoom" title="Zoom"><span class="glyphicon glyphicon-search"></span></a>';

      picArray.forEach(function(element) {
          picsGallery += '<div class="product-img-wrapper"><a href="#" data-image="{{ site.baseurl }}/img/demos/shop/products/single/product1.jpg" data-zoom-image="{{ site.baseurl }}/img/demos/shop/products/single/product1.jpg" class="product-gallery-item"><img src="{{ site.baseurl }}/images/products/pearl-240x320.jpg" alt="product"></a></div>';
      });
      

      secondColumn = '<h1 class="product-name">'+ fields[1] +'</h1><div class="product-short-desc"><p>	' + fields[8] + '</p></div><div class="product-detail-info"><div class="product-price-box"><span class="product-price">$' + fields[4] + '</span></div></div>';
      info =  '<tr><td>Description</td><td>' + fields[1] + '</td></tr>';
      info += '<tr><td>Dimensions</td><td>' + fields[6] + '</td></tr>';
      info += '<tr><td>Color</td><td>' + color +'</td></tr>';
      info += '<tr><td>Type</td><td>' + type + '</td></tr>';
      info += '<tr><td>Look</td><td>' + fields[2] + '</td></tr>';
      info += '<tr><td>Metal Color</td><td>' + metal + '</td></tr>';
      
       /* Fill in the pictures for the product 

       var pics =  '<div class="fslider" data-pagi="false" data-arrows="false" data-thumbs="true"><div class="flexslider"><div class="slider-wrap" data-lightbox="gallery">';
           pics += '<div class="slide" data-thumb="https://www.laurajanelle.com/ljimages/' + fields[0] + '-sm.png"><a href="https://www.laurajanelle.com/ljimages/' + fields[0] + '-lg.png" title="' + fields[1] + '" data-lightbox="gallery-item"><span class="zoom ex1"><img src="https://www.laurajanelle.com/ljimages/' + fields[0] + '-md.png" alt="' + fields[1] + '"></span></a></div>';      
           pics += secondImage;
           pics += '</div></div></div>';
        if (fields[7].trim().length === 3) {
          pics += '<div class="sale-flash">NEW!</div>';
        }
     

       secondColumn  = '<div><a href="'+ detailString +'" title="Brand Logo" class="hidden-xs">';
       secondColumn += '<img class="image_fade" src="../img/logos/'+ fields[2] +'-logo.png" alt="Brand Logo"></a></div>';
       secondColumn += '<div><span itemprop="productID" class="sku_wrapper" style="font-size: 24px; font-weight: 600;">ITEM # <span class="sku">' + fields[0].replace(/\s+/g,'') + '</span></span></div><div class="line"></div>';
       secondColumn += '<div class="product-price col_one_third" style="font-size: 16px; font-weight: 400;"> <ins>COST:&nbsp;' + fields[4] + '</ins></div><div class="col_one_third hidden-xs" style="top: 0px; margin: 0px;">MIN: 1</div>';
       if ( fields[3] != ".00" )  {
         secondColumn += '<div class="product-rating col_one_third col_last" style="top: 0px; margin: 0px;">MSRP:&nbsp;' + fields[3] + '</div>';
       }
       secondColumn += '<div class="clear"></div><div class="line"></div><form class="cart nobottommargin clearfix" method="post" enctype="multipart/form-data"><div class="quantity clearfix">';
       secondColumn += '<input type="button" value="-" class="minus btn-number" data-type="minus" data-field="quant[1]" onclick="changeQuantity(this)">';
       secondColumn += '<input type="text" name="quant[1]" step="1" min="1" name="quantity" value="1" title="Qty" size="4" class="qty form-control input-number" id="' + fields[0].replace(/\s+/g,'') + '" />';
       secondColumn += '<input type="button" value="+" class="plus btn-number" data-type="plus" data-field="quant[1]" onclick="changeQuantity(this)"></div>';
       secondColumn += '<button type="button" id="add-item" class="add-to-cart button nomargin" onclick="stock_no=\'' + fields[0].trim() + '\'; addItemDetailView();">Add to cart</button></form><div class="clear"></div><div class="line"></div>';

       if (fields[8].length !== 0) {
         secondColumn += '<p>' + fields[8] + '</p>';
       } else {
         secondColumn += '<p>' + fields[1] + '</p>';
       }

       info =  '<tr><td>Description</td><td>' + fields[1] + '</td></tr>';
       info += '<tr><td>Dimensions</td><td>' + fields[6] + '</td></tr>';
       info += '<tr><td>Color</td><td>' + whatColor(color) +'</td></tr>';
       info += '<tr><td>Type</td><td>' + whatType(type) + '</td></tr>';
       info += '<tr><td>Look</td><td>' + whatLook(fields[2]) + '</td></tr>';
       info += '<tr><td>Metal Color</td><td>' + whatMetal(metal) + '</td></tr>';

          */
       $("#images").html(pics);
       $("#productGalleryThumbs").html(picsGallery);
       $(".product-nav-container").after(secondColumn);
       $("#addInfo").html(info);
     }
  });
}
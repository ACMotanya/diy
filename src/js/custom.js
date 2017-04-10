
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
      /*
      prod =  '<div class="product clearfix ' + flds[2].trim() +" "+ flds[8].trim() +" "+ flds[9].trim() +" "+ flds[10].trim() + 1 +'"><div class="product-image"><a href="#detail-view+' + flds[0].trim() + '+' + flds[8].trim() + '+' + flds[9].trim() + '+' + flds[10].trim() + '"><img class="shopimg" src="https://www.laurajanelle.com/ljimages/' + flds[0].trim()  + '-sm.png" alt="' + flds[1] + '"></a>';
      if (flds[7].trim().length === 3) {
        prod += '<div class="sale-flash">NEW!</div>';
      }
      prod += '<div class="product-overlay"><a href="#shop" class="add-to-cart" data-notify-position="top-right" data-notify-type="info" data-notify-msg="<i class=icon-info-sign></i>Item ' + flds[0].trim() + ' has been added to your cart!" onclick="stock_no=\'' + flds[0].trim() + '\'; detailString=\'detail-view+' + flds[0].trim() + '+' + flds[8].trim() + '+' + flds[9].trim() + '\'; addItemDetailView(); shopPage(); SEMICOLON.widget.notifications(this); return false;"><i class="icon-shopping-cart"></i><span> Add to Cart</span></a>';
      prod += '<a href="../shop-item.html" class="item-quick-view" data-lightbox="ajax" onclick="stock_no=\'' + flds[0].trim() + '\'; quickView(this.id);" id="' + flds[0].trim() + '+' + flds[8].trim() + '+' + flds[9].trim() + '"><i class="icon-zoom-in2"></i><span id="' + flds[0].trim() + '+' + flds[8].trim() + '+' + flds[9].trim() + '">Quick View</span></a></div></div>';
      prod += '<div class="product-desc center"><div class="product-title"><h3><a href="#detail-view+' + flds[0].trim() + '+' + flds[8].trim() + '+' + flds[9].trim() + '+' + flds[10].trim() + '">' + flds[1] +'</a></h3></div><div class="product-price">cost &nbsp;<ins>$' + flds[4].trim() + '</ins></div></div></div>';
      */
      html.push(prod);
    }
    document.getElementById(div).innerHTML += html.join('');
  }
}
/*jshint esversion: 6 */
import React, {Component} from 'react';

class Test extends Component {
  render() {
    return (
      <div role="main" className="main">

     <div className="container">
       <div className="slider-container rev_slider_wrapper mb-xlg" >
         <div id="revolutionSlider" className="slider rev_slider manual">
           <ul>
             <li data-transition="fade">
               <img src="img/demos/shop/slides/shop11/slide1.jpg"
                 alt="slide bg"
                 data-bgposition="center center"
                 data-bgfit="cover"
                 data-bgrepeat="no-repeat"
                 className="rev-slidebg"/>


             </li>
             <li data-transition="fade">
               <img src="img/demos/shop/slides/shop11/slide2.jpg"
                 alt="slide bg"
                 data-bgposition="center center"
                 data-bgfit="cover"
                 data-bgrepeat="no-repeat"
                 className="rev-slidebg"/>



             </li>
           </ul>
         </div>
       </div>
     </div>

     <div className="banners-container">
       <div className="container">
         <div className="row">
           <div className="col-sm-4">
             <div className="banner">
               <h3>SHOP LIVING ROOM</h3>
               <a href="#">
                 <img src="img/demos/shop/category/shop11/category1.jpg" alt="Banner"/>
               </a>
               <div className="banner-caption">LIVING ROOM STARTING AT $999</div>
             </div>
           </div>

           <div className="col-sm-4">
             <div className="banner">
               <h3>SHOP DINING ROOM</h3>
               <a href="#">
                 <img src="img/demos/shop/category/shop11/category2.jpg" alt="Banner"/>
               </a>
               <div className="banner-caption">DINING ROOM STARTING AT $999</div>
             </div>
           </div>

           <div className="col-sm-4">
             <div className="banner">
               <h3>SHOP BEDROOM</h3>
               <a href="#">
                 <img src="img/demos/shop/category/shop11/category3.jpg" alt="Banner"/>
               </a>
               <div className="banner-caption">BEDROOM STARTING AT $999</div>
             </div>
           </div>
         </div>
       </div>
     </div>

     <div className="container mb-lg">
       <h2 className="slider-title v2">
          <span className="inline-title">Top Selling Items</span>
       </h2>

       <div className="owl-carousel owl-theme manual top-products-carousel">

         <div className="product">
           <figure className="product-image-area">
             <a href="demo-shop-11-product-details.html" title="Product Name" className="product-image">
               <img src="img/demos/shop/products/shop11/product1.jpg" alt="Product Name"/>
             </a>

             <a href="#" className="product-quickview">
               <i className="fa fa-share-square-o"></i>
               <span>Quick View</span>
             </a>

             <div className="product-actions">
               <a href="#" className="addtocart" title="Add to Cart">
                 <i className="fa fa-shopping-cart"></i>
               </a>
             </div>
           </figure>
           <div className="product-details-area">
             <h2 className="product-name"><a href="demo-shop-11-product-details.html" title="Product Name">Wooden Chair</a></h2>
             <div className="product-ratings">
               <div className="ratings-box">
                 <div className="rating"></div>
               </div>
             </div>

             <div className="product-price-box">ü
               <span className="product-price">$129.00</span>
             </div>
           </div>
         </div>

         <div className="product">
           <figure className="product-image-area">
             <a href="demo-shop-11-product-details.html" title="Product Name" className="product-image">
               <img src="img/demos/shop/products/shop11/product2.jpg" alt="Product Name"/>
             </a>

             <a href="#" className="product-quickview">
               <i className="fa fa-share-square-o"></i>
               <span>Quick View</span>
             </a>

             <div className="product-actions">
               <a href="#" className="addtocart" title="Add to Cart">
                 <i className="fa fa-shopping-cart"></i>
               </a>
             </div>
           </figure>
           <div className="product-details-area">
             <h2 className="product-name"><a href="demo-shop-11-product-details.html" title="Product Name">Becnhi</a></h2>
             <div className="product-ratings">
               <div className="ratings-box">
                 <div className="rating"></div>
               </div>
             </div>

             <div className="product-price-box">
               <span className="old-price">$120.00</span>
               <span className="product-price">$90.00</span>
             </div>
           </div>
         </div>

         <div className="product">
           <figure className="product-image-area">
             <a href="demo-shop-11-product-details.html" title="Product Name" className="product-image">
               <img src="img/demos/shop/products/shop11/product3.jpg" alt="Product Name"/>
             </a>

             <a href="#" className="product-quickview">
               <i className="fa fa-share-square-o"></i>
               <span>Quick View</span>
             </a>

             <div className="product-actions">
               <a href="#" className="addtocart" title="Add to Cart">
                 <i className="fa fa-shopping-cart"></i>
               </a>
             </div>
           </figure>
           <div className="product-details-area">
             <h2 className="product-name"><a href="demo-shop-11-product-details.html" title="Product Name">Armchair</a></h2>
             <div className="product-ratings">
               <div className="ratings-box">
                 <div className="rating" ></div>
               </div>
             </div>

             <div className="product-price-box">
               <span className="product-price">$70.00</span>
             </div>
           </div>
         </div>

         <div className="product">
           <figure className="product-image-area">
             <a href="demo-shop-11-product-details.html" title="Product Name" className="product-image">
               <img src="img/demos/shop/products/shop11/product4.jpg" alt="Product Name"/>
             </a>

             <a href="#" className="product-quickview">
               <i className="fa fa-share-square-o"></i>
               <span>Quick View</span>
             </a>

             <div className="product-actions">
               <a href="#" className="addtocart" title="Add to Cart">
                 <i className="fa fa-shopping-cart"></i>
               </a>
             </div>
           </figure>
           <div className="product-details-area">
             <h2 className="product-name"><a href="demo-shop-11-product-details.html" title="Product Name">White Chair</a></h2>
             <div className="product-ratings">
               <div className="ratings-box">
                 <div className="rating" ></div>
               </div>
             </div>

             <div className="product-price-box">
               <span className="product-price">$220.00</span>
             </div>
           </div>
         </div>

         <div className="product">
           <figure className="product-image-area">
             <a href="demo-shop-11-product-details.html" title="Product Name" className="product-image">
               <img src="img/demos/shop/products/shop11/product1.jpg" alt="Product Name"/>
             </a>

             <a href="#" className="product-quickview">
               <i className="fa fa-share-square-o"></i>
               <span>Quick View</span>
             </a>

             <div className="product-actions">
               <a href="#" className="addtocart" title="Add to Cart">
                 <i className="fa fa-shopping-cart"></i>
               </a>
             </div>
           </figure>
           <div className="product-details-area">
             <h2 className="product-name"><a href="demo-shop-11-product-details.html" title="Product Name">Woode Chair-Red</a></h2>
             <div className="product-ratings">
               <div className="ratings-box">
                 <div className="rating"></div>
               </div>
             </div>

             <div className="product-price-box">
               <span className="product-price">$70.00</span>
             </div>
           </div>
         </div>
       </div>
     </div>

     <div className="container mb-xlg">

       <div className="owl-carousel owl-theme manual clients-carousel owl-no-narrow">
         <a href="#" title="Brand Name" className="client">
           <img className="img-responsive" src="img/demos/shop/brands/brand1.png" alt="Brand"/>
         </a>
         <a href="#" title="Brand Name" className="client">
           <img className="img-responsive" src="img/demos/shop/brands/brand2.png" alt="Brand"/>
         </a>
         <a href="#" title="Brand Name" className="client">
           <img className="img-responsive" src="img/demos/shop/brands/brand3.png" alt="Brand"/>
         </a>
         <a href="#" title="Brand Name" className="client">
           <img className="img-responsive" src="img/demos/shop/brands/brand4.png" alt="Brand"/>
         </a>
         <a href="#" title="Brand Name" className="client">
           <img className="img-responsive" src="img/demos/shop/brands/brand5.png" alt="Brand"/>
         </a>
         <a href="#" title="Brand Name" className="client">
           <img className="img-responsive" src="img/demos/shop/brands/brand1.png" alt="Brand"/>
         </a>
         <a href="#" title="Brand Name" className="client">
           <img className="img-responsive" src="img/demos/shop/brands/brand2.png" alt="Brand"/>
         </a>
       </div>
     </div>

      </div>
    );
  }
}

export default Test;

/*jshint esversion: 6 */
import React, { Component } from 'react';
import NavLink from './NavLink';

class App extends Component {
  render() {
    return (
      <div className="body">
      <header id="header" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": false, "stickyStartAt": 146, "stickySetTop": "-146px", "stickyChangeLogo": false}'>
        <div className="header-body">
          <div className="header-top">
            <div className="container">
              <div className="dropdowns-container">
                <div className="header-dropdown cur-dropdown">
                  <a href="#">USD <i className="fa fa-caret-down"></i></a>

                  <ul className="header-dropdownmenu">
                    <li><a href="#">EUR</a></li>
                    <li><a href="#">USD</a></li>
                  </ul>
                </div>

                <div className="header-dropdown lang-dropdown">
                  <a href="#"><img src="img/demos/shop/en.png" alt="English"/>English <i className="fa fa-caret-down"></i></a>

                  <ul className="header-dropdownmenu">
                    <li><a href="#"><img src="img/demos/shop/en.png" alt="English"/>English</a></li>
                    <li><a href="#"><img src="img/demos/shop/fr.png" alt="French"/>French</a></li>
                  </ul>
                </div>

                <div className="compare-dropdown">
                  <a href="#"><i className="fa fa-retweet"></i> Compare (2)</a>

                  <div className="compare-dropdownmenu">
                    <div className="dropdownmenu-wrapper">
                      <ul className="compare-products">
                        <li className="product">
                          <a href="#" className="btn-remove" title="Remove Product"><i className="fa fa-times"></i></a>
                          <h4 className="product-name"><a href="demo-shop-10-about-us.html">White top</a></h4>
                        </li>
                        <li className="product">
                          <a href="#" className="btn-remove" title="Remove Product"><i className="fa fa-times"></i></a>
                          <h4 className="product-name"><a href="demo-shop-10-about-us.html">Blue Women Shirt</a></h4>
                        </li>
                      </ul>

                      <div className="compare-actions">
                        <a href="#" className="action-link">Clear All</a>
                        <a href="#" className="btn btn-primary">Compare</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="top-menu-area">
                <a href="#">Links <i className="fa fa-caret-down"></i></a>
                <ul className="top-menu">
                  <li><a href="demo-shop-11-myaccount.html">My Account</a></li>
                  <li><a href="#">Weekly Deal</a></li>
                  <li><a href="#">My Wishlist</a></li>
                  <li><a href="demo-shop-11-blog.html">Blog</a></li>
                  <li><a href="demo-shop-11-login.html">Log in</a></li>
                </ul>
              </div>
              <p className="welcome-msg">DEFAULT WELCOME MSG!</p>
            </div>
          </div>
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <div className="row">
                  <div className="header-search">
                    <a href="#" className="search-toggle"><i className="fa fa-search"></i></a>
                    <form action="#" method="get">
                      <div className="header-search-wrapper">
                        <input type="text" className="form-control" name="q" id="q" placeholder="Search..." required />
                        <select id="cat" name="cat">
                          <option value="">All Categories</option>
                          <option value="4">Jewelry Basics</option>
                          <option value="12">- BOHO - NEW!</option>
                          <option value="13">- Class In A Box</option>
                          <option value="66">- Crystazzi</option>
                          <option value="67">- MBellish</option>
                          <option value="5">Tools &amp; Cording</option>
                          <option value="21">- Precision Comfort Tools</option>
                          <option value="22">- Tools</option>
                          <option value="63">- Beadalon</option>
                          <option value="7">Kids</option>
                          <option value="11">Kits</option>
                          <option value="31">- Technique Kits</option>
                          <option value="32">- Class In A Box Kits</option>
                          <option value="33">- Crystazzi Kits</option>
                        </select>
                        <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                      </div>
                    </form>
                  </div>

                  <a href="#" className="mmenu-toggle-btn" title="Toggle menu">
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div>
              <div className="header-column header-column-center">
                <div className="header-logo">
                  <a href="demo-shop-11.html">
                    <img alt="Cousin DIY"  src="images/cousindiy.png"/>
                  </a>
                </div>
              </div>
              <div className="header-column">
                <div className="row">
                  <div className="cart-area">
                    <div className="custom-block">
                      <i className="fa fa-phone"></i>
                      <span>727-536-3568</span>
                      <span className="split"></span>
                      <a href="#">CONTACT US</a>
                    </div>

                    <div className="cart-dropdown">
                      <a href="#" className="cart-dropdown-icon">
                        <i className="minicart-icon"></i>
                        <span className="cart-info">
                          <span className="cart-qty">2</span>
                          <span className="cart-text">item(s)</span>
                        </span>
                      </a>

                      <div className="cart-dropdownmenu right">
                        <div className="dropdownmenu-wrapper">
                          <div className="cart-products">
                            <div className="product product-sm">
                              <a href="#" className="btn-remove" title="Remove Product">
                                <i className="fa fa-times"></i>
                              </a>
                              <figure className="product-image-area">
                                <a href="demo-shop-10-product-details.html" title="Product Name" className="product-image">
                                  <img src="img/demos/shop/products/thumbs/cart-product1.jpg" alt="Product Name" />
                                </a>
                              </figure>
                              <div className="product-details-area">
                                <h2 className="product-name"><a href="demo-shop-10-product-details.html" title="Product Name">Blue Round Beads</a></h2>

                                <div className="cart-qty-price">
                                  1 X
                                  <span className="product-price">$65.00</span>
                                </div>
                              </div>
                            </div>
                            <div className="product product-sm">
                              <a href="#" className="btn-remove" title="Remove Product">
                                <i className="fa fa-times"></i>
                              </a>
                              <figure className="product-image-area">
                                <a href="demo-shop-10-product-details.html" title="Product Name" className="product-image">
                                  <img src="img/demos/shop/products/thumbs/cart-product2.jpg" alt="Product Name" />
                                </a>
                              </figure>
                              <div className="product-details-area">
                                <h2 className="product-name"><a href="demo-shop-10-product-details.html" title="Product Name">Black Thin Cord</a></h2>

                                <div className="cart-qty-price">
                                  1 X
                                  <span className="product-price">$39.00</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="cart-totals">
                            Total: <span>$104.00</span>
                          </div>

                          <div className="cart-actions">
                            <a href="demo-shop-10-cart.html" className="btn btn-primary">View Cart</a>
                            <a href="demo-shop-10-checkout.html" className="btn btn-primary">Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-container header-nav">
            <div className="container">
              <div className="header-nav-main">
                <nav>
                  <ul className="nav nav-pills" id="mainNav">
                    <li className="active">
                      <a href="demo-shop-11.html">
                        Products
                      </a>
                    </li>
                    
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/test">How To</NavLink></li>

                    <li className="dropdown">
                      <a className="dropdown-toggle" href="#">
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-submenu">
                          <a href="#">Category</a>
                          <ul className="dropdown-menu">
                            <li><a href="demo-shop-11-category-2col.html">Category - 2 Columns</a></li>
                            <li><a href="demo-shop-11-category-3col.html">Category - 3 Columns</a></li>
                            <li><a href="demo-shop-11-category-4col.html">Category - 4 Columns</a></li>
                            <li><a href="demo-shop-11-category-5col.html">Category - 5 Columns</a></li>
                            <li><a href="demo-shop-11-category-6col.html">Category - 6 Columns</a></li>
                            <li><a href="demo-shop-11-category-7col.html">Category - 7 Columns</a></li>
                            <li><a href="demo-shop-11-category-8col.html">Category - 8 Columns</a></li>
                            <li><a href="demo-shop-11-category-list.html">Category - List</a></li>
                            <li><a href="demo-shop-11-category-right-sidebar.html">Rigt Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#">Category Banners</a>
                          <ul className="dropdown-menu">
                            <li><a href="demo-shop-11-category-banner-boxed-slider.html">Boxed Slider</a></li>
                            <li><a href="demo-shop-11-category-banner-boxed-image.html">Boxed Image</a></li>
                            <li><a href="demo-shop-11-category-banner-fullwidth.html">Fullwidth Image</a></li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#">Product Details</a>
                          <ul className="dropdown-menu">
                            <li><a href="demo-shop-11-product-details.html">Product Details</a></li>
                            <li><a href="demo-shop-11-product-details2.html">Product Details 2</a></li>
                            <li><a href="demo-shop-11-product-details3.html">Product Details 3</a></li>
                            <li><a href="demo-shop-11-product-details4.html">Product Details 4</a></li>
                          </ul>
                        </li>
                        <li><a href="demo-shop-11-cart.html">Shopping Cart</a></li>
                        <li><a href="demo-shop-11-checkout.html">Checkout</a></li>
                        <li><a href="demo-shop-11-about-us.html">About Us</a></li>
                        <li className="dropdown-submenu">
                          <a href="#">Dashboard</a>
                          <ul className="dropdown-menu">
                            <li><a href="demo-shop-11-dashboard.html">Dashboard</a></li>
                            <li><a href="demo-shop-11-myaccount.html">My Account</a></li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#">Login &amp; Register</a>
                          <ul className="dropdown-menu">
                            <li><a href="demo-shop-11-login.html">Login</a></li>
                            <li><a href="demo-shop-11-register.html">Register</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle">
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li><a href="demo-shop-11-blog.html">Blog</a></li>
                        <li><a href="demo-shop-11-blog-post.html">Blog Post</a></li>
                      </ul>
                    </li>
                    <li className="pull-right">
                      <a href="demo-shop-11-contact-us.html">
                        Contact Us <span className="tip tip-hot">Hot!</span>
                      </a>
                    </li>
                    <li className="pull-right">
                      <a href="#">
                        Buy Cousin!
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-nav">
				<div className="mobile-nav-wrapper">
					<ul className="mobile-side-menu">
						<li><a href="demo-shop-11.html">Home</a></li>
						<li>
							<span className="mmenu-toggle"></span>
							<a href="#">Fashion <span className="tip tip-new">New</span></a>

							<ul>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Women</a>
									<ul>
										<li>
											<a href="#">Tops &amp; Blouses</a>
										</li>
										<li>
											<a href="#">Accessories</a>
										</li>
										<li>
											<a href="#">Dresses &amp; Skirts</a>
										</li>
										<li>
											<a href="#">Shoes &amp; Boots</a>
										</li>
									</ul>
								</li>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Men</a>

									<ul>
										<li>
											<a href="#">Accessories</a>
										</li>
										<li>
											<a href="#">Watch &amp; Fashion <span className="tip tip-new">New</span></a>
										</li>
										<li>
											<a href="#">Tees, Knits &amp; Polos</a>
										</li>
										<li>
											<a href="#">Pants &amp; Denim</a>
										</li>
									</ul>
								</li>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Jewellery <span className="tip tip-hot">Hot</span></a>

									<ul>
										<li>
											<a href="#">Sweaters</a>
										</li>
										<li>
											<a href="#">Heels &amp; Sandals</a>
										</li>
										<li>
											<a href="#">Jeans &amp; Shorts</a>
										</li>
									</ul>
								</li>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Kids Fashion</a>

									<ul>
										<li>
											<a href="#">Casual Shoes</a>
										</li>
										<li>
											<a href="#">Spring &amp; Autumn</a>
										</li>
										<li>
											<a href="#">Winter Sneakers</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<span className="mmenu-toggle"></span>
							<a href="#">Pages <span className="tip tip-hot">Hot!</span></a>

							<ul>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Category</a>
									<ul>
										<li>
											<a href="demo-shop-11-category-2col.html">2 Columns</a>
										</li>
										<li>
											<a href="demo-shop-11-category-3col.html">3 Columns</a>
										</li>
										<li>
											<a href="demo-shop-11-category-4col.html">4 Columns</a>
										</li>
										<li>
											<a href="demo-shop-11-category-5col.html">5 Columns</a>
										</li>
										<li>
											<a href="demo-shop-11-category-6col.html">6 Columns</a>
										</li>
										<li>
											<a href="demo-shop-11-category-7col.html">7 Columns</a>
										</li>
										<li>
											<a href="demo-shop-11-category-8col.html">8 Columns</a>
										</li>
										<li>
											<a href="demo-shop-11-category-right-sidebar.html">Right Sidebar</a>
										</li>
										<li>
											<a href="demo-shop-11-category-list.html">Category List</a>
										</li>
									</ul>
								</li>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Category Banners</a>
									<ul>
										<li>
											<a href="demo-shop-11-category-banner-boxed-slider.html">Boxed slider</a>
										</li>
										<li>
											<a href="demo-shop-11-category-banner-boxed-image.html">Boxed Image</a>
										</li>
										<li>
											<a href="demo-shop-11-category-banner-fullwidth.html">Fullwidth</a>
										</li>
									</ul>
								</li>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Product Details</a>
									<ul>
										<li>
											<a href="demo-shop-11-product-details.html">Product Details 1</a>
										</li>
										<li>
											<a href="demo-shop-11-product-details2.html">Product Details 2</a>
										</li>
										<li>
											<a href="demo-shop-11-product-details3.html">Product Details 3</a>
										</li>
										<li>
											<a href="demo-shop-11-product-details4.html">Product Details 4</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="demo-shop-11-cart.html">Shopping Cart</a>
								</li>
								<li>
									<a href="demo-shop-11-checkout.html">Checkout</a>
								</li>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Loign &amp; Register</a>
									<ul>
										<li>
											<a href="demo-shop-11-login.html">Login</a>
										</li>
										<li>
											<a href="demo-shop-11-register.html">Register</a>
										</li>
									</ul>
								</li>
								<li>
									<span className="mmenu-toggle"></span>
									<a href="#">Dashboard</a>
									<ul>
										<li>
											<a href="demo-shop-11-dashboard.html">Dashboard</a>
										</li>
										<li>
											<a href="demo-shop-11-myaccount.html">My Account</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="demo-shop-11-about-us.html">About Us</a>
						</li>
						<li>
							<span className="mmenu-toggle"></span>
							<a href="#">Blog</a>
							<ul>
								<li><a href="demo-shop-11-blog.html">Blog</a></li>
								<li><a href="demo-shop-11-blog-post.html">Blog Post</a></li>
							</ul>
						</li>
						<li>
							<a href="demo-shop-11-contact-us.html">Contact Us</a>
						</li>
						<li>
							<a href="#">Buy Porto!</a>
						</li>
					</ul>
				</div>
			</div>

			<div id="mobile-menu-overlay"></div>


        { this.props.children }


        <footer id="footer">
  				<div className="container">
  					<div className="row">

  						<div className="col-md-3">
  							<h4>My Account</h4>
  							<ul className="links">
  								<li>
  									<i className="fa fa-caret-right"></i>
  									<a href="demo-shop-10-about-us.html">About Us</a>
  								</li>
  								<li>
  									<i className="fa fa-caret-right"></i>
  									<a href="demo-shop-10-contact-us.html">Contact Us</a>
  								</li>
  								<li>
  									<i className="fa fa-caret-right"></i>
  									<a href="demo-shop-10-myaccount.html">My account</a>
  								</li>
  								<li>
  									<i className="fa fa-caret-right"></i>
  									<a href="#">Orders history</a>
  								</li>
  								<li>
  									<i className="fa fa-caret-right"></i>
  									<a href="#">Advanced search</a>
  								</li>
  							</ul>
  						</div>
  						<div className="col-md-3">
  							<div className="contact-details">
  								<h4>Contact Information</h4>
  								<ul className="contact">
  									<li><p><i className="fa fa-map-marker"></i> <strong>Address:</strong><br/> 1234 Street Name, City, US</p></li>
  									<li><p><i className="fa fa-phone"></i> <strong>Phone:</strong><br/> (123) 456-7890</p></li>
  									<li><p><i className="fa fa-envelope-o"></i> <strong>Email:</strong><br/> <a href="mailto:mail@example.com">mail@example.com</a></p></li>
  									<li><p><i className="fa fa-clock-o"></i> <strong>Working Days/Hours:</strong><br/> Mon - Sun / 9:00AM - 8:00PM</p></li>
  								</ul>
  							</div>
  						</div>
  						<div className="col-md-3">
  							<h4>Main Features</h4>
  							<ul className="features">
  								<li>
  									<i className="fa fa-check"></i>
  									<a href="#">Super Fast Template</a>
  								</li>
  								<li>
  									<i className="fa fa-check"></i>
  									<a href="#">1st Seller Template</a>
  								</li>
  								<li>
  									<i className="fa fa-check"></i>
  									<a href="#">19 Unique Shop Layouts</a>
  								</li>
  								<li>
  									<i className="fa fa-check"></i>
  									<a href="#">Powerful Template Features</a>
  								</li>
  								<li>
  									<i className="fa fa-check"></i>
  									<a href="#">Mobile &amp; Retina Optimized</a>
  								</li>
  							</ul>
  						</div>
  						<div className="col-md-3">
  							<div className="newsletter">
  								<h4>Be the First to Know</h4>
  								<p className="newsletter-info">Get all the latest information on Events,<br/> Sales and Offers. Sign up for newsletter today.</p>

  								<div className="alert alert-success hidden" id="newsletterSuccess">
  									<strong>Success!</strong> Youve been added to our email list.
  								</div>

  								<div className="alert alert-danger hidden" id="newsletterError"></div>


  								<p>Enter your e-mail Address:</p>
  								<form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST">
  									<div className="input-group">
  										<input className="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text"/>
  										<span className="input-group-btn">
  											<button className="btn btn-primary" type="submit">Submit</button>
  										</span>
  									</div>
  								</form>
  							</div>
  						</div>
  					</div>
  				</div>
  				<div className="footer-copyright">
  					<div className="container">
  						<a href="index.html" className="logo">
  							<img alt="Porto Website Template" className="img-responsive" src="img/demos/shop/footer-logo-red.png"/>
  						</a>
  						<ul className="social-icons">
  							<li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
  							<li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
  							<li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
  						</ul>
  						<img alt="Payments" src="img/demos/shop/payments.png" className="footer-payment"/>
  						<p className="copyright-text">© Copyright 2016. All Rights Reserved.</p>
  					</div>
  				</div>
  			</footer>
        </div>
    );
  }
}

export default App;

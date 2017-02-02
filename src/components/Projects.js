/*jshint esversion: 6 */
import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="container">

					<h2>Portfolio</h2>

					<ul className="nav nav-pills sort-source" data-sort-id="portfolio" data-option-key="filter" data-plugin-options='{"layoutMode": "fitRows", "filter": "*"}'>
						<li data-option-value="*" className="active"><a href="#">Show All</a></li>
						<li data-option-value=".websites"><a href="#">Websites</a></li>
						<li data-option-value=".logos"><a href="#">Logos</a></li>
						<li data-option-value=".brands"><a href="#">Brands</a></li>
						<li data-option-value=".medias"><a href="#">Medias</a></li>
					</ul>

					<hr/>

					<div className="row">
						<div className="sort-destination-loader sort-destination-loader-showing">
							<ul className="portfolio-list sort-destination" data-sort-id="portfolio">
								<li className="col-md-4 isotope-item brands">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Presentation</span>
														<span className="thumb-info-type">Brand</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item medias">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten thumb-info-no-zoom">
												<span className="thumb-info-wrapper">
													<span className="owl-carousel owl-theme nav-inside m-none" data-plugin-options='{"items": 1, "margin": 10, "animateOut": "fadeOut", "autoplay": true, "autoplayTimeout": 3000}'>
														<span>
															<img src="img/projects/project-1.jpg" className="img-responsive" alt=""/>
														</span>
														<span>
															<img src="img/projects/project-1-2.jpg" className="img-responsive" alt=""/>
														</span>
													</span>

													<span className="thumb-info-title">
														<span className="thumb-info-inner">Porto Watch</span>
														<span className="thumb-info-type">Media</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item logos">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-2.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Identity</span>
														<span className="thumb-info-type">Logo</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item brands">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-3.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Watch Mockup</span>
														<span className="thumb-info-type">Brand</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item logos">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-4.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Three Bottles</span>
														<span className="thumb-info-type">Logo</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item brands">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-5.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Company T-Shirt</span>
														<span className="thumb-info-type">Brand</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item websites">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-6.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Mobile Mockup</span>
														<span className="thumb-info-type">Website</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item medias">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-7.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Porto Label</span>
														<span className="thumb-info-type">Media</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item logos">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-23.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Business Folders</span>
														<span className="thumb-info-type">Logo</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item websites">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-24.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Tablet Screen</span>
														<span className="thumb-info-type">Website</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item medias">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-25.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Black Watch</span>
														<span className="thumb-info-type">Media</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item websites">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-26.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Monitor Mockup</span>
														<span className="thumb-info-type">Website</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item websites">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-27.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Porto Screens</span>
														<span className="thumb-info-type">Website</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
								<li className="col-md-4 isotope-item brands">
									<div className="portfolio-item">
										<a href="portfolio-single-small-slider.html">
											<span className="thumb-info thumb-info-lighten">
												<span className="thumb-info-wrapper">
													<img src="img/projects/project-28.jpg" className="img-responsive" alt=""/>
													<span className="thumb-info-title">
														<span className="thumb-info-inner">Okler Bottle</span>
														<span className="thumb-info-type">Brand</span>
													</span>
													<span className="thumb-info-action">
														<span className="thumb-info-action-icon"><i className="fa fa-link"></i></span>
													</span>
												</span>
											</span>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
class PortfolioSample extends Component {
  render() {
    return (
      <div className={this.props.itemclass}>
        <article className="item">
          <img
            className="img-responsive"
            src={this.props.thumbnile}
            alt={this.props.itemalt}
          />
          <div className="over-detail">
            <div className="top-detail">
              <a
                href={this.props.itemurl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
              <a
                href={this.props.lightboximg}
                className="cbp-lightbox"
                data-title=""
              >
                <i className="fa fa-search"></i>
              </a>
            </div>

            <div className="bottom-detail">
              <h3>{this.props.itemtitle}</h3>
              <span>{this.props.itemcategory}</span>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default PortfolioSample;

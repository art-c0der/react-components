import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Breadcrums extends Component {
  render() {
    let {pages = []} = this.props;

    //formed path to the pages
    let pagesToPath = pages.map((page, index) => {
      let path = '';
      for (let i = 0; i <= index; i++) {
        path += `${pages[i]}/`;
      }
      return path;
    });

    //gather links to breadcums items
    let links = [];
    for (let i = 0; i < pages.length; i++) {
      let link = {page: pages[i], path: pagesToPath[i]};
      links.push(link);
    }

    return (
      <div className="breadcrums">
        <div className="breadcrums__item">
          <Link to="/" className="breadcrums__link">
            HomePage
          </Link>
          <span className="breadcrums__slash">/</span>
        </div>
        {links.map((link, index) => (
          <div className="breadcrums__item">
            <Link to={link.path} className="breadcrums__link" key={index}>
              {link.page}
            </Link>
            {index < links.length - 1 ? <span className="breadcrums__slash">/</span> : null}
          </div>
        ))}
      </div>
    );
  }
}

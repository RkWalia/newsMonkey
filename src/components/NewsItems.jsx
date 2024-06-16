import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, url, imageUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{zIndex: "1", left: '90%' }}>
            {source}
          </span>
          <img src={imageUrl?imageUrl:"https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author: "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} className="btn btn-outline-info" target='_blank'>Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

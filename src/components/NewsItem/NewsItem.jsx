import React from "react";
import "./newsItem.css";

const NewsItem = () => {
  return (
    <div className="news-item">
      <div className="news-item__image-wrapper">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.tYps9MgOy_T-p_gE19Vj2AHaGP?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt=""
          className="news-item__image"
        />
      </div>

      <div className="news-item__content">
        <h2 className="news-item__title">
          Ichkilik ichgan shimpanzelar prava testidan o‘ta olmadi va uzoq vaqt qamoqqa ketishdi.
        </h2>

        <div className="news-item__meta">
          <span className="news-item__author">JENNIFER OUELLETTE</span>
          {/* <span className="news-item__dot">•</span> */}
          <span className="news-item__time">5:05 AM</span>
          {/* <span className="news-item__dot">•</span> */}
          <div className="news-item__comments">
            <span className="news-item__comment-icon">💬</span>
            <span className="news-item__comment-count">39</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
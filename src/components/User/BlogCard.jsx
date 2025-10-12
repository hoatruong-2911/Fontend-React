import React from "react";
import { Link } from "react-router-dom";
export default function BlogCard({ id, title, excerpt }){
  return (
    <div className="card post">
      <div className="thumb" aria-hidden="true"></div>
      <div className="card-body">
        <div className="title" style={{fontWeight:700}}>{title}</div>
        <p className="excerpt">{excerpt}</p>
        <Link to={`/user/blog/${id}`} className="btn outline">Chi tiết</Link>
      </div>
    </div>
  );
}
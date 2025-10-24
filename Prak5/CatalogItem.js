import { FaBookmark, FaRegBookmark, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import React from "react";

class CatalogItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.item[0],
            author: props.item[1],
            publisher: props.item[2],
            year: props.item[3],
            isBookmark: Math.random() < 0.5,
            likeCount: Math.floor(Math.random() * 11),
            isLiked: false
        };

        this.checkBookmark = this.checkBookmark.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    }

    checkBookmark() {
        this.setState((prev) => ({
            isBookmark: !prev.isBookmark
        }));
    }

    toggleLike() {
        this.setState((prev) => ({
            isLiked: !prev.isLiked,
            likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1
        }));
    }

    render() {
        return (
            <div className="card shadow-sm h-100">
                <div className="card-body">
                    <h6 className="card-title fw-bold">{this.state.title}</h6>
                    <small className="text-muted">{this.state.author}</small>
                    <p className="card-text mb-1">
                        <small>{this.state.publisher} ({this.state.year})</small>
                    </p>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                    <div style={{ cursor: "pointer" }} onClick={this.toggleLike}>
                        {this.state.isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />} {this.state.likeCount} like(s)
                    </div>
                    <div style={{ cursor: "pointer" }} onClick={this.checkBookmark}>
                        {this.state.isBookmark ? <><FaBookmark /> Bookmark!</> : <FaRegBookmark />}
                    </div>
                </div>
            </div>
        );
    }
}

export default CatalogItem;









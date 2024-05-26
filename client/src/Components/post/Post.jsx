import {MoreVert} from "@mui/icons-material"

import "./post.css"

export default function Post({ post }) {
    let imageSrc = '';
    if (post.image) {
        const buffer = new Uint8Array(post.image.data);
        const blob = new Blob([buffer], { type: 'image/jpeg' });
        imageSrc = URL.createObjectURL(blob);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/feed1.jpg" alt=""/>
                        <span className="postUsername">{post.user}</span>
                        <span className="postDate">{new Date(post.created).toDateString()}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.text}</span>
                    {post.image && <img className="postImg" src={imageSrc} alt=""/>}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like1.jpg" alt=""/>
                        <span className="postlikeCounter">{post.likes_count} People like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comments_count} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

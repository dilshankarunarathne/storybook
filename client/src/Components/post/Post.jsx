import {MoreVert} from "@mui/icons-material"
import {useState} from 'react';

import {getComments, addComment} from '../../api/comments';

import "./post.css"

export default function Post({post}) {
    let imageSrc = '';
    if (post.image) {
        const buffer = new Uint8Array(post.image.data);
        const blob = new Blob([buffer], {type: 'image/jpeg'});
        imageSrc = URL.createObjectURL(blob);
    }

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const fetchComments = async () => {
    if (post && post.post_id) {
        const fetchedComments = await getComments(post.post_id);
        setComments(fetchedComments);
    } else {
        console.error('Post or post id is undefined');
    }
};

    const handleNewCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleNewCommentSubmit = async (e) => {
        e.preventDefault();
        await addComment(post.post_id, newComment);
        setNewComment('');
        fetchComments();
    };

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
                        <span className="postCommentText" onClick={fetchComments}>{post.comments_count} comments</span>
                    </div>
                </div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <span>{comment.text}</span>
                    </div>
                ))}
                <form onSubmit={handleNewCommentSubmit}>
                    <input type="text" value={newComment} onChange={handleNewCommentChange} placeholder="Add a comment" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

import {useState,useEffect} from 'react';
import {MoreVert} from "@mui/icons-material"

import {getComments, addComment, deleteComment, editComment} from '../../api/comments';
import {editPost, deletePost} from '../../api/post';

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
    const [showOptions, setShowOptions] = useState(false);
    const [currentCommentId, setCurrentCommentId] = useState(null);
    const [editCommentText, setEditCommentText] = useState('');
    const [showPostOptions, setShowPostOptions] = useState(false);
    const [editPostText, setEditPostText] = useState('');

    useEffect(() => {
        // fetchComments(); // TODO: bug - auto load new comments
    }, [comments]);

    const fetchComments = async () => {
        if (post && post.post_id) {
            const fetchedComments = await getComments(post.post_id);
            setComments(fetchedComments);
        } else {
            console.error('Post or post id is undefined');
        }
    };

    const handleCommentOptions = (commentId) => {
        setCurrentCommentId(commentId);
        setShowOptions(true);
    };

    const handleEditComment = async () => {
        try {
            await editComment(currentCommentId, editCommentText);
            console.log(`Comment ${currentCommentId} edited.`);
            setShowOptions(false);
            await fetchComments();
        } catch (error) {
            console.error(`Error during comment editing: ${error.message}`);
        }
    };

    const handleDeleteComment = async () => {
        try {
            await deleteComment(currentCommentId);
            setShowOptions(false);
            await fetchComments();
        } catch (error) {
            console.error(`Error during comment deletion: ${error.message}`);
        }
    };

    const handleNewCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleNewCommentSubmit = async (e) => {
        e.preventDefault();
        await addComment(post.post_id, newComment);
        setNewComment(prevComment => '');
        await fetchComments();
    };

    const handlePostOptions = () => {
        setShowPostOptions(true);
    };

    const handleEditPost = async () => {
        try {
            await editPost(post.post_id, editPostText);
            console.log(`Post ${post.post_id} edited.`);
            setShowPostOptions(false);
            // TODO: Refresh the post
        } catch (error) {
            console.error(`Error during post editing: ${error.message}`);
        }
    };

    const handleDeletePost = async () => {
        try {
            await deletePost(post.post_id);
            setShowPostOptions(false);
            // TODO: Remove the post from the UI
        } catch (error) {
            console.error(`Error during post deletion: ${error.message}`);
        }
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
                        <MoreVert onClick={handlePostOptions}/>
                        {showPostOptions && (
                            <div className="postOptionsPopup">
                                <input type="text" value={editPostText} onChange={(e) => setEditPostText(e.target.value)} />
                                <button onClick={handleEditPost}>Edit Post</button>
                                <button onClick={handleDeletePost}>Delete Post</button>
                            </div>
                        )}
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
                    <div key={comment.comment_id} className="comment">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img className="postProfileImg" src="/assets/feed1.jpg" alt=""/>
                                <span className="postUsername">{comment.user}</span>
                                <span className="postDate">{new Date(comment.created).toDateString()}</span>
                            </div>
                            <div className="postTopRight">
                                <MoreVert onClick={() => handleCommentOptions(comment.comment_id)}/>
                            </div>
                        </div>
                        <span>{comment.text}</span>
                        {currentCommentId === comment.comment_id && (
                            <div className="commentOptionsPopup">
                                <input type="text" value={editCommentText} onChange={(e) => setEditCommentText(e.target.value)} />
                                <button onClick={handleEditComment}>Change Comment</button>
                                <button onClick={handleDeleteComment}>Delete Comment</button>
                            </div>
                        )}
                    </div>
                ))}
                <form onSubmit={handleNewCommentSubmit} className="commentForm">
                    <input type="text" value={newComment} onChange={handleNewCommentChange}
                           placeholder="Add a comment"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

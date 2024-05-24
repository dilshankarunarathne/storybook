DELIMITER //

CREATE TRIGGER increment_posts_count
AFTER INSERT ON post
FOR EACH ROW
BEGIN
   UPDATE user SET posts_count = posts_count + 1 WHERE username = NEW.user;
END;
//

CREATE TRIGGER decrement_posts_count
AFTER DELETE ON post
FOR EACH ROW
BEGIN
   UPDATE user SET posts_count = posts_count - 1 WHERE username = OLD.user;
END;
//

CREATE TRIGGER increment_comments_count
AFTER INSERT ON comment
FOR EACH ROW
BEGIN
   UPDATE post SET comments_count = comments_count + 1 WHERE post_id = NEW.post;
END;
//

CREATE TRIGGER decrement_comments_count
AFTER DELETE ON comment
FOR EACH ROW
BEGIN
   UPDATE post SET comments_count = comments_count - 1 WHERE post_id = OLD.post;
END;
//

CREATE TRIGGER increment_likes_count
AFTER INSERT ON react
FOR EACH ROW
BEGIN
   UPDATE post SET likes_count = likes_count + 1 WHERE post_id = NEW.post;
END;
//

CREATE TRIGGER decrement_likes_count
AFTER DELETE ON react
FOR EACH ROW
BEGIN
   UPDATE post SET likes_count = likes_count - 1 WHERE post_id = OLD.post;
END;
//

DELIMITER ;

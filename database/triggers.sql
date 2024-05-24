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

DELIMITER ;
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 27, 2024 at 01:15 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `storybook`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
                                         `comment_id` int(11) NOT NULL AUTO_INCREMENT,
                                         `post` int(11) NOT NULL,
                                         `user` varchar(20) NOT NULL,
                                         `text` varchar(250) NOT NULL,
                                         `created` timestamp NOT NULL,
                                         `last_modified` timestamp NULL DEFAULT NULL,
                                         PRIMARY KEY (`comment_id`),
                                         KEY `comment_ibfk_1` (`post`),
                                         KEY `comment_ibfk_2` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Triggers `comment`
--
DROP TRIGGER IF EXISTS `decrement_comments_count`;
DELIMITER $$
CREATE TRIGGER `decrement_comments_count` AFTER DELETE ON `comment` FOR EACH ROW BEGIN
    UPDATE post SET comments_count = comments_count - 1 WHERE post_id = OLD.post;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `increment_comments_count`;
DELIMITER $$
CREATE TRIGGER `increment_comments_count` AFTER INSERT ON `comment` FOR EACH ROW BEGIN
    UPDATE post SET comments_count = comments_count + 1 WHERE post_id = NEW.post;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
                                      `post_id` int(11) NOT NULL AUTO_INCREMENT,
                                      `user` varchar(20) NOT NULL,
                                      `text` varchar(1000) NOT NULL,
                                      `image` longblob,
                                      `created` timestamp NOT NULL,
                                      `last_modified` timestamp NULL DEFAULT NULL,
                                      `comments_count` int(11) NOT NULL DEFAULT '0',
                                      `likes_count` int(11) NOT NULL DEFAULT '0',
                                      PRIMARY KEY (`post_id`),
                                      KEY `post_ibfk_1` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Triggers `post`
--
DROP TRIGGER IF EXISTS `decrement_posts_count`;
DELIMITER $$
CREATE TRIGGER `decrement_posts_count` AFTER DELETE ON `post` FOR EACH ROW BEGIN
    UPDATE user SET posts_count = posts_count - 1 WHERE username = OLD.user;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `increment_posts_count`;
DELIMITER $$
CREATE TRIGGER `increment_posts_count` AFTER INSERT ON `post` FOR EACH ROW BEGIN
    UPDATE user SET posts_count = posts_count + 1 WHERE username = NEW.user;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `react`
--

DROP TABLE IF EXISTS `react`;
CREATE TABLE IF NOT EXISTS `react` (
                                       `id` int(11) NOT NULL AUTO_INCREMENT,
                                       `user` varchar(20) NOT NULL,
                                       `post` int(11) NOT NULL,
                                       PRIMARY KEY (`id`),
                                       KEY `react_ibfk_1` (`post`),
                                       KEY `react_ibfk_2` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Triggers `react`
--
DROP TRIGGER IF EXISTS `decrement_likes_count`;
DELIMITER $$
CREATE TRIGGER `decrement_likes_count` AFTER DELETE ON `react` FOR EACH ROW BEGIN
    UPDATE post SET likes_count = likes_count - 1 WHERE post_id = OLD.post;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `increment_likes_count`;
DELIMITER $$
CREATE TRIGGER `increment_likes_count` AFTER INSERT ON `react` FOR EACH ROW BEGIN
    UPDATE post SET likes_count = likes_count + 1 WHERE post_id = NEW.post;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
                                      `username` varchar(15) NOT NULL,
                                      `hashed_password` varchar(64) NOT NULL,
                                      `email` varchar(40) NOT NULL,
                                      `verified` tinyint(1) NOT NULL DEFAULT '0',
                                      `first_name` varchar(20) NOT NULL,
                                      `last_name` varchar(20) NOT NULL,
                                      `dob` date NOT NULL,
                                      `bio` varchar(150) DEFAULT NULL,
                                      `profile_picture` mediumblob,
                                      `posts_count` int(11) NOT NULL DEFAULT '0',
                                      `confirmed` tinyint(1) DEFAULT '0',
                                      `verificationCode` varchar(255) DEFAULT NULL,
                                      PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

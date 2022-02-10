-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2022 at 02:59 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Database: `idg2671`
--
-- --------------------------------------------------------
--
-- Table structure for table `tags`
--
CREATE TABLE `tags` (
    `id` int(11) NOT NULL,
    `tagName` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
-- --------------------------------------------------------
--
-- Table structure for table `users`
--
CREATE TABLE `users` (
    `id` int(11) NOT NULL,
    `username` text NOT NULL,
    `password` text NOT NULL,
    `role` enum('admin', 'applicant', 'professor') NOT NULL DEFAULT 'applicant'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
-- --------------------------------------------------------
--
-- Table structure for table `usersinformation`
--
CREATE TABLE `usersinformation` (
    `id` int(11) NOT NULL,
    `name` text NOT NULL,
    `lastName` text NOT NULL,
    `degree` text NOT NULL,
    `location` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
-- --------------------------------------------------------
--
-- Table structure for table `userstags`
--
CREATE TABLE `userstags` (
    `userId` int(11) NOT NULL,
    `tagId` int(11) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Indexes for dumped tables
--
--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `tagName` (`tagName`) USING HASH;
--
-- Indexes for table `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `username` (`username`) USING HASH;
--
-- Indexes for table `usersinformation`
--
ALTER TABLE `usersinformation`
ADD PRIMARY KEY (`id`);
--
-- Indexes for table `userstags`
--
ALTER TABLE `userstags`
ADD KEY `user` (`userId`),
    ADD KEY `tag` (`tagId`);
--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `usersinformation`
--
ALTER TABLE `usersinformation`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--
--
-- Constraints for table `usersinformation`
--
ALTER TABLE `usersinformation`
ADD CONSTRAINT `userID` FOREIGN KEY (`id`) REFERENCES `users` (`id`);
--
-- Constraints for table `userstags`
--
ALTER TABLE `userstags`
ADD CONSTRAINT `tag` FOREIGN KEY (`tagId`) REFERENCES `tags` (`id`),
    ADD CONSTRAINT `user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
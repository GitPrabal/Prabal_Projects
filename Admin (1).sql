-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 02, 2018 at 02:04 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `document_category`
--

CREATE TABLE `document_category` (
  `id` int(11) NOT NULL,
  `document_name` varchar(1000) NOT NULL,
  `added_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `document_category`
--

INSERT INTO `document_category` (`id`, `document_name`, `added_date`) VALUES
(1, 'Aadhaar Card', '2018-11-01 12:14:42'),
(2, 'PAN Verification Record', '2018-11-01 12:14:48'),
(3, 'LPG Subscription Voucher', '2018-11-01 12:14:58'),
(4, 'Insurance Policy Certificate - Two Wheeler	', '2018-11-01 12:15:04'),
(5, 'Registration of Vehicles', '2018-11-01 12:15:22'),
(6, 'Vehicle Tax Receipt', '2018-11-01 12:15:35'),
(7, 'Driving License', '2018-11-01 12:15:49'),
(8, 'Class X Marksheet', '2018-11-02 05:22:40'),
(9, 'Caste Certificate', '2018-11-02 05:22:58'),
(10, 'Class XII Marksheet', '2018-11-02 05:23:05'),
(11, 'Class X Passing Certificate', '2018-11-02 05:23:19'),
(12, 'Domicile Certificate', '2018-11-02 05:23:29'),
(13, 'Birth Certificate', '2018-11-02 05:23:46'),
(14, 'Ration Card', '2018-11-02 05:23:54'),
(15, 'ITI Certificate', '2018-11-02 05:24:08'),
(16, 'Passport', '2018-11-02 05:24:37'),
(17, 'Nationality Certificate', '2018-11-02 05:51:31');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `user_id` varchar(500) NOT NULL,
  `date` varchar(200) NOT NULL,
  `price` varchar(100) NOT NULL,
  `desc_exp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `user_id`, `date`, `price`, `desc_exp`) VALUES
(1, '1552508845', '', '', ''),
(2, '1627743995', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `salt_string` text NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `user_id`, `fullname`, `email`, `password`, `salt_string`, `reg_date`) VALUES
(3, '1552508845', 'Prabal', 'prabal1.gupta@gmail.com', '123456', '71875cce475ba332d2986a38dfc1e122$e10adc3949ba59abbe56e057f20f883e', '2018-10-30 06:47:25'),
(4, '1627743995', 'prabal', 'rahul@gmail.com', '123456', 'bf58d3ae3a4f63fdc9719204846e3ffd$e10adc3949ba59abbe56e057f20f883e', '2018-10-31 05:39:55');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `phone_no` varchar(40) NOT NULL,
  `profile_pic` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`id`, `user_id`, `address`, `phone_no`, `profile_pic`) VALUES
(3, '1552508845', '', '', ''),
(4, '1627743995', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_docs`
--

CREATE TABLE `user_docs` (
  `id` int(11) NOT NULL,
  `user_id` varchar(500) NOT NULL,
  `document_id` varchar(200) NOT NULL,
  `document_image` varchar(500) NOT NULL,
  `image_url` varchar(2000) NOT NULL DEFAULT 'http://images.reactapi.com/images/',
  `isApproved` int(11) NOT NULL DEFAULT '0' COMMENT '0-false,1-true',
  `added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_docs`
--

INSERT INTO `user_docs` (`id`, `user_id`, `document_id`, `document_image`, `image_url`, `isApproved`, `added_on`) VALUES
(1, '1552508845', '1', '0001344001541080845.jpg', 'http://images.reactapi.com/images/', 0, '2018-11-01 14:00:45'),
(2, '1552508845', '17', '0065107001541137932.jpg', 'http://images.reactapi.com/images/', 0, '2018-11-02 05:52:12'),
(3, '1552508845', '17', '0483130001541137946.jpg', 'http://images.reactapi.com/images/', 0, '2018-11-02 05:52:26'),
(4, '1552508845', '8', '0344287001541141592.jpg', 'http://images.reactapi.com/images/', 0, '2018-11-02 06:53:12'),
(5, '1552508845', '3', '0281259001541142448.jpg', 'http://images.reactapi.com/images/', 0, '2018-11-02 07:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `user_token`
--

CREATE TABLE `user_token` (
  `id` int(11) NOT NULL,
  `user_id` varchar(500) NOT NULL,
  `access_token` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_token`
--

INSERT INTO `user_token` (`id`, `user_id`, `access_token`) VALUES
(7, '1627743995', '75d59627f467f87f0ab9818ddd0d13bf'),
(12, '1552508845', '0f26ba18a8e40f9cd6accf307affedfa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `document_category`
--
ALTER TABLE `document_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `user_docs`
--
ALTER TABLE `user_docs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_token`
--
ALTER TABLE `user_token`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `document_category`
--
ALTER TABLE `document_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_docs`
--
ALTER TABLE `user_docs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user_token`
--
ALTER TABLE `user_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
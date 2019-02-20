-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 11, 2019 at 02:02 PM
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
(1, '1612986067', '', '', ''),
(2, '1586975032', '', '', ''),
(3, '1619866243', '', '', ''),
(4, '1639794359', '', '', ''),
(5, '1617024689', '', '', ''),
(6, '1575598672', '', '', ''),
(7, '1590287335', '', '', ''),
(8, '1599734455', '', '', ''),
(9, '1598050025', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `mobile_no` varchar(200) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `salt_string` text NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `user_id`, `fullname`, `mobile_no`, `email`, `password`, `salt_string`, `reg_date`) VALUES
(1, '1599734455', 'prabal', '8105495600', 'prabal1.gupta@gmail.com', '123456', '71875cce475ba332d2986a38dfc1e122$e10adc3949ba59abbe56e057f20f883e', '2018-12-05 10:50:55'),
(2, '1598050025', 'krishna', '8105495600', 'krishna@gmail.com', '123456', '8612ab3933764d2c6e39fd0ff898a19a$e10adc3949ba59abbe56e057f20f883e', '2018-12-05 10:52:05');

-- --------------------------------------------------------

--
-- Table structure for table `share_document`
--

CREATE TABLE `share_document` (
  `id` int(11) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `share_with` varchar(200) NOT NULL,
  `document_id` varchar(200) NOT NULL,
  `document_image` text NOT NULL,
  `note` text NOT NULL,
  `transaction_id` varchar(800) NOT NULL,
  `transaction_date` varchar(200) NOT NULL,
  `transaction_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `share_document`
--

INSERT INTO `share_document` (`id`, `user_id`, `share_with`, `document_id`, `document_image`, `note`, `transaction_id`, `transaction_date`, `transaction_time`) VALUES
(1, '1599734455', '1598050025', '1', 'http://images.reactapi.com/images/0092894001545978070.jpg', 'This doc is only valid for joining in company', '0493047001545981140', '28-12-2018', '12:42:20 pm'),
(2, '1599734455', '1598050025', '1', 'http://images.reactapi.com/images/0092894001545978070.jpg', 'This is only for joining company', '0103029001545990801', '28-12-2018', '03:23:21 pm');

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
(1, '1599734455', '', '', ''),
(2, '1598050025', '', '', '');

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
(1, '1599734455', '1', '0092894001545978070.jpg', 'http://images.reactapi.com/images/', 1, '2018-12-28 06:23:47'),
(2, '1598050025', '14', '0086360001546412700.jpeg', 'http://images.reactapi.com/images/', 0, '2019-01-02 07:05:00'),
(3, '1598050025', '5', '0151973001546412960.jpeg', 'http://images.reactapi.com/images/', 0, '2019-01-02 07:09:20');

-- --------------------------------------------------------

--
-- Table structure for table `user_ipin`
--

CREATE TABLE `user_ipin` (
  `id` int(11) NOT NULL,
  `user_id` varchar(500) NOT NULL,
  `user_ipin` varchar(200) NOT NULL,
  `set_ipin_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_ipin`
--

INSERT INTO `user_ipin` (`id`, `user_id`, `user_ipin`, `set_ipin_date`) VALUES
(1, '1599734455', '123456', '2018-12-05 11:22:11'),
(2, '1598050025', '123456', '2018-12-17 14:46:57');

-- --------------------------------------------------------

--
-- Table structure for table `user_otp`
--

CREATE TABLE `user_otp` (
  `id` int(11) NOT NULL,
  `user_id` varchar(500) NOT NULL,
  `otp` varchar(200) NOT NULL,
  `otp_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_otp`
--

INSERT INTO `user_otp` (`id`, `user_id`, `otp`, `otp_date`) VALUES
(1, '1599734455', '8360', '2018-12-06 11:35:27'),
(2, '1598050025', '8947', '2018-12-17 14:46:32');

-- --------------------------------------------------------

--
-- Table structure for table `user_request`
--

CREATE TABLE `user_request` (
  `id` int(11) NOT NULL,
  `requested_by` varchar(200) NOT NULL,
  `requested_for` varchar(200) NOT NULL COMMENT 'document_id',
  `requested_with` varchar(200) NOT NULL COMMENT 'requested_user_id',
  `description` text NOT NULL,
  `approved` varchar(100) NOT NULL,
  `isSeen` varchar(20) NOT NULL DEFAULT '0',
  `requested_date` varchar(200) NOT NULL,
  `requested_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_request`
--

INSERT INTO `user_request` (`id`, `requested_by`, `requested_for`, `requested_with`, `description`, `approved`, `isSeen`, `requested_date`, `requested_time`) VALUES
(1, '1598050025', '1', '1599734455', '', '1', '1', '28-12-2018', '12:36:26 pm'),
(2, '1599734455', '14', '1598050025', 'This is for joining a company', '0', '1', '02-01-2019', '12:33:37 pm');

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
(9, '1599734455', 'b1d7599f7b982ad0145267b0014718c8');

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
-- Indexes for table `share_document`
--
ALTER TABLE `share_document`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `user_ipin`
--
ALTER TABLE `user_ipin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `user_otp`
--
ALTER TABLE `user_otp`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `user_request`
--
ALTER TABLE `user_request`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `share_document`
--
ALTER TABLE `share_document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_docs`
--
ALTER TABLE `user_docs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_ipin`
--
ALTER TABLE `user_ipin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_otp`
--
ALTER TABLE `user_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_request`
--
ALTER TABLE `user_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_token`
--
ALTER TABLE `user_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 27, 2018 at 02:04 PM
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
(5, '1617024689', '', '', '');

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
(1, '1612986067', 'prabal', '8105495600', 'prabal1.gupta@gmail.com', '123456', '71875cce475ba332d2986a38dfc1e122$e10adc3949ba59abbe56e057f20f883e', '2018-11-27 11:14:42'),
(2, '1586975032', 'krishna', '8105495600', 'krishna@gmail.com', '123456', '8612ab3933764d2c6e39fd0ff898a19a$e10adc3949ba59abbe56e057f20f883e', '2018-11-27 11:14:45'),
(3, '1619866243', 'lata', '8105495600', 'lata@gmail.com', '123456', '89b1163c1d18b81c9aec10e3f84baca4$e10adc3949ba59abbe56e057f20f883e', '2018-11-27 11:14:47'),
(4, '1639794359', 'abhishek', '8105495600', 'abhishek@gmail.com', '123456', 'd7ccd51bf3ea86dd2137db894c62786f$e10adc3949ba59abbe56e057f20f883e', '2018-11-27 11:14:39'),
(5, '1617024689', 'Jack Jones', '8105495600', 'jack@gmail.com', '123456', '77864601526fc73452f5c7f942ac4ff4$e10adc3949ba59abbe56e057f20f883e', '2018-11-26 11:04:49');

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
  `transaction_id` varchar(800) NOT NULL,
  `transaction_date` varchar(200) NOT NULL,
  `transaction_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `share_document`
--

INSERT INTO `share_document` (`id`, `user_id`, `share_with`, `document_id`, `document_image`, `transaction_id`, `transaction_date`, `transaction_time`) VALUES
(1, '1612986067', '1586975032', '1', 'http://images.reactapi.com/images/0975221001542704664.jpg', '0956445001542803565', '21-11-2018', '06:02:45 pm'),
(2, '1612986067', '1619866243', '3', '', '0929383001542952710', '23-11-2018', '11:28:30 am'),
(3, '1612986067', '1639794359', '4', 'http://images.reactapi.com/images/0960094001542704784.jpg', '0496264001542953459', '23-11-2018', '11:40:59 am'),
(4, '1619866243', '1639794359', '3', 'http://images.reactapi.com/images/0970753001542967098.jpg', '0576322001543227385', '26-11-2018', '03:46:25 pm');

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
(1, '1612986067', '', '', ''),
(2, '1586975032', '', '', ''),
(3, '1619866243', '', '', ''),
(4, '1639794359', '', '', ''),
(5, '1617024689', '', '', '');

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
(1, '1612986067', '1', '0975221001542704664.jpg', 'http://images.reactapi.com/images/', 1, '2018-11-20 09:04:33'),
(3, '1612986067', '4', '0960094001542704784.jpg', 'http://images.reactapi.com/images/', 1, '2018-11-20 09:06:41'),
(4, '1586975032', '1', '0996514001542704868.jpg', 'http://images.reactapi.com/images/', 1, '2018-11-20 09:08:10'),
(5, '1586975032', '2', '0521691001542704896.jpg', 'http://images.reactapi.com/images/', 1, '2018-11-20 09:08:40'),
(6, '1586975032', '3', '0260019001542704909.jpg', 'http://images.reactapi.com/images/', 1, '2018-11-20 09:08:45'),
(7, '1619866243', '3', '0970753001542967098.jpg', 'http://images.reactapi.com/images/', 1, '2018-11-23 09:58:32'),
(8, '1619866243', '1', '0654455001542967284.jpeg', 'http://images.reactapi.com/images/', 1, '2018-11-23 10:01:33'),
(9, '1612986067', '11', '0904000001543225136.jpeg', 'http://images.reactapi.com/images/', 1, '2018-11-26 09:39:10'),
(10, '1612986067', '12', '0841828001543225352.jpeg', 'http://images.reactapi.com/images/', 1, '2018-11-26 09:42:39'),
(11, '1639794359', '14', '0095325001543298918.jpeg', 'http://images.reactapi.com/images/', 0, '2018-11-27 06:08:38');

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
(1, '1612986067', '123456', '2018-11-21 12:26:13'),
(2, '1586975032', '', '2018-11-13 12:10:32'),
(3, '1619866243', '123456', '2018-11-26 10:16:11'),
(4, '1639794359', '', '2018-11-13 12:10:59'),
(5, '1617024689', '', '2018-11-26 11:04:49');

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
(1, '1612986067', '9836', '2018-11-27 12:22:07'),
(3, '1619866243', '6989', '2018-11-27 12:40:15');

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
  `requested_date` varchar(200) NOT NULL,
  `requested_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_request`
--

INSERT INTO `user_request` (`id`, `requested_by`, `requested_for`, `requested_with`, `description`, `approved`, `requested_date`, `requested_time`) VALUES
(1, '1612986067', '1', '1586975032', 'Nation Wants to know', '1', '21-11-2018', '03:03:46 pm'),
(2, '1612986067', '2', '1586975032', 'ksdjd', '1', '21-11-2018', '03:08:04 pm'),
(3, '1619866243', '1', '1612986067', '', '1', '21-11-2018', '04:13:31 pm'),
(4, '1612986067', '14', '1639794359', 'kjsdsd dfsdsd', '1', '22-11-2018', '11:22:07 am'),
(5, '1619866243', '11', '1612986067', 'fgfdf', '1', '22-11-2018', '11:35:16 am'),
(6, '1612986067', '3', '1619866243', '', '1', '23-11-2018', '02:59:57 pm'),
(7, '1612986067', '1', '1619866243', '', '0', '23-11-2018', '04:09:45 pm'),
(8, '1619866243', '12', '1612986067', '', '1', '26-11-2018', '03:12:02 pm'),
(9, '1612986067', '3', '1619866243', '', '0', '26-11-2018', '03:32:13 pm'),
(10, '1612986067', '1', '1586975032', '', '0', '27-11-2018', '05:47:55 pm'),
(11, '1619866243', '15', '1612986067', 'We want for Visa Process', '0', '27-11-2018', '06:00:19 pm'),
(12, '1619866243', '3', '1612986067', '', '0', '27-11-2018', '06:00:54 pm'),
(13, '1619866243', '6', '1612986067', '', '0', '27-11-2018', '06:05:09 pm'),
(14, '1619866243', '6', '1639794359', '', '0', '27-11-2018', '06:07:45 pm'),
(15, '1619866243', '6', '1617024689', '', '0', '27-11-2018', '06:08:31 pm'),
(16, '1619866243', '13', '1612986067', '', '0', '27-11-2018', '06:11:33 pm'),
(17, '1619866243', '14', '1612986067', '', '0', '27-11-2018', '06:19:48 pm'),
(18, '1619866243', '14', '1586975032', '', '0', '27-11-2018', '06:21:50 pm'),
(19, '1619866243', '1', '1639794359', '', '0', '27-11-2018', '06:22:36 pm'),
(20, '1619866243', '8', '1617024689', '', '0', '27-11-2018', '06:28:24 pm'),
(21, '1619866243', '11', '1617024689', '', '0', '27-11-2018', '06:31:05 pm');

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
(110, '1619866243', '583e1bc4cc29351cb7c550f44dfb9193');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `share_document`
--
ALTER TABLE `share_document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user_docs`
--
ALTER TABLE `user_docs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `user_ipin`
--
ALTER TABLE `user_ipin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user_otp`
--
ALTER TABLE `user_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_request`
--
ALTER TABLE `user_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `user_token`
--
ALTER TABLE `user_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
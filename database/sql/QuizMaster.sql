-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Mar 31, 2023 at 09:20 AM
-- Server version: 10.9.3-MariaDB-1:10.9.3+maria~ubu2204
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `QuizMaster`
--

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `questionId` int(11) NOT NULL,
  `isCorrect` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `text`, `questionId`, `isCorrect`) VALUES
(225, 'a', 58, b'0'),
(226, 'b', 58, b'1'),
(227, 'c', 58, b'0'),
(228, 'd', 58, b'0'),
(229, 'asd', 59, b'0'),
(230, 'asd', 59, b'1'),
(231, 'as', 59, b'0'),
(232, 'd', 59, b'0'),
(233, 'a', 60, b'0'),
(234, 'b', 60, b'1'),
(235, 'c', 60, b'0'),
(236, 'd', 60, b'0'),
(237, 'asd', 61, b'0'),
(238, 'asd', 61, b'1'),
(239, 'as', 61, b'0'),
(240, 'd', 61, b'0'),
(241, 'a', 62, b'0'),
(242, 'b', 62, b'1'),
(243, 'c', 62, b'0'),
(244, 'd', 62, b'0'),
(245, 'asd', 63, b'0'),
(246, 'asd', 63, b'1'),
(247, 'as', 63, b'0'),
(248, 'd', 63, b'0'),
(249, 'a', 64, b'0'),
(250, 'b', 64, b'1'),
(251, 'c', 64, b'0'),
(252, 'd', 64, b'0'),
(253, 'asd', 65, b'0'),
(254, 'asd', 65, b'1'),
(255, 'as', 65, b'0'),
(256, 'd', 65, b'0'),
(257, 'a', 66, b'0'),
(258, 'b', 66, b'1'),
(259, 'c', 66, b'0'),
(260, 'd', 66, b'0'),
(261, 'asd', 67, b'0'),
(262, 'asd', 67, b'1'),
(263, 'as', 67, b'0'),
(264, 'd', 67, b'0'),
(265, 'a', 68, b'0'),
(266, 'b', 68, b'1'),
(267, 'c', 68, b'0'),
(268, 'd', 68, b'0'),
(269, 'asd', 69, b'0'),
(270, 'asd', 69, b'1'),
(271, 'as', 69, b'0'),
(272, 'd', 69, b'0'),
(273, 'a', 70, b'0'),
(274, 'b', 70, b'1'),
(275, 'c', 70, b'0'),
(276, 'd', 70, b'0'),
(277, 'asd', 71, b'0'),
(278, 'asd', 71, b'1'),
(279, 'as', 71, b'0'),
(280, 'd', 71, b'0'),
(281, 'a', 72, b'0'),
(282, 'b', 72, b'1'),
(283, 'c', 72, b'0'),
(284, 'd', 72, b'0'),
(285, 'asd', 73, b'0'),
(286, 'asd', 73, b'1'),
(287, 'as', 73, b'0'),
(288, 'd', 73, b'0'),
(289, 'a', 74, b'0'),
(290, 'b', 74, b'1'),
(291, 'c', 74, b'0'),
(292, 'd', 74, b'0'),
(293, 'asd', 75, b'0'),
(294, 'asd', 75, b'1'),
(295, 'as', 75, b'0'),
(296, 'd', 75, b'0'),
(297, 'a', 76, b'0'),
(298, 'b', 76, b'1'),
(299, 'c', 76, b'0'),
(300, 'd', 76, b'0'),
(301, 'asd', 77, b'0'),
(302, 'asd', 77, b'1'),
(303, 'as', 77, b'0'),
(304, 'd', 77, b'0'),
(305, 'a', 78, b'0'),
(306, 'b', 78, b'1'),
(307, 'c', 78, b'0'),
(308, 'd', 78, b'0'),
(309, 'asd', 79, b'0'),
(310, 'asd', 79, b'1'),
(311, 'as', 79, b'0'),
(312, 'd', 79, b'0'),
(313, 'as', 80, b'0'),
(314, 'd', 80, b'0'),
(315, 'asd', 80, b'1'),
(316, 'asd', 80, b'0'),
(317, 'a', 81, b'0'),
(318, 'b', 81, b'1'),
(319, 'c', 81, b'0'),
(320, 'd', 81, b'0'),
(321, 'asd', 82, b'0'),
(322, 'asd', 82, b'1'),
(323, 'as', 82, b'0'),
(324, 'd', 82, b'0'),
(325, 'as', 83, b'0'),
(326, 'da', 83, b'0'),
(327, 'sd', 83, b'1'),
(328, 'asd', 83, b'0'),
(329, 'asd', 84, b'1'),
(330, 'asd', 84, b'0'),
(331, 'a', 84, b'0'),
(332, 'asd', 84, b'0'),
(333, 'dasd', 85, b'0'),
(334, 'a', 85, b'0'),
(335, 'd', 85, b'1'),
(336, 'asd', 85, b'0'),
(337, 'as', 86, b'0'),
(338, 'das', 86, b'0'),
(339, 'd', 86, b'1'),
(340, 'asd', 86, b'0'),
(341, 'a', 87, b'0'),
(342, 'b', 87, b'1'),
(343, 'c', 87, b'0'),
(344, 'd', 87, b'0'),
(345, 'asd', 88, b'0'),
(346, 'asd', 88, b'1'),
(347, 'as', 88, b'0'),
(348, 'd', 88, b'0'),
(349, 'a', 89, b'1'),
(350, 'b', 89, b'0'),
(351, 'c', 89, b'0'),
(352, 'd', 89, b'0'),
(353, 'asd', 90, b'0'),
(354, 'asd', 90, b'1'),
(355, 'as', 90, b'0'),
(356, 'd', 90, b'0'),
(357, 'a', 91, b'1'),
(358, 'b', 91, b'0'),
(359, 'c', 91, b'0'),
(360, 'd', 91, b'0'),
(361, 'asd', 92, b'0'),
(362, 'asd', 92, b'1'),
(363, 'as', 92, b'0'),
(364, 'd', 92, b'0'),
(365, 'a', 93, b'1'),
(366, 'b', 93, b'0'),
(367, 'c', 93, b'0'),
(368, 'd', 93, b'0'),
(369, 'asd', 94, b'0'),
(370, 'asdasdasd', 94, b'1'),
(371, 'as', 94, b'0'),
(372, 'd', 94, b'0'),
(373, 'a', 95, b'1'),
(374, 'b', 95, b'0'),
(375, 'c', 95, b'0'),
(376, 'd', 95, b'0'),
(377, 'asd', 96, b'0'),
(378, 'asdasdasd', 96, b'1'),
(379, 'as', 96, b'0'),
(380, 'd', 96, b'0'),
(381, 'Jupiter', 97, b'1'),
(382, 'Mars', 97, b'0'),
(383, 'Venus', 97, b'0'),
(384, 'Saturnus', 97, b'0'),
(385, 'Engels', 98, b'0'),
(386, 'Mandarijn', 98, b'1'),
(387, 'Spaans', 98, b'0'),
(388, 'Arabisch', 98, b'0'),
(389, 'Isaac Newton', 99, b'0'),
(390, 'Albert Einstein', 99, b'1'),
(391, 'Galileo Galilei', 99, b'0'),
(392, 'Stephen Hawking', 99, b'0'),
(393, 'George Orwell', 100, b'1'),
(394, 'Aldous Huxley', 100, b'0'),
(395, 'Ernest Hemingway', 100, b'0'),
(396, 'William Faulkner', 100, b'0'),
(397, 'Longen', 101, b'0'),
(398, 'Lever', 101, b'0'),
(399, 'Hart', 101, b'0'),
(400, 'Huid', 101, b'1'),
(401, '11', 102, b'1'),
(402, '9', 102, b'0'),
(403, '6', 102, b'0'),
(404, '13', 102, b'0'),
(405, '11', 103, b'0'),
(406, '9', 103, b'0'),
(407, '6', 103, b'0'),
(408, '13', 103, b'1'),
(409, '365', 104, b'1'),
(410, '365', 104, b'0'),
(411, '365', 104, b'0'),
(412, '365', 104, b'0'),
(413, 'Nederland', 105, b'0'),
(414, 'Zweden', 105, b'1'),
(415, 'Spanje', 105, b'0'),
(416, 'Rusland', 105, b'0'),
(417, 'Mandarijn', 106, b'0'),
(418, 'Engels', 106, b'1'),
(419, 'Arabisch', 106, b'0'),
(420, 'Spaans', 106, b'0'),
(421, 'Finding Nemo', 107, b'0'),
(422, 'UP', 107, b'0'),
(423, 'Toy Story', 107, b'1'),
(424, 'The Incredibles', 107, b'0'),
(425, 'Jupiter', 108, b'1'),
(426, 'Mars', 108, b'0'),
(427, 'Venus', 108, b'0'),
(428, 'Saturnus', 108, b'0'),
(429, 'Engels', 109, b'0'),
(430, 'Mandarijn', 109, b'1'),
(431, 'Spaans', 109, b'0'),
(432, 'Arabisch', 109, b'0'),
(433, 'Isaac Newton', 110, b'0'),
(434, 'Albert Einstein', 110, b'1'),
(435, 'Galileo Galilei', 110, b'0'),
(436, 'Stephen Hawking', 110, b'0'),
(437, 'George Orwell', 111, b'1'),
(438, 'Aldous Huxley', 111, b'0'),
(439, 'Ernest Hemingway', 111, b'0'),
(440, 'William Faulkner', 111, b'0'),
(441, 'Longen', 112, b'0'),
(442, 'Lever', 112, b'0'),
(443, 'Hart', 112, b'0'),
(444, 'Huid', 112, b'1'),
(445, '11', 113, b'1'),
(446, '9', 113, b'0'),
(447, '6', 113, b'0'),
(448, '13', 113, b'0'),
(449, '11', 114, b'0'),
(450, '9', 114, b'0'),
(451, '6', 114, b'0'),
(452, '13', 114, b'1'),
(453, '365', 115, b'1'),
(454, '365', 115, b'0'),
(455, '365', 115, b'0'),
(456, '365', 115, b'0'),
(457, 'Nederland', 116, b'0'),
(458, 'Zweden', 116, b'1'),
(459, 'Spanje', 116, b'0'),
(460, 'Rusland', 116, b'0'),
(461, 'Mandarijn', 117, b'0'),
(462, 'Engels', 117, b'1'),
(463, 'Arabisch', 117, b'0'),
(464, 'Spaans', 117, b'0'),
(465, 'Finding Nemo', 118, b'0'),
(466, 'UP', 118, b'0'),
(467, 'Toy Story', 118, b'1'),
(468, 'The Incredibles', 118, b'0'),
(469, 'asd', 119, b'0'),
(470, 'a', 119, b'0'),
(471, 'da', 119, b'1'),
(472, 'sd', 119, b'0'),
(473, 'as', 120, b'0'),
(474, 'd', 120, b'0'),
(475, 'asdas', 120, b'1'),
(476, 'das', 120, b'0'),
(477, 'as', 121, b'0'),
(478, 'd', 121, b'0'),
(479, 'asdas', 121, b'1'),
(480, 'das', 121, b'0'),
(481, 'as', 122, b'0'),
(482, 'd', 122, b'0'),
(483, 'asdas', 122, b'1'),
(484, 'das', 122, b'0'),
(485, 'asd', 123, b'1'),
(486, 'asd', 123, b'0'),
(487, 'a', 123, b'0'),
(488, 'sdas', 123, b'0'),
(489, 'asd', 124, b'1'),
(490, 'asd', 124, b'0'),
(491, 'a', 124, b'0'),
(492, 'sdas', 124, b'0'),
(493, 'asd', 125, b'1'),
(494, 'asd', 125, b'0'),
(495, 'a', 125, b'0'),
(496, 'sdas', 125, b'0'),
(497, 'asd', 126, b'1'),
(498, 'asd', 126, b'0'),
(499, 'a', 126, b'0'),
(500, 'sdas', 126, b'0'),
(501, 'asd', 127, b'1'),
(502, 'asd', 127, b'0'),
(503, 'a', 127, b'0'),
(504, 'sdas', 127, b'0'),
(505, 'asd', 128, b'1'),
(506, 'asd', 128, b'0'),
(507, 'a', 128, b'0'),
(508, 'sdas', 128, b'0'),
(509, 'asd', 129, b'1'),
(510, 'asd', 129, b'0'),
(511, 'a', 129, b'0'),
(512, 'sdas', 129, b'0'),
(513, 'asd', 130, b'1'),
(514, 'asd', 130, b'0'),
(515, 'a', 130, b'0'),
(516, 'sdas', 130, b'0'),
(517, 'asd', 131, b'1'),
(518, 'asd', 131, b'0'),
(519, 'a', 131, b'0'),
(520, 'sdas', 131, b'0'),
(521, 'asd', 132, b'1'),
(522, 'asd', 132, b'0'),
(523, 'a', 132, b'0'),
(524, 'sdas', 132, b'0'),
(525, 'asd', 133, b'1'),
(526, 'asd', 133, b'0'),
(527, 'a', 133, b'0'),
(528, 'sdas', 133, b'0'),
(529, 'asd', 134, b'1'),
(530, 'asd', 134, b'0'),
(531, 'a', 134, b'0'),
(532, 'sdas', 134, b'0'),
(533, 'a', 135, b'0'),
(534, 'd', 135, b'0'),
(535, 'd', 135, b'1'),
(536, 'd', 135, b'0'),
(537, 'a', 136, b'0'),
(538, 'd', 136, b'0'),
(539, 'd', 136, b'1'),
(540, 'd', 136, b'0'),
(541, 'a', 137, b'0'),
(542, 'd', 137, b'0'),
(543, 'd', 137, b'1'),
(544, 'd', 137, b'0'),
(545, 'a', 138, b'0'),
(546, 'd', 138, b'0'),
(547, 'd', 138, b'1'),
(548, 'd', 138, b'0'),
(549, 'a', 139, b'0'),
(550, 'd', 139, b'0'),
(551, 'd', 139, b'1'),
(552, 'd', 139, b'0'),
(553, 'a', 140, b'0'),
(554, 'sd', 140, b'1'),
(555, 'asd', 140, b'0'),
(556, 'asd', 140, b'0'),
(557, 'as', 141, b'0'),
(558, 'da', 141, b'1'),
(559, 'das', 141, b'0'),
(560, 'sda', 141, b'0'),
(561, 'sda', 142, b'0'),
(562, 'sda', 142, b'0'),
(563, 'sd', 142, b'1'),
(564, 'asd', 142, b'0'),
(565, 'das', 143, b'0'),
(566, 'da', 143, b'0'),
(567, 'sd', 143, b'1'),
(568, 'asd', 143, b'0'),
(569, 'd', 144, b'0'),
(570, 'as', 144, b'1'),
(571, 'd', 144, b'0'),
(572, 'dsa', 144, b'0'),
(573, 'a', 145, b'0'),
(574, 'sd', 145, b'0'),
(575, 'a', 145, b'1'),
(576, 'sdas', 145, b'0'),
(577, 'as', 146, b'0'),
(578, 'd', 146, b'1'),
(579, 'as', 146, b'0'),
(580, 'dasd', 146, b'0'),
(581, 'asd', 147, b'0'),
(582, 'a', 147, b'0'),
(583, 'da', 147, b'1'),
(584, 'sd', 147, b'0'),
(585, 'asd', 148, b'1'),
(586, 'asd', 148, b'0'),
(587, 'asd', 148, b'0'),
(588, 'asd', 148, b'0'),
(589, 'a', 149, b'1'),
(590, 'b', 149, b'0'),
(591, 'c', 149, b'0'),
(592, 'd', 149, b'0'),
(593, 'asd', 150, b'0'),
(594, 'asdasdasd', 150, b'1'),
(595, 'as', 150, b'0'),
(596, 'd', 150, b'0'),
(597, 'a', 151, b'1'),
(598, 'b', 151, b'0'),
(599, 'c', 151, b'0'),
(600, 'd', 151, b'0'),
(601, 'asd', 152, b'0'),
(602, 'asdasdasd', 152, b'1'),
(603, 'as', 152, b'0'),
(604, 'd', 152, b'0'),
(605, 'a', 153, b'1'),
(606, 'b', 153, b'0'),
(607, 'c', 153, b'0'),
(608, 'd', 153, b'0'),
(609, 'asd', 154, b'0'),
(610, 'asdasdasd', 154, b'1'),
(611, 'as', 154, b'0'),
(612, 'd', 154, b'0'),
(613, 'a', 155, b'1'),
(614, 'b', 155, b'0'),
(615, 'c', 155, b'0'),
(616, 'd', 155, b'0'),
(617, 'asd', 156, b'0'),
(618, 'asdasdasd', 156, b'1'),
(619, 'as', 156, b'0'),
(620, 'd', 156, b'0'),
(621, 'a', 157, b'1'),
(622, 'b', 157, b'0'),
(623, 'c', 157, b'0'),
(624, 'd', 157, b'0'),
(625, 'asd', 158, b'0'),
(626, 'asdasdasd', 158, b'1'),
(627, 'as', 158, b'0'),
(628, 'd', 158, b'0'),
(629, 'a', 159, b'1'),
(630, 'b', 159, b'0'),
(631, 'c', 159, b'0'),
(632, 'd', 159, b'0'),
(633, 'asd', 160, b'0'),
(634, 'asdasdasd', 160, b'1'),
(635, 'as', 160, b'0'),
(636, 'd', 160, b'0'),
(637, 'a', 161, b'1'),
(638, 'b', 161, b'0'),
(639, 'c', 161, b'0'),
(640, 'd', 161, b'0'),
(641, 'asd', 162, b'0'),
(642, 'asdasdasd', 162, b'1'),
(643, 'as', 162, b'0'),
(644, 'd', 162, b'0'),
(645, 'a', 163, b'1'),
(646, 'b', 163, b'0'),
(647, 'c', 163, b'0'),
(648, 'd', 163, b'0'),
(649, 'asd', 164, b'0'),
(650, 'asdasdasd', 164, b'1'),
(651, 'as', 164, b'0'),
(652, 'd', 164, b'0'),
(653, 'a', 165, b'1'),
(654, 'b', 165, b'0'),
(655, 'c', 165, b'0'),
(656, 'd', 165, b'0'),
(657, 'asd', 166, b'0'),
(658, 'asdasdasd', 166, b'1'),
(659, 'as', 166, b'0'),
(660, 'd', 166, b'0'),
(661, 'a', 167, b'1'),
(662, 'b', 167, b'0'),
(663, 'c', 167, b'0'),
(664, 'd', 167, b'0'),
(665, 'asd', 168, b'0'),
(666, 'asdasdasd', 168, b'1'),
(667, 'as', 168, b'0'),
(668, 'd', 168, b'0'),
(669, 'a', 169, b'1'),
(670, 'b', 169, b'0'),
(671, 'c', 169, b'0'),
(672, 'd', 169, b'0'),
(673, 'asd', 170, b'0'),
(674, 'asdasdasd', 170, b'1'),
(675, 'as', 170, b'0'),
(676, 'd', 170, b'0'),
(677, 'Jupiter', 171, b'1'),
(678, 'Mars', 171, b'0'),
(679, 'Venus', 171, b'0'),
(680, 'Saturnus', 171, b'0'),
(681, 'Engels', 172, b'0'),
(682, 'Mandarijn', 172, b'1'),
(683, 'Spaans', 172, b'0'),
(684, 'Arabisch', 172, b'0'),
(685, 'Isaac Newton', 173, b'0'),
(686, 'Albert Einstein', 173, b'1'),
(687, 'Galileo Galilei', 173, b'0'),
(688, 'Stephen Hawking', 173, b'0'),
(689, 'George Orwell', 174, b'1'),
(690, 'Aldous Huxley', 174, b'0'),
(691, 'Ernest Hemingway', 174, b'0'),
(692, 'William Faulkner', 174, b'0'),
(693, 'Longen', 175, b'0'),
(694, 'Lever', 175, b'0'),
(695, 'Hart', 175, b'0'),
(696, 'Huid', 175, b'1'),
(697, '11', 176, b'1'),
(698, '9', 176, b'0'),
(699, '6', 176, b'0'),
(700, '13', 176, b'0'),
(701, '11', 177, b'0'),
(702, '9', 177, b'0'),
(703, '6', 177, b'0'),
(704, '13', 177, b'1'),
(705, '365', 178, b'1'),
(706, '365', 178, b'0'),
(707, '365', 178, b'0'),
(708, '365', 178, b'0'),
(709, 'Nederland', 179, b'0'),
(710, 'Zweden', 179, b'1'),
(711, 'Spanje', 179, b'0'),
(712, 'Rusland', 179, b'0'),
(713, 'Mandarijn', 180, b'0'),
(714, 'Engels', 180, b'1'),
(715, 'Arabisch', 180, b'0'),
(716, 'Spaans', 180, b'0'),
(717, 'Finding Nemo', 181, b'0'),
(718, 'UP', 181, b'0'),
(719, 'Toy Story', 181, b'1'),
(720, 'The Incredibles', 181, b'0'),
(721, 'asd', 182, b'0'),
(722, 'as', 182, b'0'),
(723, 'asd', 182, b'1'),
(724, 'asd', 182, b'0'),
(725, 'adssad', 183, b'0'),
(726, 'ads', 183, b'0'),
(727, 'as', 183, b'1'),
(728, 'ads', 183, b'0'),
(729, 'a', 184, b'1'),
(730, 'b', 184, b'0'),
(731, 'c', 184, b'0'),
(732, 'd', 184, b'0'),
(733, 'asd', 185, b'0'),
(734, 'asdasdasd', 185, b'1'),
(735, 'as', 185, b'0'),
(736, 'd', 185, b'0'),
(737, 'ADS', 186, b'0'),
(738, 'DS', 186, b'0'),
(739, 'ADS', 186, b'1'),
(740, 'SAD', 186, b'0'),
(741, 'a', 187, b'0'),
(742, 'sdasd', 187, b'0'),
(743, 'as', 187, b'0'),
(744, 'dasd', 187, b'1'),
(745, 'asd', 188, b'0'),
(746, 'a', 188, b'0'),
(747, 'asdasd', 188, b'0'),
(748, 'sdasd', 188, b'1');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `quizId` int(11) NOT NULL,
  `image` longtext DEFAULT NULL,
  `timeToAnswer` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `text`, `quizId`, `image`, `timeToAnswer`) VALUES
(171, 'Wat is de grootste planeet in ons zonnestelsel?', 22, '', '00:00:20'),
(172, 'Wat is de meest gesproken taal ter wereld?', 22, '', '00:00:20'),
(173, 'Welke beroemde wetenschapper bedacht de relativiteitstheorie?', 22, '', '00:00:20'),
(174, 'Welke beroemde schrijver schreef het boek \"1984\"?', 22, '', '00:00:20'),
(175, 'Wat is de grootste orgaan in het menselijk lichaam?', 22, '', '00:00:20'),
(176, 'Hoeveel tijdzones zijn er in Rusland?', 22, '', '00:00:20'),
(177, 'Hoeveel strepen staan er op de Amerikaanse vlag?', 22, '', '00:00:20'),
(178, 'Hoeveel dagen duurt het voordat de aarde om de zon draait?', 22, '', '00:00:20'),
(179, 'Welk land heeft de meeste eilanden ter wereld?', 22, '', '00:00:20'),
(180, 'Welke taal heeft de meeste woorden (volgens het woordenboek)?', 22, '', '00:00:20'),
(181, 'Wat was de eerste Pixar film?', 22, '', '00:00:20');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `public` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`id`, `name`, `userId`, `public`) VALUES
(22, 'De PubQuiz', 1, b'1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `role`) VALUES
(1, 'sebas', '$2b$10$G1gHzrAG460kv5xPMFETze7bLS9ZOzw28LRH.0t4hBGNwR23TajgG', 'sebas@hotmail.nl', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`questionId`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_id` (`quizId`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=749;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`id`);

--
-- Constraints for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD CONSTRAINT `quizzes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

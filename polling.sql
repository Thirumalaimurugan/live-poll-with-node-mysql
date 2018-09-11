/*
SQLyog Community v10.2 
MySQL - 5.5.16-log : Database - polling
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`polling` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `polling`;

/*Table structure for table `poll` */

DROP TABLE IF EXISTS `poll`;

CREATE TABLE `poll` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question_id` bigint(20) DEFAULT NULL,
  `option_id` bigint(20) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

/*Data for the table `poll` */

insert  into `poll`(`id`,`question_id`,`option_id`,`created_by`,`modified_by`,`created_time`,`modified_time`) values (23,1,2,NULL,NULL,'2018-09-11 12:52:55',NULL),(24,1,1,NULL,NULL,'2018-09-11 12:53:02',NULL),(25,1,3,NULL,NULL,'2018-09-11 12:53:07',NULL),(26,1,1,NULL,NULL,'2018-09-11 12:53:12',NULL),(27,1,1,NULL,NULL,'2018-09-11 12:53:17',NULL),(28,1,4,NULL,NULL,'2018-09-11 12:55:29',NULL),(29,1,3,NULL,NULL,'2018-09-11 13:01:58',NULL),(30,1,1,NULL,NULL,'2018-09-11 13:02:04',NULL);

/*Table structure for table `question` */

DROP TABLE IF EXISTS `question`;

CREATE TABLE `question` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question_text` varchar(300) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `question` */

insert  into `question`(`id`,`question_text`,`created_by`,`modified_by`,`created_time`,`modified_time`) values (1,'Whats your favourite season',1,1,'2018-09-11 08:44:42',NULL);

/*Table structure for table `question_option` */

DROP TABLE IF EXISTS `question_option`;

CREATE TABLE `question_option` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question_id` bigint(20) DEFAULT NULL,
  `option_text` varchar(300) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `question_option` */

insert  into `question_option`(`id`,`question_id`,`option_text`,`created_by`,`modified_by`,`created_time`,`modified_time`) values (1,1,'spring',1,1,'2018-09-11 08:45:26',NULL),(2,1,'summer',1,1,'2018-09-11 08:45:30',NULL),(3,1,'autumn',1,1,'2018-09-11 08:45:32',NULL),(4,1,'winter',1,1,'2018-09-11 08:45:40',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

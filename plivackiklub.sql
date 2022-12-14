CREATE DATABASE  IF NOT EXISTS `plivackiklub` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `plivackiklub`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: plivackiklub
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(150) NOT NULL,
  `Decsription` varchar(2000) NOT NULL,
  `ImageName` varchar(255) DEFAULT NULL,
  `CreatorId` int DEFAULT NULL,
  `CreationDate` varchar(20) NOT NULL,
  `ModifcationDate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `CreatorId` (`CreatorId`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`CreatorId`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'gfhjk','gfhgjhkjlčlćkjhgj','˘gift.jpg',NULL,'1671804838894',NULL),(2,'rzwrtvbd','dfgherte','Profil1.png',NULL,'1671810898068',NULL),(3,'rzwrtvbd','dfgherte','Profil1.png',NULL,'1671810982081',NULL),(4,'fsfsdfsdfsdffsddsf','asasdasdaswffafwdf','plivanje1.jpg',NULL,'1672238149904',NULL);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Trener'),(3,'Korisnik');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Email` varchar(80) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `RoleId` int DEFAULT NULL,
  `Password` varchar(150) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `RoleId` (`RoleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sdcfs','dscs','sdc','sdc','123',NULL,''),(2,'','','cvb','','andela',NULL,''),(3,'','','dfghj','','ande',NULL,''),(4,'','','asdfg','','and',NULL,''),(5,'','','qwert','','dfgh',NULL,''),(6,'','','wert','','11234',NULL,''),(7,'','','asx','','alkas',NULL,''),(8,'','','fgn','','an',NULL,''),(9,'','','saas','','skhBXD',NULL,''),(10,'','','asas','','1234',NULL,''),(11,'','','sws','','saww',NULL,''),(12,'ewqqw','qeweq','esdrw','qwe','1212',NULL,''),(13,'J','LK','H','KHJ','an',NULL,''),(14,'Anđela','Jurić','andjela','andjela@gmail.com','063977700',NULL,''),(15,'Anđela','Jurić','andjelaa','andjela1@gmail.com','23456789',3,''),(16,'nesto','neki','netko','neka@neko','0987655',3,'undefined'),(17,'nesto','neki','netkoo','neka@neko','0987655',3,'undefined'),(18,'nko','nko','nkoo','nko@nko','34567',3,'undefined'),(19,'df','fd','fgh','df@ds','56789',3,'undefined'),(20,'df','fd','fghd','df@ds','56789',3,'undefined'),(21,'as','as','sa','as@as','7890',3,'undefined'),(22,'ds','ds','ds','ds@ds','45890',3,'$2b$10$JjyzvczGMqz/aoODgNyFD.g7hbOaccKGNzwkXUyxcYsYKhuGLR9Ni'),(23,'ds','ds','dss','ds@ds','45890',3,'$2b$10$FdUPc8uSzzdhFK3o52U4Ou9maaiZqUdmutGrkf3fFa0S1Wpbrc8UC'),(24,'a','a','a','a@a','5678',3,'$2b$10$E8IGWmlDci8AOW6sgN2ScOVixY2duEJI2STnsBtRDZ7XGF./1WP/m'),(25,'patak','patak','patak','patak@gmail.com','123',3,'$2b$10$1K7CueU63PAEuddvEW5ob.5eF3tOIx6z4LxeyNWCj2K8nBWjdKFpK');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-06 10:38:31

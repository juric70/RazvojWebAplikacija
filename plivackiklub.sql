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
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercises` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `Description` varchar(5000) NOT NULL,
  `CreationDate` varchar(50) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT '0',
  `CreatorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `CreatorId` (`CreatorId`),
  CONSTRAINT `exercises_ibfk_1` FOREIGN KEY (`CreatorId`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
INSERT INTO `exercises` VALUES (1,'SADASD','SDEXS','function now() { [native code] }',1,30),(2,'wdx','xwwswd','function now() { [native code] }',1,30),(3,'dewqxs','wxqas','2023-01-28',1,30),(4,'Zgibovi','Okačiti se rukama na prečku koja visi sa zida i povlačiti se rukama prema gore da Vam brada pređe iznad prečke, a ako niste razumjeli opis , te ukoliko Vam je isti trebao možete se ubiti jer ne znate šta su zgibovi. :)','2023-01-28',1,30),(5,'lkfrm wlkwrf','wlrkemcwćšeprov','2023-01-28',1,28),(6,'lwdcm','ewkdfnl','2023-01-29',0,28),(7,'dcasahahhahaha','cwsds','2023-01-29',0,28),(8,'Suhi treninzi','undefined','2023-01-29',0,30),(9,'treninzi u bazenu','undefined','2023-01-29',0,30);
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;

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
  `isDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`Id`),
  KEY `CreatorId` (`CreatorId`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`CreatorId`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'gfhjk','gfhgjhkjlčlćkjhgj','gift.jpg',NULL,'1671804838894',NULL,0),(2,'rzwrtvbd','dfgherte','Profil1.png',NULL,'1671810898068',NULL,1),(3,'rzwrtvbd','dfgherteskjskjsjsjsjjsjsjsjjs','Profil1.png',NULL,'1671810982081','2023-01-29',0),(4,'fsfsdfsdfsdffsddsf','asasdasdaswffafwdf','plivanje1.jpg',NULL,'1672238149904',NULL,1),(5,'sdcsd','dsc','preuzmi.jpg',30,'2023-01-29',NULL,0),(6,'sdcsd','dsc','preuzmi.jpg',30,'2023-01-29',NULL,1),(7,'skjaw','sakj','preuzmi.jpg',30,'2023-01-29',NULL,1),(8,'skjaw','sakj','preuzmi.jpg',30,'2023-01-29',NULL,0),(9,'skjaw','sakj','preuzmi.jpg',30,'2023-01-29',NULL,0),(10,'skjaw','sakj','preuzmi.jpg',30,'2023-01-29',NULL,1);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programs`
--

DROP TABLE IF EXISTS `programs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `Description` varchar(5000) DEFAULT NULL,
  `Cost` int NOT NULL,
  `CreatorId` int DEFAULT NULL,
  `IsDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `CreatorId` (`CreatorId`),
  CONSTRAINT `programs_ibfk_1` FOREIGN KEY (`CreatorId`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programs`
--

LOCK TABLES `programs` WRITE;
/*!40000 ALTER TABLE `programs` DISABLE KEYS */;
INSERT INTO `programs` VALUES (1,'Studentski program','Program za studente koji su u statusu redovnoga studenta. Korisnik mora imati studentsku karticu i mora biti član studentske knjižnice!',332,30,1),(2,'Studentski program','Porgram predviđen za sve redovne studente Sveučilišta u Mostaru. Korisnik može odabrati ovaj program samo uz predočenu potvrdu o studiranju (indeks ili potvrda). Treninzi su od 3-5 puta tjedno.',10,30,0);
/*!40000 ALTER TABLE `programs` ENABLE KEYS */;
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
-- Table structure for table `training`
--

DROP TABLE IF EXISTS `training`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `training` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `CreationDate` varchar(50) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT '0',
  `CreatorId` int DEFAULT NULL,
  `CategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `CreatorId` (`CreatorId`),
  KEY `CategoryId` (`CategoryId`),
  CONSTRAINT `training_ibfk_1` FOREIGN KEY (`CreatorId`) REFERENCES `users` (`Id`),
  CONSTRAINT `training_ibfk_2` FOREIGN KEY (`CategoryId`) REFERENCES `training_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training`
--

LOCK TABLES `training` WRITE;
/*!40000 ALTER TABLE `training` DISABLE KEYS */;
INSERT INTO `training` VALUES (1,'sdc','2023-01-30',1,30,2),(2,'neki tres','2023-01-30',0,30,2),(3,'Kondicijski trening','2023-01-30',1,30,2),(4,'fff','2023-01-30',0,30,2),(5,'fdf','2023-01-30',0,30,2);
/*!40000 ALTER TABLE `training` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training_category`
--

DROP TABLE IF EXISTS `training_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `training_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `CreationDate` varchar(50) DEFAULT NULL,
  `CreatorId` int DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `CreatorId` (`CreatorId`),
  CONSTRAINT `training_category_ibfk_1` FOREIGN KEY (`CreatorId`) REFERENCES `users` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training_category`
--

LOCK TABLES `training_category` WRITE;
/*!40000 ALTER TABLE `training_category` DISABLE KEYS */;
INSERT INTO `training_category` VALUES (1,'Treninzi u bazenuu','2023-01-29',30,1),(2,'Trening u bazenu','2023-01-29',30,0),(3,'Suhi trening','2023-01-30',30,0),(4,'Kondicijski trening','2023-01-30',30,0);
/*!40000 ALTER TABLE `training_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training_exercise`
--

DROP TABLE IF EXISTS `training_exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `training_exercise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `RepetitionNumber` int DEFAULT NULL,
  `Series` int DEFAULT NULL,
  `Duration` int DEFAULT NULL,
  `TrainingId` int DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT '0',
  `ExerciseId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `TrainingId` (`TrainingId`),
  KEY `ExerciseId` (`ExerciseId`),
  CONSTRAINT `training_exercise_ibfk_1` FOREIGN KEY (`TrainingId`) REFERENCES `training` (`id`),
  CONSTRAINT `training_exercise_ibfk_2` FOREIGN KEY (`ExerciseId`) REFERENCES `exercises` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training_exercise`
--

LOCK TABLES `training_exercise` WRITE;
/*!40000 ALTER TABLE `training_exercise` DISABLE KEYS */;
INSERT INTO `training_exercise` VALUES (1,3,2,33,2,1,7),(2,33,33,22,2,1,9),(3,33,33,33,2,1,9),(4,2,2,2,2,1,7),(5,2,2,2,2,1,8),(6,2,2,2,2,1,8),(7,2,22,22,2,1,8),(8,22,2222,22,2,1,8),(9,4,4,4,2,1,9),(10,201,2,2,3,0,9),(11,3,3,0,3,0,8),(12,22,3,0,2,1,6),(13,0,3,4,2,0,7);
/*!40000 ALTER TABLE `training_exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `traininguser`
--

DROP TABLE IF EXISTS `traininguser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traininguser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT NULL,
  `TrainingId` int DEFAULT NULL,
  `DateOfTraining` varchar(30) NOT NULL,
  `startAt` varchar(10) NOT NULL,
  `EndsAt` varchar(10) NOT NULL,
  `IsDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `TrainingId` (`TrainingId`),
  CONSTRAINT `traininguser_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`),
  CONSTRAINT `traininguser_ibfk_2` FOREIGN KEY (`TrainingId`) REFERENCES `training` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traininguser`
--

LOCK TABLES `traininguser` WRITE;
/*!40000 ALTER TABLE `traininguser` DISABLE KEYS */;
/*!40000 ALTER TABLE `traininguser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_program`
--

DROP TABLE IF EXISTS `user_program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_program` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT NULL,
  `ProgramId` int DEFAULT NULL,
  `MonthOfPayment` int NOT NULL,
  `IsPayed` tinyint(1) NOT NULL,
  `IsDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `ProgramId` (`ProgramId`),
  CONSTRAINT `user_program_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`),
  CONSTRAINT `user_program_ibfk_2` FOREIGN KEY (`ProgramId`) REFERENCES `programs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_program`
--

LOCK TABLES `user_program` WRITE;
/*!40000 ALTER TABLE `user_program` DISABLE KEYS */;
INSERT INTO `user_program` VALUES (1,19,2,3,0,0),(2,23,2,3,1,0),(3,24,2,3,1,0),(4,17,2,3,0,0),(5,19,2,3,0,0),(6,24,2,3,0,0),(7,25,2,5,1,0);
/*!40000 ALTER TABLE `user_program` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sdcfs','dscs','sdc','sdc','123',NULL,''),(2,'','','cvb','','andela',NULL,''),(3,'','','dfghj','','ande',NULL,''),(4,'','','asdfg','','and',NULL,''),(5,'','','qwert','','dfgh',NULL,''),(6,'','','wert','','11234',NULL,''),(7,'','','asx','','alkas',NULL,''),(8,'','','fgn','','an',NULL,''),(9,'','','saas','','skhBXD',NULL,''),(10,'','','asas','','1234',NULL,''),(11,'','','sws','','saww',NULL,''),(12,'ewqqw','qeweq','esdrw','qwe','1212',NULL,''),(13,'J','LK','H','KHJ','an',NULL,''),(14,'Anđela','Jurić','andjela','andjela@gmail.com','063977700',NULL,''),(15,'Anđela','Jurić','andjelaa','andjela1@gmail.com','23456789',3,''),(16,'nesto','neki','netko','neka@neko','0987655',3,'undefined'),(17,'nesto','neki','netkoo','neka@neko','0987655',3,'undefined'),(18,'nko','nko','nkoo','nko@nko','34567',3,'undefined'),(19,'df','fd','fgh','df@ds','56789',3,'undefined'),(20,'df','fd','fghd','df@ds','56789',3,'undefined'),(21,'as','as','sa','as@as','7890',3,'undefined'),(22,'ds','ds','ds','ds@ds','45890',3,'$2b$10$JjyzvczGMqz/aoODgNyFD.g7hbOaccKGNzwkXUyxcYsYKhuGLR9Ni'),(23,'ds','ds','dss','ds@ds','45890',3,'$2b$10$FdUPc8uSzzdhFK3o52U4Ou9maaiZqUdmutGrkf3fFa0S1Wpbrc8UC'),(24,'a','a','a','a@a','5678',3,'$2b$10$E8IGWmlDci8AOW6sgN2ScOVixY2duEJI2STnsBtRDZ7XGF./1WP/m'),(25,'patak','patak','patak','patak@gmail.com','123',3,'$2b$10$1K7CueU63PAEuddvEW5ob.5eF3tOIx6z4LxeyNWCj2K8nBWjdKFpK'),(26,'Anđela','Jurić','andjelaa123','andjela@gmail.com','063977700',3,'$2b$10$UZyN7T1spp8v6ji8k3ch1eKAYdb1eMElRKFyNJCDZPVcDhrslOOzG'),(27,'neko','nekic','neko','neko@nekic','0000000',3,'$2b$10$eYuN/LWS.axHuqSVc/ecX..UOQnoseUjUGogxJuNf0eMm3b8dU0qC'),(28,'suncokret','suncokretic','suncokret','Suncokret@gmail.com','1236789',3,'$2b$10$3K/A4n4Df19QRw1ByRZe6.cl8UnFZ..qvKcToZ7NW17VKmIsROE76'),(29,'slika','slika','slika','slika@slika','234567',3,'$2b$10$YczK6.2sEnEtX7816z4YK.lDlWAUFcep7AHJg0MvIJfKzjksQkUZa'),(30,'tv','tv','tv','tv@tv','22',1,'$2b$10$mgyFibKf7y5PTyDyDCYfCeIAPayojmjUT4tEriJrGozYnhATr/sBW'),(31,'tva','tva','tva','tv@tv','22',2,'$2b$10$vXiEzyVeKfPtYCBgqOJnH..Gz6r7rdYNxYVSmavFSvCtL3/q6SllW'),(32,'aaoi','oi','oi','oi@io','234567',3,'$2b$10$y7RXDxICV3u6SxAJeegpZOa4d2YIKfV7AX8ZAKwp3hlp15iAcTtR2');
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

-- Dump completed on 2023-02-05 14:47:34

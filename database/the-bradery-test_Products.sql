-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: localhost    Database: the-bradery-test
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `inventory` int NOT NULL,
  `stripeId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'T-shirt Blanc',20.99,100,'price_1OAzXABx4LpCTfMpiavEVb2W'),(2,'Jean Slim Noir',49.99,75,'price_1OAzacBx4LpCTfMpruUxHWHt'),(3,'Chaussures de Sport',89.99,50,'price_1OAzanBx4LpCTfMplD6AqAuw'),(4,'Veste en Cuir',199.99,25,'price_1OAzb3Bx4LpCTfMpVRTMZQMb'),(5,'Robe d\'Été',29.99,60,'price_1OAzbFBx4LpCTfMp4C7UhAIi'),(6,'Cravate en Soie',24.99,40,'price_1OAzbRBx4LpCTfMpTI7FTeri'),(7,'Sac à Main',59.99,30,'price_1OAzbcBx4LpCTfMpXl4WuNcm'),(8,'Chapeau Panama',34.99,20,'price_1OAzbnBx4LpCTfMp5kfRe91l'),(9,'Écharpe en Laine',29.99,45,'price_1OAzc2Bx4LpCTfMpUi0zRw5z'),(10,'Ceinture en Cuir',39.99,70,'price_1OAzcFBx4LpCTfMpRJjgQCSJ'),(11,'Montre Classique',149.99,15,'price_1OAzcQBx4LpCTfMpDNwnIVn4'),(12,'Bottes en Cuir',99.99,40,'price_1OAzccBx4LpCTfMpLSYmZmI4'),(13,'Lunettes de Soleil',79.99,50,'price_1OAzcnBx4LpCTfMp0LS2BmQv'),(14,'Chemise à Carreaux',44.99,55,'price_1OAzcyBx4LpCTfMpeNy9BRnt'),(15,'Pull-over Gris',64.99,35,'price_1OAzd8Bx4LpCTfMp5683AZvw'),(16,'Short en Jean',39.99,60,'price_1OAzdJBx4LpCTfMpKbfb6sOj'),(17,'Sandales d\'Été',49.99,40,'price_1OAzdUBx4LpCTfMpHjiNXUgV'),(18,'Bijoux Fantaisie',14.99,85,'price_1OAzddBx4LpCTfMpKgBtmQib'),(19,'Pantalon Chino',54.99,50,'price_1OAzdrBx4LpCTfMpuy1iJq8k'),(20,'Blouse Florale',39.99,40,'price_1OAze2Bx4LpCTfMp16OXtsRd');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-12 16:48:09

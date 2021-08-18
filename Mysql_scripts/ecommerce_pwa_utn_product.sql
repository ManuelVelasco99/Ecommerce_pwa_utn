CREATE DATABASE  IF NOT EXISTS `ecommerce_pwa_utn` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce_pwa_utn`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce_pwa_utn
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id_product` int unsigned NOT NULL AUTO_INCREMENT,
  `id_category` int unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `stock` int unsigned NOT NULL,
  `habilitado` tinyint NOT NULL DEFAULT '1',
  `eliminado` tinyint NOT NULL DEFAULT '0',
  `imagen` varchar(45) NOT NULL,
  PRIMARY KEY (`id_product`),
  KEY `categoryFK_idx` (`id_category`),
  CONSTRAINT `categoryFK` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (46,1,'notebook','adsfdsfsdf',10,1,0,'97qxarwks7ht01n.jpg'),(47,13,'jbl','parlante',50,1,0,'97qxarwks7hvi3i.jpg'),(48,12,'Maincra','maincra',50,1,0,'97qxarwks7hzq03.jpg'),(49,1,'RTX 3090','placa de video',200,1,0,'97qxarwks7i1rdk.jpg'),(50,1,'macbook','notebook mc',20,1,0,'97qxarwks7i3o0d.jpg'),(51,14,'inodoro','inodoro q hablas',10,1,0,'97qx8ockscqi63b.jpg'),(52,15,'Esmirlo','para escabiar',100,1,0,'97qxfk4ks7vwmcc.jpg'),(53,1,'Teclado','teclado rgb',51,1,0,'97qx71sks81pq3h.jpg'),(54,1,'Impresora','imprime',10,1,0,'97qx8ockscq54le.jpg'),(55,13,'Auriculares Bluetooth','Auriculares con inalmbricos con bluetooth color rosa',150,1,0,'97qx8ockscq7rcz.jpg'),(56,16,'Heladera Samsung','Heladera Samsung con frízer',45,1,0,'97qx8ockscqfmbw.jpg'),(57,16,'Microondas Philco','Microondas philco con distintas funciones de cocción',40,1,1,'97qx8ockscqhivm.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-18 18:29:07

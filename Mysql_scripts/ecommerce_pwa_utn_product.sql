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
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (58,17,'Notebook HP','Modelo X509JA Intel I3 1005 G1 | 4GB | 1Tb | 15.6 FULL HD',20,1,0,'97qx1ecksi8299u.jpg'),(59,17,'Macbook','Macbook Air 2015',50,1,0,'97qx1ecksi86lbl.jpg'),(60,17,'Placa de video RTX 2080','Placa de video con 8 GB VRAM',20,1,0,'97qx1ecksi886ev.jpg'),(61,18,'Palante JBL flip 3','Parlante Bluetoth con 25w de potencia rms',12,1,0,'97qx1ecksi89kry.jpg'),(62,18,'Auriculares Beat','Auriculares Beat con cable de 1.5 m de largo',20,1,0,'97qx1ecksi8bs1m.jpg'),(63,18,'Microfono HyperX','Microfono con luces RGB',20,1,0,'97qx1ecksi8f65m.jfif'),(64,19,'Microondas Philco','Microondas con multiples modos de coccion',20,1,0,'97qx1ecksi8ko9q.jpeg'),(65,19,'Heladera Samsung','Heladera samsung con freezer y dispenser de hielo',5,1,0,'97qx1ecksi8mnju.jpeg'),(66,20,'Cocina Longvie','Cocina con 4 hornallas y chispero.',5,1,0,'97qx1ecksi8od3b.jpeg'),(67,20,'Extractor Purificador de cocina',' ',10,1,0,'97qx1ecksi8pzor.jpeg'),(68,21,'Sofa 3 cuerpos','Color gris',20,1,0,'97qx1ecksi8rbil.jpeg'),(69,21,'Mesa baja circular','Madera de pino',23,1,0,'97qx1ecksi8sxh0.jpeg');
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

-- Dump completed on 2021-08-18 22:34:04

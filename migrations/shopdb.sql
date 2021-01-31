-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: shop
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `order_products`
--

DROP TABLE IF EXISTS `order_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int unsigned NOT NULL,
  `product_id` int NOT NULL,
  `count` int NOT NULL,
  `total_price` decimal(10,2) unsigned NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_products`
--

LOCK TABLES `order_products` WRITE;
/*!40000 ALTER TABLE `order_products` DISABLE KEYS */;
INSERT INTO `order_products` VALUES (1,1,1,2,2000.00),(2,2,2,1,800.00),(3,3,1,1,1500.00),(4,4,6,1,2100.00),(5,5,3,2,2800.00),(6,6,4,1,1500.00),(7,6,1,1,1000.00),(8,7,5,1,1900.00),(9,8,2,3,3000.00),(10,9,5,1,1900.00),(28,41,3,1,1400.00),(29,41,5,2,3800.00),(30,42,3,1,1400.00),(31,42,5,2,3800.00),(32,43,3,1,1400.00),(33,43,5,2,3800.00);
/*!40000 ALTER TABLE `order_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_orders_created_at` (`created_at`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2021-01-01 14:25:59'),(2,2,'2021-01-01 08:20:38'),(3,3,'2021-01-01 18:20:38'),(4,3,'2021-01-01 19:20:38'),(5,4,'2021-01-10 09:20:38'),(6,5,'2021-01-10 13:20:38'),(7,5,'2021-01-10 16:20:38'),(8,6,'2021-01-10 12:20:38'),(9,8,'2021-01-15 11:20:38'),(10,9,'2021-01-15 08:20:38'),(41,4,'2021-01-31 21:00:30'),(42,4,'2021-01-31 23:06:10'),(43,4,'2021-02-01 01:07:50');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_oprions`
--

DROP TABLE IF EXISTS `product_oprions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_oprions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `category_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_oprions`
--

LOCK TABLES `product_oprions` WRITE;
/*!40000 ALTER TABLE `product_oprions` DISABLE KEYS */;
INSERT INTO `product_oprions` VALUES (1,'Диагональ',1),(2,'Камера',1),(3,'Память',1),(4,'Система',2),(5,'Матрица',2),(6,'Процессор',3),(7,'Видеокарта',3);
/*!40000 ALTER TABLE `product_oprions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_to_options`
--

DROP TABLE IF EXISTS `product_to_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_to_options` (
  `product_option_id` int NOT NULL,
  `product_id` int NOT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`product_option_id`,`product_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_to_options`
--

LOCK TABLES `product_to_options` WRITE;
/*!40000 ALTER TABLE `product_to_options` DISABLE KEYS */;
INSERT INTO `product_to_options` VALUES (1,1,'6'),(2,1,'48'),(3,1,'64'),(4,2,'Tizen OS'),(5,2,'Amoled'),(6,3,'Intel i5 - 3470m'),(7,3,'AMD HD 7850');
/*!40000 ALTER TABLE `product_to_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `category` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Iphone 11','Телефон',1000.00,1),(2,'Samsung S21','Телефон',800.00,1),(3,'Samsung TV','Телевизор',1400.00,2),(4,'Sony Bravia','Телевизор',1500.00,2),(5,'Xiaomi laptop','Ноутбук',1900.00,3),(6,'Asus laptop','Ноутбук',2100.00,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categories`
--

DROP TABLE IF EXISTS `products_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,'Смартфоны'),(2,'Телевизоры'),(3,'Ноутбуки'),(4,'Пылесосы');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_groups`
--

DROP TABLE IF EXISTS `user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_groups` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_groups`
--

LOCK TABLES `user_groups` WRITE;
/*!40000 ALTER TABLE `user_groups` DISABLE KEYS */;
INSERT INTO `user_groups` VALUES (1,'Покупатели'),(2,'Покупатели (скидка 5%)'),(3,'Покупатели (скидка 10%)');
/*!40000 ALTER TABLE `user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `first_name` tinytext NOT NULL,
  `last_name` tinytext NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_group_id` int unsigned NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'hesher@gmail.com','hesher','hesherla','$2b$10$.JFKFlINNFvyisitdcY5OuqZjq4NifjEOZcoJY32XU2qBAggpzIAC',3,1),(2,'hewqewqer@gmail.com','hdsadaszxer','zxczx','$2b$10$ykRKKTkbJKNY1HNQXzOtCOaJBDeKmPCEF5RDJHBW08JxQROAmJqhS',3,0),(3,'newmember@gmail.com','New','Member','$2b$10$olC4U0x2vec.k1DFHOaJd./5IxLyZHD/iUSbP0rDkgTCTohO7FPMe',1,0),(4,'newmember2@gmail.com','New2','Member2','$2b$10$2VRr8Ap5sHDLNiGEPCN7a.aMFVl.eOrubMkdF2k02HpwEu7UQ4V4S',1,0),(5,'newmember2@gmail.com','New2','Member2','$2b$10$AymDu7r1xAb3TZRQOEy0oOp3MfZMDAj7SzyQDWrjx686LoOgYCQ.C',1,0);
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

-- Dump completed on 2021-02-01  1:23:27

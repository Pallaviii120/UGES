-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_uges
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `tbl_district_master`
--

DROP TABLE IF EXISTS `tbl_district_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_district_master` (
  `district_id` int NOT NULL AUTO_INCREMENT,
  `district_name` varchar(500) DEFAULT NULL,
  `state_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_district_master`
--

LOCK TABLES `tbl_district_master` WRITE;
/*!40000 ALTER TABLE `tbl_district_master` DISABLE KEYS */;
INSERT INTO `tbl_district_master` VALUES (1,'Ahmednagar','14'),(2,'Akola','14'),(3,'Amravati','14'),(4,'Aurangabad','14'),(5,'Beed','14'),(6,'Bhandara','14'),(7,'Buldhana','14'),(8,'Chandrapur','14'),(9,'Dhule','14'),(10,'Gadchiroli','14'),(11,'Gondia','14'),(12,'Hingoli','14'),(13,'Jalgaon','14'),(14,'Jalna','14'),(15,'Kolhapur','14'),(16,'Latur','14'),(17,'Mumbai City','14'),(18,'Mumbai Suburban','14'),(19,'Nagpur','14'),(20,'Nanded','14'),(21,'Nandurbar','14'),(22,'Nashik','14'),(23,'Osmanabad','14'),(24,'Palghar','14'),(25,'Parbhani','14'),(26,'Pune','14'),(27,'Raigad','14'),(28,'Ratnagiri','14'),(29,'Sangli','14'),(30,'Satara','14'),(31,'Sindhudurg','14'),(32,'Solapur','14'),(33,'Thane','14'),(34,'Wardha','14'),(35,'Washim','14'),(36,'Yavatmal','14'),(37,'Bagalkot','11'),(38,'Bangalore Rural','11'),(39,'Bangalore Urban','11'),(40,'Belgaum','11'),(41,'Bellary','11'),(42,'Bidar','11'),(43,'Chamarajanagar','11'),(44,'Chikkaballapur','11'),(45,'Chikkamagaluru','11'),(46,'Chitradurga','11'),(47,'Dakshina Kannada','11'),(48,'Davanagere','11'),(49,'Dharwad','11'),(50,'Gadag','11'),(51,'Gulbarga','11'),(52,'Hassan','11'),(53,'Haveri','11'),(54,'Kodagu','11'),(55,'Kolar','11'),(56,'Koppal','11'),(57,'Mandya','11'),(58,'Mysore','11'),(59,'Raichur','11'),(60,'Ramanagara','11'),(61,'Shimoga','11'),(62,'Tumkur','11'),(63,'Udupi','11'),(64,'Uttara Kannada','11'),(65,'Bijapur','11'),(66,'Yadgir','11');
/*!40000 ALTER TABLE `tbl_district_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_location_master`
--

DROP TABLE IF EXISTS `tbl_location_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_location_master` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `s_state_name` varchar(500) DEFAULT NULL,
  `s_district_name` varchar(500) DEFAULT NULL,
  `s_village_name` varchar(500) DEFAULT NULL,
  `s_state_no` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_location_master`
--

LOCK TABLES `tbl_location_master` WRITE;
/*!40000 ALTER TABLE `tbl_location_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_location_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_obstacle_data`
--

DROP TABLE IF EXISTS `tbl_obstacle_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_obstacle_data` (
  `obstacle_id` int NOT NULL AUTO_INCREMENT,
  `s_obstacle_name` varchar(45) DEFAULT NULL,
  `s_distance` varchar(45) DEFAULT NULL,
  `s_meters` varchar(45) DEFAULT NULL,
  `s_direction` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`obstacle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_obstacle_data`
--

LOCK TABLES `tbl_obstacle_data` WRITE;
/*!40000 ALTER TABLE `tbl_obstacle_data` DISABLE KEYS */;
INSERT INTO `tbl_obstacle_data` VALUES (1,'Residential House','307','Mtr','W'),(2,'Dwelling-1','299','Mtr','W'),(3,'Dwelling-2','296','Mtr','W'),(4,'Dwelling-3','446','Mtr','SW'),(5,'Culvert','63','Mtr','N'),(6,'LT Line','258','Mtr','W'),(7,'Water Body-1','301','Mtr','W'),(8,'Water Body-2','145','Mtr','W'),(9,'Canal','391','Mtr','W');
/*!40000 ALTER TABLE `tbl_obstacle_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_report_details`
--

DROP TABLE IF EXISTS `tbl_report_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_report_details` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `s_state` varchar(200) DEFAULT NULL,
  `s_district` varchar(200) DEFAULT NULL,
  `s_taluka` varchar(200) DEFAULT NULL,
  `s_village` varchar(200) DEFAULT NULL,
  `s_loc_num` varchar(200) DEFAULT NULL,
  `s_survey_no` varchar(200) DEFAULT NULL,
  `s_survey_completed` varchar(200) DEFAULT NULL,
  `s_terrain` varchar(200) DEFAULT NULL,
  `s_land_path` varchar(200) DEFAULT NULL,
  `s_meter_path` varchar(200) DEFAULT NULL,
  `s_major_footprint` varchar(200) DEFAULT NULL,
  `s_risk_footprint` varchar(200) DEFAULT NULL,
  `s_major_falling` varchar(200) DEFAULT NULL,
  `s_risk_falling` varchar(200) DEFAULT NULL,
  `s_major_noise` varchar(200) DEFAULT NULL,
  `s_risk_noise` varchar(200) DEFAULT NULL,
  `s_overall_risk` varchar(200) DEFAULT NULL,
  `s_major_overall_risk` varchar(200) DEFAULT NULL,
  `s_shifting_req` varchar(200) DEFAULT NULL,
  `s_land_type` varchar(200) DEFAULT NULL,
  `s_soil_type` varchar(200) DEFAULT NULL,
  `s_soil_type_path` varchar(200) DEFAULT NULL,
  `s_access_road` varchar(200) DEFAULT NULL,
  `s_key_challenges` varchar(200) DEFAULT NULL,
  `s_east` varchar(200) DEFAULT NULL,
  `s_west` varchar(200) DEFAULT NULL,
  `s_north` varchar(200) DEFAULT NULL,
  `s_south` varchar(200) DEFAULT NULL,
  `s_northeast` varchar(200) DEFAULT NULL,
  `s_southeast` varchar(200) DEFAULT NULL,
  `s_southwest` varchar(200) DEFAULT NULL,
  `s_northwest` varchar(200) DEFAULT NULL,
  `s_house` varchar(200) DEFAULT NULL,
  `s_dwelling_1` varchar(200) DEFAULT NULL,
  `s_dwelling_2` varchar(200) DEFAULT NULL,
  `s_dwelling_3` varchar(200) DEFAULT NULL,
  `s_culvert` varchar(200) DEFAULT NULL,
  `s_lt_line` varchar(200) DEFAULT NULL,
  `s_water_body1` varchar(200) DEFAULT NULL,
  `s_water_body2` varchar(200) DEFAULT NULL,
  `s_canal` varchar(200) DEFAULT NULL,
  `s_created_by` varchar(200) DEFAULT NULL,
  `s_user_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_report_details`
--

LOCK TABLES `tbl_report_details` WRITE;
/*!40000 ALTER TABLE `tbl_report_details` DISABLE KEYS */;
INSERT INTO `tbl_report_details` VALUES (1,'11','65','163','58','KA_11','12345','Yes','124','uploads/UGES.pdf-1723459710002.pdf','uploads/novo.png-1723459718092.png','6','Low','1','Medium','2','Medium','Medium','9','Yes','test','test','uploads/novo.png-1723459742291.png','test','','uploads/novo.png-1723459760554.png','','','','uploads/night photo.png-1723459768963.png','','','','uploads/UGES.pdf-1723459776426.pdf','','','','','','','uploads/PIL534_PIL-CS06-GTC-C_Jamgaon Barshi_MINERAL OIL.pdf-1723459782704.pdf','','demo.user',NULL),(2,'11','65','163','57','KA_11','123456','No','12345','uploads/UGES.pdf-1723541117070.pdf','uploads/PIL534_PIL-CS06-GTC-C_Jamgaon Barshi_MINERAL OIL.pdf-1723541123065.pdf','7','Medium','7','','','','','','','','','','','','uploads/PIL534_PIL-CS06-GTC-C_Jamgaon Barshi_MINERAL OIL.pdf-1723541135796.pdf','','','','','','','uploads/UGES.pdf-1723541140569.pdf','','','','','','','','','','demo.user','1'),(3,'11','65','163','17','KA_11','12345','Yes','12345','uploads/faangpath-simple-template.pdf-1723552375822.pdf_fileland_1','uploads/starlogo-removebg-preview.png-1723552410589.png_filemeter_1','3','Medium','6','High','3','High','Medium','3','Yes','1234test','test','uploads/UGES.pdf-1723552464271.pdf_soilfile_1','','','','','','','','','uploads/novo.png-1723552474561.png_south_west_1','','','','uploads/whoweare2.jpg-1723552479355.jpg_dwelling_2_1','','','','','','','demo.user','1'),(4,'11','65','164','97','KA_11','123','Yes','345','fileland_1_uploads/whoweare2.jpg-1723552775645.jpg','filemeter_1_uploads/novo.png-1723552782619.png','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','demo.user','1'),(5,'11','65','164','113','KA_11','1234567','Yes','1765','fileland_1_uploads/fileland_1_land.png-1723617198080.png','filemeter_1_uploads/filemeter_1_meter.png-1723617202082.png','2','Low','5','Medium','3','Medium','Low','3','Yes','test','test2','soilfile_1_uploads/soilfile_1_soil-type.png-1723617221667.png','test','','east_1_uploads/east_1_north.png-1723617230526.png','west_1_uploads/west_1_obstacle1.png-1723617235728.png','','south_1_uploads/south_1_soil-type.png-1723617239163.png','','','','','','','dwelling_2_1_uploads/dwelling_2_1_north-east.png-1723617245634.png','','','','','','','demo.user','1'),(6,'11','65','164','97','KA_11','12345','Yes','1243','(fileland)_(1)_uploads/(fileland)_(1)_land.png-1723630334098.png','(filemeter)_(1)_uploads/(filemeter)_(1)_meter.png-1723630338531.png','1','Low','2','Low','7','Medium','Low','5','No','1234test','test2','','','','(east)_(1)_uploads/(east)_(1)_obstacle1.png-1723630393169.png','','','','','(south_east)_(1)_uploads/(south_east)_(1)_obstacle1.png-1723630397343.png','','','','','(dwelling_2)_(1)_uploads/(dwelling_2)_(1)_north.png-1723630402396.png','(dwelling_3)_(1)_uploads/(dwelling_3)_(1)_soil-type.png-1723630406236.png','','','','','','demo.user','1'),(7,'11','65','164','111','KA_11','12345','No','12345','(fileland)_(1)_uploads/(fileland)_(1)_north-east.png-1723633051864.png','(filemeter)_(1)_uploads/(filemeter)_(1)_soil-type.png-1723633062749.png','3','Medium','2','Medium','6','Medium','Low','2','Yes','test','test','','','','(east)_(1)_uploads/(east)_(1)_north-east.png-1723633090287.png','','','','','','','','','(dwelling_1)_(1)_uploads/(dwelling_1)_(1)_land.png-1723633117460.png','','','','(LT_line)_(1)_uploads/(LT_line)_(1)_obstacle1.png-1723633121697.png','(water_body_1)_(1)_uploads/(water_body_1)_(1)_meter.png-1723633125908.png','','','demo.user','1'),(8,'11','65','164','98','KA_11','12','Yes','132','(fileland)_(1)_uploads/(fileland)_(1)_land.png-1723800166439.png','(filemeter)_(1)_uploads/(filemeter)_(1)_north.png-1723800170477.png','1','Low','3','Medium','3','High','Medium','3','Yes','fds','test','(soilfile)_(1)_uploads/(soilfile)_(1)_north-east.png-1723800204552.png','er','tess','(east)_(1)_uploads/(east)_(1)_north-east.png-1723800214663.png','(west)_(1)_uploads/(west)_(1)_north.png-1723800218620.png','(north)_(1)_uploads/(north)_(1)_land.png-1723800221985.png','(south)_(1)_uploads/(south)_(1)_soil-type.png-1723800225261.png','(north_east)_(1)_uploads/(north_east)_(1)_land.png-1723800228980.png','(south_east)_(1)_uploads/(south_east)_(1)_obstacle1.png-1723800233941.png','(south_west)_(1)_uploads/(south_west)_(1)_north-east.png-1723800237129.png','(north_west)_(1)_uploads/(north_west)_(1)_north.png-1723800239990.png','(residential)_(1)_uploads/(residential)_(1)_obstacle1.png-1723800242819.png','(dwelling_1)_(1)_uploads/(dwelling_1)_(1)_meter.png-1723800245872.png','(dwelling_2)_(1)_uploads/(dwelling_2)_(1)_north-east.png-1723800253100.png','(dwelling_3)_(1)_uploads/(dwelling_3)_(1)_meter.png-1723800261354.png','(culvert)_(1)_uploads/(culvert)_(1)_north-east.png-1723800268426.png','(LT_line)_(1)_uploads/(LT_line)_(1)_obstacle1.png-1723800276449.png','(water_body_1)_(1)_uploads/(water_body_1)_(1)_north-east.png-1723800280104.png','(water_body_2)_(1)_uploads/(water_body_2)_(1)_north.png-1723800284839.png','(canal)_(1)_uploads/(canal)_(1)_obstacle1.png-1723800287626.png','demo.user','1');
/*!40000 ALTER TABLE `tbl_report_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_state_master`
--

DROP TABLE IF EXISTS `tbl_state_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_state_master` (
  `state_id` int NOT NULL AUTO_INCREMENT,
  `s_state_name` varchar(500) DEFAULT NULL,
  `s_state_code` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_state_master`
--

LOCK TABLES `tbl_state_master` WRITE;
/*!40000 ALTER TABLE `tbl_state_master` DISABLE KEYS */;
INSERT INTO `tbl_state_master` VALUES (1,'Andhra Pradesh','AP'),(2,'Arunachal Pradesh','AR'),(3,'Assam','AS'),(4,'Bihar','BR'),(5,'Chhattisgarh','CG'),(6,'Goa','GA'),(7,'Gujarat','GJ'),(8,'Haryana','HR'),(9,'Himachal Pradesh','HP'),(10,'Jharkhand','JH'),(11,'Karnataka','KA'),(12,'Kerala','KL'),(13,'Madhya Pradesh','MP'),(14,'Maharashtra','MH'),(15,'Manipur','MN'),(16,'Meghalaya','ML'),(17,'Mizoram','MZ'),(18,'Nagaland','NL'),(19,'Odisha','OR'),(20,'Punjab','PB'),(21,'Rajasthan','RJ'),(22,'Sikkim','SK'),(23,'Tamil Nadu','TN'),(24,'Telangana','TG'),(25,'Tripura','TR'),(26,'Uttar Pradesh','UP'),(27,'Uttarakhand','UK'),(28,'West Bengal','WB'),(29,'Andaman and Nicobar Islands','AN'),(30,'Chandigarh','CH'),(31,'Dadra and Nagar Haveli and Daman and Diu','DN'),(32,'Lakshadweep','LD'),(33,'Delhi','DL'),(34,'Puducherry','PY'),(35,'Ladakh','LK'),(36,'Jammu and Kashmir','JK');
/*!40000 ALTER TABLE `tbl_state_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_taluka_master`
--

DROP TABLE IF EXISTS `tbl_taluka_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_taluka_master` (
  `taluka_id` int NOT NULL AUTO_INCREMENT,
  `taluka_name` varchar(45) DEFAULT NULL,
  `district_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`taluka_id`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_taluka_master`
--

LOCK TABLES `tbl_taluka_master` WRITE;
/*!40000 ALTER TABLE `tbl_taluka_master` DISABLE KEYS */;
INSERT INTO `tbl_taluka_master` VALUES (1,'Bagalkot','37'),(2,'Badami','37'),(3,'Bilagi','37'),(4,'Hunagund','37'),(5,'Jamakhandi','37'),(6,'Mudhol','37'),(7,'Devanahalli','38'),(8,'Doddaballapur','38'),(9,'Hoskote','38'),(10,'Nelamangala','38'),(11,'Anekal','39'),(12,'Athani','40'),(13,'Bailhongal','40'),(14,'Belgaum','40'),(15,'Chikkodi','40'),(16,'Gokak','40'),(17,'Hukkeri','40'),(18,'Khanapur','40'),(19,'Mudalagi','40'),(20,'Nippani','40'),(21,'Raibag','40'),(22,'Ramdurg','40'),(23,'Bellary','41'),(24,'Hadagalli','41'),(25,'Hagaribommanahalli','41'),(26,'Hospet','41'),(27,'Kudligi','41'),(28,'Sandur','41'),(29,'Siruguppa','41'),(30,'Aurad','42'),(31,'Basavakalyan','42'),(32,'Bhalki','42'),(33,'Bidar','42'),(34,'Humnabad','42'),(35,'Chamarajanagar','43'),(36,'Gundlupet','43'),(37,'Kollegal','43'),(38,'Yelandur','43'),(39,'Bagepalli','44'),(40,'Chikkaballapur','44'),(41,'Chintamani','44'),(42,'Gauribidanur','44'),(43,'Gudibande','44'),(44,'Sidlaghatta','44'),(45,'Chikkamagaluru','45'),(46,'Kadur','45'),(47,'Koppa','45'),(48,'Mudigere','45'),(49,'Narasimharajapura','45'),(50,'Sringeri','45'),(51,'Tarikere','45'),(52,'Challakere','46'),(53,'Chitradurga','46'),(54,'Hiriyur','46'),(55,'Holalkere','46'),(56,'Hosadurga','46'),(57,'Bantwal','47'),(58,'Belthangady','47'),(59,'Mangaluru','47'),(60,'Moodabidri','47'),(61,'Puttur','47'),(62,'Sullia','47'),(63,'Ullal','47'),(64,'Channagiri','48'),(65,'Davanagere','48'),(66,'Harapanahalli','48'),(67,'Honnali','48'),(68,'Jagalur','48'),(69,'Dharwad','49'),(70,'Hubli','49'),(71,'Kalghatgi','49'),(72,'Kundgol','49'),(73,'Navalgund','49'),(74,'Gadag','50'),(75,'Mundargi','50'),(76,'Nargund','50'),(77,'Ron','50'),(78,'Shirhatti','50'),(79,'Aland','51'),(80,'Chincholi','51'),(81,'Chitapur','51'),(82,'Gulbarga','51'),(83,'Jevargi','51'),(84,'Sedam','51'),(85,'Alur','52'),(86,'Arkalgud','52'),(87,'Arsikere','52'),(88,'Belur','52'),(89,'Channarayapatna','52'),(90,'Hassan','52'),(91,'Holenarasipura','52'),(92,'Sakleshpur','52'),(93,'Byadgi','53'),(94,'Hangal','53'),(95,'Haveri','53'),(96,'Hirekerur','53'),(97,'Ranebennur','53'),(98,'Savanur','53'),(99,'Shiggaon','53'),(100,'Madikeri','54'),(101,'Somwarpet','54'),(102,'Virajpet','54'),(103,'Bangarapet','55'),(104,'Kolar','55'),(105,'Malur','55'),(106,'Mulbagal','55'),(107,'Srinivaspur','55'),(108,'Gangavathi','56'),(109,'Koppal','56'),(110,'Kustagi','56'),(111,'Yelburga','56'),(112,'Krishnarajpet','57'),(113,'Maddur','57'),(114,'Malavalli','57'),(115,'Mandya','57'),(116,'Nagamangala','57'),(117,'Pandavapura','57'),(118,'Shrirangapattana','57'),(119,'Heggadadevana','58'),(120,'Hunsur','58'),(121,'Krishnarajanagara','58'),(122,'Mysore','58'),(123,'Nanjangud','58'),(124,'Piriyapatna','58'),(125,'Tirumakudal','58'),(126,'Devadurga','59'),(127,'Lingsugur','59'),(128,'Manvi','59'),(129,'Raichur','59'),(130,'Sindhanur','59'),(131,'Channapatna','60'),(132,'Kanakapura','60'),(133,'Magadi','60'),(134,'Ramanagara','60'),(135,'Bhadravathi','61'),(136,'Hosanagara','61'),(137,'Sagar','61'),(138,'Shikaripur','61'),(139,'Shimoga','61'),(140,'Soraba','61'),(141,'Thirthahalli','61'),(142,'Chiknayakanhalli','62'),(143,'Gubbi','62'),(144,'Koratagere','62'),(145,'Kunigal','62'),(146,'Madhugiri','62'),(147,'Sira','62'),(148,'Tumkur','62'),(149,'Turuvekere','62'),(150,'Karkal','63'),(151,'Kundapura','63'),(152,'Udupi','63'),(153,'Ankola','64'),(154,'Bhatkal','64'),(155,'Dandeli','64'),(156,'Haliyal','64'),(157,'Karwar','64'),(158,'Kumta','64'),(159,'Mundgod','64'),(160,'Siddapur','64'),(161,'Sirsi','64'),(162,'Yellapur','64'),(163,'Basavana Bagevadi','65'),(164,'Indi','65'),(165,'Muddebihal','65'),(166,'Sindagi','65'),(167,'Vijayapura','65'),(168,'Shahapur','66'),(169,'Shorapur','66'),(170,'Yadgir','66');
/*!40000 ALTER TABLE `tbl_taluka_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_master`
--

DROP TABLE IF EXISTS `tbl_user_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `create_date` varchar(45) DEFAULT 'CURRENT_TIMESTAMP',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_master`
--

LOCK TABLES `tbl_user_master` WRITE;
/*!40000 ALTER TABLE `tbl_user_master` DISABLE KEYS */;
INSERT INTO `tbl_user_master` VALUES (1,'Demo User','demo.user@gmail.com','1234567890','demo.user','demo','user','CURRENT_TIMESTAMP');
/*!40000 ALTER TABLE `tbl_user_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_village_master`
--

DROP TABLE IF EXISTS `tbl_village_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_village_master` (
  `village_id` int NOT NULL AUTO_INCREMENT,
  `village_name` varchar(500) DEFAULT NULL,
  `taluka_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`village_id`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_village_master`
--

LOCK TABLES `tbl_village_master` WRITE;
/*!40000 ALTER TABLE `tbl_village_master` DISABLE KEYS */;
INSERT INTO `tbl_village_master` VALUES (1,'Abbihal','163'),(2,'Agasabal','163'),(3,'Akalwadi','163'),(4,'Ambalanur','163'),(5,'Angadageri','163'),(6,'Arasangi','163'),(7,'Areshankar','163'),(8,'Beeraladinni','163'),(9,'Benal R C','163'),(10,'Bhaganagar','163'),(11,'Bhairawadgi','163'),(12,'Bidanal','163'),(13,'Bisalakoppa','163'),(14,'Bisanal','163'),(15,'Bommanahalli','163'),(16,'Budihal','163'),(17,'Budni','163'),(18,'Byakod','163'),(19,'Byalyal','163'),(20,'Cheeraldinni','163'),(21,'Chimmalgi R C','163'),(22,'Deginal','163'),(23,'Dindawar','163'),(24,'Donur','163'),(25,'Gani R C','163'),(26,'Golasangi','163'),(27,'Gonal R C','163'),(28,'Gudadinni','163'),(29,'Halihal','163'),(30,'Hallada Gennur','163'),(31,'Hanchinal','163'),(32,'Hangargi','163'),(33,'Hattarkihal','163'),(34,'Hebbal','163'),(35,'Hulabenchi','163'),(36,'Hunashyal','163'),(37,'Huvinahippargi','163'),(38,'Ingaleshwar','163'),(39,'Itagi','163'),(40,'Ivanagi','163'),(41,'Kadakol','163'),(42,'Kamankeri','163'),(43,'Kanakal','163'),(44,'Kannal','163'),(45,'Karibhanthnal','163'),(46,'Kaulgi','163'),(47,'Kirshyal','163'),(48,'Kodaganur','163'),(49,'Krishnapur','163'),(50,'Kudari Salawadgi','163'),(51,'Kudgi','163'),(52,'Kurubaradinni','163'),(53,'Majarekoppa','163'),(54,'Managuli','163'),(55,'Mannur','163'),(56,'Maradagi','163'),(57,'Markabbinahalli','163'),(58,'Masabinal','163'),(59,'Masuti','163'),(60,'Mattihal','163'),(61,'Muddapur','163'),(62,'Mukartihal','163'),(63,'Mullal','163'),(64,'Muttagi','163'),(65,'Muttaladinni','163'),(66,'Nagaradinni','163'),(67,'Nagaraldon','163'),(68,'Nagaralhuli','163'),(69,'Nagawad','163'),(70,'Nagur','163'),(71,'Nandihal','163'),(72,'Nandihal P U','163'),(73,'Narasalgi','163'),(74,'Neginal','163'),(75,'Rabinal','163'),(76,'Rajanal','163'),(77,'Ramnagar','163'),(78,'Sankanal','163'),(79,'Satihal','163'),(80,'Seekalwadi','163'),(81,'Sevalalnagar','163'),(82,'Shankarnagar','163'),(83,'Sindgeri','163'),(84,'Solawadagi','163'),(85,'Somnal','163'),(86,'Sulakhod','163'),(87,'Tadalgi','163'),(88,'Takkalki','163'),(89,'Talewad','163'),(90,'Telgi','163'),(91,'Unnibhavi','163'),(92,'Uppaladinni','163'),(93,'Utnal','163'),(94,'Wandal','163'),(95,'Yalwar','163'),(96,'Yarnal','163'),(97,'Agarkhed','164'),(98,'Agasanal','164'),(99,'Ahirasang','164'),(100,'Alur','164'),(101,'Anachi','164'),(102,'Anjutagi','164'),(103,'Arajanal','164'),(104,'Arjunagi [B.K.]','164'),(105,'Arjunagi [K.H.]','164'),(106,'Atharga','164'),(107,'Babalad','164'),(108,'Ballolli','164'),(109,'Bannihatti','164'),(110,'Baragudi','164'),(111,'Bardol','164'),(112,'Basanal','164'),(113,'Benakanahalli','164'),(114,'Bhairunagi','164'),(115,'Bhanthanal','164'),(116,'Bhatagunaki','164'),(117,'Bhuyar','164'),(118,'Bolegaon','164'),(119,'Budihal','164'),(120,'Chadchan','164'),(121,'Chanegaon','164'),(122,'Chavadihal','164'),(123,'Chickbevanur','164'),(124,'Choragi','164'),(125,'Dasur','164'),(126,'Deginal','164'),(127,'Dhulikhed','164'),(128,'Dhumakanal','164'),(129,'Ganavalga','164'),(130,'Gandhinagar','164'),(131,'Godihal','164'),(132,'Golasar','164'),(133,'Gornal','164'),(134,'Gotyal','164'),(135,'Govindapur','164'),(136,'Gubbewad','164'),(137,'Gundawan','164'),(138,'Hadalasang','164'),(139,'Hala Halli','164'),(140,'Halagunaki','164'),(141,'Halasangi','164'),(142,'Hanchinal','164'),(143,'Hanjagi','164'),(144,'Hanumanagar','164'),(145,'Hatta Halli','164'),(146,'Havinal','164'),(147,'Hingani','164'),(148,'Hirebevanur','164'),(149,'Horti','164'),(150,'Inchageri','164'),(151,'Ingalgi','164'),(152,'Jeerankalgi','164'),(153,'Jevoor','164'),(154,'Jigajeevani','164'),(155,'Kanakanal','164'),(156,'Kanchinal','164'),(157,'Kapanimbargi','164'),(158,'Karur','164'),(159,'Kataral','164'),(160,'Kenginal','164'),(161,'Khedgi','164'),(162,'Koluragi','164'),(163,'Konkanagaon','164'),(164,'Kotnal','164'),(165,'Kudagi','164'),(166,'Kyatanakeri','164'),(167,'Lachyan','164'),(168,'Lalasangi','164'),(169,'Lingadalli','164'),(170,'Loni','164'),(171,'Loni [B.K.]','164'),(172,'Mahaveernagar','164'),(173,'Mailar','164'),(174,'Manankalgi','164'),(175,'Mannur','164'),(176,'Maragur','164'),(177,'Marasanahalli','164'),(178,'Masali[B.K.]','164'),(179,'Masali[K.D.]','164'),(180,'Mavinalli','164'),(181,'Miragi','164'),(182,'Naad[B.K.]','164'),(183,'Naad[K.D.]','164'),(184,'Nagarhalli','164'),(185,'Nandaragi','164'),(186,'Nandral','164'),(187,'Nehrunagar','164'),(188,'Nimbal [B.K.]','164'),(189,'Nimbal [K.D.]','164'),(190,'Nimbargi','164'),(191,'Nivargi','164'),(192,'Padanur','164'),(193,'Rajanal','164'),(194,'Ramanagar','164'),(195,'Revathagaon','164'),(196,'Rodagi','164'),(197,'Rugi','164'),(198,'Salotgi','164'),(199,'Sangogi','164'),(200,'Sankha','164'),(201,'Satalagaon','164'),(202,'Satalagaon[P.B.]','164'),(203,'Savalsang','164'),(204,'Shiganapur','164'),(205,'Shiradon','164'),(206,'Shiragur Inam','164'),(207,'Shiragur Khalasa','164'),(208,'Shirkanahalli','164'),(209,'Shirnal','164'),(210,'Shirshyad','164'),(211,'Shivapur [B.K.]','164'),(212,'Shivapur [K.H.]','164'),(213,'Sonakanahalli','164'),(214,'Tadavalga','164'),(215,'Taddewadi','164'),(216,'Takali','164'),(217,'Tamba','164'),(218,'Teggihalli','164'),(219,'Tennihalli','164'),(220,'Umraj','164'),(221,'Umrani','164'),(222,'Vijayanagar','164'),(223,'Wade','164'),(224,'Yelgi [P.H.]','164'),(225,'Zalaki','164');
/*!40000 ALTER TABLE `tbl_village_master` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-16 16:31:34

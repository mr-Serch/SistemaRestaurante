/*
SQLyog Community v10.3 
MySQL - 5.5.5-10.1.9-MariaDB : Database - tutorialci
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tutorialci` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `tutorialci`;

/*Table structure for table `ciudades` */

DROP TABLE IF EXISTS `ciudades`;

CREATE TABLE `ciudades` (
  `idCiudad` int(11) NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(20) DEFAULT NULL,
  `sitReg` int(1) DEFAULT NULL,
  PRIMARY KEY (`idCiudad`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `ciudades` */

insert  into `ciudades`(`idCiudad`,`ciudad`,`sitReg`) values (1,'LIMA',1),(2,'ICA',1),(3,'TRUJILLO',1),(4,'AREQUIPA',1),(5,'HUANUCO',1),(6,'MADRE DE DIOS',1),(7,'TUMBES',1);

/*Table structure for table `imagenes` */

DROP TABLE IF EXISTS `imagenes`;

CREATE TABLE `imagenes` (
  `idImagen` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `ruta` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idImagen`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

/*Data for the table `imagenes` */

insert  into `imagenes`(`idImagen`,`titulo`,`ruta`) values (15,'Mi imagen','Captura.PNG'),(18,'Mi archivo','Pago_por_la_pagina_web.pdf');

/*Table structure for table `notas` */

DROP TABLE IF EXISTS `notas`;

CREATE TABLE `notas` (
  `idNotas` int(11) NOT NULL AUTO_INCREMENT,
  `idPersona` int(11) DEFAULT NULL,
  `1B` int(11) DEFAULT NULL,
  `2B` int(11) DEFAULT NULL,
  `3B` int(11) DEFAULT NULL,
  `4B` int(11) DEFAULT NULL,
  `notafinal` int(11) DEFAULT NULL,
  PRIMARY KEY (`idNotas`),
  KEY `idPersona` (`idPersona`),
  CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

/*Data for the table `notas` */

insert  into `notas`(`idNotas`,`idPersona`,`1B`,`2B`,`3B`,`4B`,`notafinal`) values (9,1,10,0,0,0,0),(10,4,15,0,0,0,0),(11,5,17,0,0,0,0),(12,6,18,0,0,0,0),(13,1,10,15,0,0,0),(14,6,18,19,0,0,0),(15,5,17,18,0,0,0),(16,4,15,17,0,0,0);

/*Table structure for table `persona` */

DROP TABLE IF EXISTS `persona`;

CREATE TABLE `persona` (
  `idPersona` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `appaterno` varchar(30) DEFAULT NULL,
  `apmaterno` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `dni` char(8) DEFAULT NULL,
  `idCiudad` int(11) DEFAULT NULL,
  `fecnac` date DEFAULT NULL,
  `sitReg` int(1) DEFAULT NULL COMMENT '1 - Activo, 0 - Inactivo',
  PRIMARY KEY (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `persona` */

insert  into `persona`(`idPersona`,`nombre`,`appaterno`,`apmaterno`,`email`,`dni`,`idCiudad`,`fecnac`,`sitReg`) values (1,'Michael','Jackson','I','asdf@adsf.com','99999999',1,'2016-09-01',1),(4,'kurt','donald','cobain','asdf@adsf.com','55555555',2,'2014-11-30',0),(5,'Eduardo','Duque','II','ede@dfdf.com','11111111',3,'2016-05-17',NULL),(6,'Axl','Rose','xD','axl@dfdf.com','22222222',5,'2016-05-17',NULL);

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nomUsuario` varchar(20) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `idPersona` (`idPersona`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `usuario` */

insert  into `usuario`(`idUsuario`,`nomUsuario`,`clave`,`idPersona`) values (1,'rrojas','7c4a8d09ca3762af61e59520943dc26494f8941b',1),(7,'gggg','40bd001563085fc35165329ea1ff5c5ecbdbbeef',4),(8,'eduque','40bd001563085fc35165329ea1ff5c5ecbdbbeef',5),(9,'arose','40bd001563085fc35165329ea1ff5c5ecbdbbeef',6);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

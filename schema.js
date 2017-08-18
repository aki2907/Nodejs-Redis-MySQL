SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `twitter` DEFAULT CHARACTER SET latin1 ;
USE `twitter` ;

-- -----------------------------------------------------
-- Table `twitter`.`user_login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twitter`.`user_login` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `user_email` VARCHAR(50) NOT NULL COMMENT '',
  `user_password` VARCHAR(50) NOT NULL COMMENT '',
  `user_name` VARCHAR(50) NOT NULL COMMENT '',
  PRIMARY KEY (`user_id`)  COMMENT '',
  UNIQUE INDEX `user_email` (`user_email` ASC)  COMMENT '')
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = latin1;

-- -----------------------------------------------------
-- Table `twitter`.`tweets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `twitter`.`tweets` (
  `user_id` INT(11) NOT NULL COMMENT '',
  `tweets` TEXT NOT NULL COMMENT '',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  INDEX `user_id` (`user_id` ASC)  COMMENT '',
  CONSTRAINT `tweets_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `twitter`.`user_login` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
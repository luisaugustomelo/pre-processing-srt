CREATE TABLE task1submissions(id int NOT NULL AUTO_INCREMENT,
id_video VARCHAR(255) NOT NULL,
legenda VARCHAR(255) NOT NULL,
tinicial TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
tfinal TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
fingerprint VARCHAR(200) NOT NULL,
PRIMARY KEY (id));



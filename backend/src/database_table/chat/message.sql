USE ig;

CREATE TABLE message (
    id INT(11) NOT NULL AUTO_INCREMENT,
    message LONGTEXT,
    id_user INT(11),
    id_chat INT(11),
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_chat) REFERENCES chat(id),
);
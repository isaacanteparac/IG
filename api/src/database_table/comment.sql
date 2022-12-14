USE ig;

CREATE TABLE comment (
    id INT(11) NOT NULL AUTO_INCREMENT,
    comment VARCHAR(225) NOT NULL,
    id_user INT(11),
    id_post INT(11),
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_post) REFERENCES post(id)
);
USE ig;

CREATE TABLE follower (
    id INT(11) NOT NULL AUTO_INCREMENT,
    id_follower INT(11),
    id_user INT(11),
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_follower) REFERENCES users(id)
);
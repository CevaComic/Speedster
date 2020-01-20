CREATE TABLE users (
    `id_user` int unsigned AUTO_INCREMENT NOT NULL,
    `create_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `courier_since` DATETIME,
    `google_id` varchar(32),
    `facebook_id` varchar(32),
    `avatar` varchar(64),
    `email` varchar(100) NOT NULL UNIQUE,
    `phone` varchar(20),
    `first_name` varchar(30) NOT NULL,
    `last_name` varchar(30) NOT NULL,
    `dob` varchar(12),
    `password` varchar(100),
    `address` varchar(100),
    `city` varchar(100),
    `longitude` varchar(20),
    `latitude` varchar(20),
    `recover_code` varchar(32),
    `expire_code` DATETIME,
    `token` varchar(32),
    PRIMARY KEY (id_user)
);

CREATE TABLE users_options (
    -- FK la users
    `user_id` int unsigned NOT NULL,
    `is_courier` tinyint(1) NOT NULL DEFAULT 0,
    `is_blocked` tinyint(1) NOT NULL DEFAULT 0,
    `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
    `is_working` tinyint(1) NOT NULL DEFAULT 0,
    `is_busy` tinyint(1) NOT NULL DEFAULT 0,
    `goes_outside_city` tinyint(1) NOT NULL DEFAULT 0,
);

CREATE TABLE courier_requests (
    `id_request` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la users
    `user_id` int unsigned NOT NULL,
    -- FK la vehicle_types
    `vehicle_type_id` int unsigned NOT NULL,
    `vehicle_picture` varchar(40) NOT NULL,
    -- 0 - pending , -1 - denied , 1 accepted
    `is_aproved` tinyint(1) NOT NULL DEFAULT 0,
    `denied_reason` varchar(200),
    PRIMARY KEY (id_request)
    -- all data will be transfered to vehicles if reuquest accepted
);

CREATE TABLE vehicles (
    `id_vehicle` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la users
    `user_id` int unsigned NOT NULL,
    -- FK la vehicle_types
    `vehicle_type_id` int unsigned NOT NULL,
    `description` varchar(200),
    `picture` varchar(64),
    -- 0 - pending , -1 - denied , 1 accepted
    `is_aproved` tinyint(1) NOT NULL DEFAULT 0,
    -- Un singur vehicul poate fii activ, celelalte vor fii inactive (la alegerea curierului)
    `is_active` tinyint(1) NOT NULL DEFAULT 0,
);

CREATE TABLE vehicle_types (
    `id_vehicle_type` int unsigned AUTO_INCREMENT NOT NULL,
    `type` varchar(20) NOT NULL,
    `capacity` DOUBLE(7,2) unsigned NOT NULL,
    PRIMARY KEY (id_vehicle_type)
);

CREATE TABLE reviews (
    `id_review` int unsigned AUTO_INCREMENT NOT NULL,
    `reviewer` int unsigned NOT NULL,
    `courier` int unsigned NOT NULL,
    `rate` tinyint(1) NOT NULL,
    PRIMARY KEY (id_review)
);

CREATE TABLE vehicle_packs (
    -- FK la vehicles
    `vehicle_id` int unsigned NOT NULL,
    -- FK la pack_types
    `pack_type_id` int unsigned NOT NULL,
);

CREATE TABLE schedules (
    `id_schedule` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la users
    `user_id` int unsigned NOT NULL,
    `mon` tinyint(1) unsigned NOT NULL DEFAULT 0,
    `thu` tinyint(1) unsigned NOT NULL DEFAULT 0,
    `wen` tinyint(1) unsigned NOT NULL DEFAULT 0,
    `tue` tinyint(1) unsigned NOT NULL DEFAULT 0,
    `fri` tinyint(1) unsigned NOT NULL DEFAULT 0,
    `sat` tinyint(1) unsigned NOT NULL DEFAULT 0,
    `sun` tinyint(1) unsigned NOT NULL DEFAULT 0,
    `start` varchar(5) NOT NULL DEFAULT '00:00',
    `end` varchar(5) NOT NULL DEFAULT '00:00',
    PRIMARY KEY (id_schedule)
);

CREATE TABLE prices (
    `id_price` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la users
    `user_id` int unsigned NOT NULL,
    -- FK la vehicles
    `vehicle_id` int unsigned NOT NULL,
    `price_envelope` DOUBLE(7,2) NOT NULL DEFAULT 0,
    `price_kg` DOUBLE(7,2) NOT NULL DEFAULT 0,
    `price_extra_distance` DOUBLE(7,2) DEFAULT 0,
    PRIMARY KEY (id_price)
);

CREATE TABLE packs (
    `id_pack` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la users (expeditor)a
    `user_id_expeditor` int unsigned NOT NULL,
    -- id curier (users)
    `user_id_courier` int unsigned NOT NULL,
    `address` varchar(100),
    `phone` varchar(20),
    -- FK la pack_types
    `pack_type_id` int unsigned NOT NULL,
    -- dimensiuni sau plic
    `height` DOUBLE(7,2),
    `width` DOUBLE(7,2),
    `depth` DOUBLE(7,2),
    `kg` DOUBLE(7,2),
    `price` DOUBLE(7,2) NOT NULL,
    -- destinatar
    `first_name` varchar(30) NOT NULL,
    `last_name` varchar(30) NOT NULL,
    `address` varchar(100) NOT NULL,
    `phone` varchar(20) NOT NULL,
    -- daca curierul refuza comanda
    `denied_reason` varchar(200),
    PRIMARY KEY (id_pack)
);

CREATE TABLE packs_pack_statuses {
    `id_pack_status` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la packs
    `pack_id` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la pack_status
    `status_id` int unsigned NOT,
    `date` DATETIME NOT NULL,
    PRIMARY KEY (id_pack_statuses)
}

CREATE TABLE pack_status (
    `id_status` int unsigned AUTO_INCREMENT NOT NULL,
    `status` varchar(100) NOT NULL,
    PRIMARY KEY (id_status)
);

CREATE TABLE pack_types (
    `id_pack_type` int unsigned AUTO_INCREMENT NOT NULL,
    `type` varchar(100) NOT NULL,
    PRIMARY KEY (id_pack_type)
);


VIEWS

CREATE VIEW view_users AS
SELECT id_user AS id,`password`,email,first_name AS firstname,last_name AS lastname,avatar,concat(last_name,' ',first_name) AS displayname, create_on AS membersince,google_id AS googleid,facebook_id AS facebookid,phone,address,city,latitude AS lat, longitude AS lng,is_courier AS courier,is_working AS working FROM users u LEFT JOIN users_options o ON o.user_id = u.id_user;

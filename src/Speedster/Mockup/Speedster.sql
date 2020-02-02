CREATE TABLE users (
    `id_user` int unsigned AUTO_INCREMENT NOT NULL,
    `create_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    `courier_since` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `share_private_info` tinyint(1) NOT NULL DEFAULT 0,
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
    PRIMARY KEY (id_vehicle)
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
    `price_envelope` DOUBLE(7,2) NOT NULL DEFAULT 0,
    `price_kg` DOUBLE(7,2) NOT NULL DEFAULT 0,
    `price_extra_distance` DOUBLE(7,2) DEFAULT 0,
    PRIMARY KEY (id_price)
);

CREATE TABLE packs (
    `id_pack` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la users (expeditor)
    `user_id_expeditor` int unsigned NOT NULL,
    -- id curier (users)
    `user_id_courier` int unsigned NOT NULL,
    `address_sender` varchar(100) NOT NULL,
    `status` tinyint(1) DEFAULT 0,
    `pack_type` tinyint(1) NOT NULL,
    -- FK la pack_types
    -- `pack_type_id` int unsigned NOT NULL,
    -- dimensiuni sau plic
    -- `height` DOUBLE(7,2),
    -- `width` DOUBLE(7,2),
    -- `depth` DOUBLE(7,2),
    `quantity` DOUBLE(7,2) NOT NULL,
    -- `price` DOUBLE(7,2) NOT NULL,
    -- destinatar
    `receivername` varchar(30) NOT NULL,
    `receiveraddress` varchar(100) NOT NULL,
    `receiverphone` varchar(20) NOT NULL,
    -- daca curierul refuza comanda
    `denied_reason` varchar(200),
    PRIMARY KEY (id_pack)
);

CREATE TABLE pack_status (
    `id_pack_status` int unsigned AUTO_INCREMENT NOT NULL,
    -- FK la packs
    `pack_id` int unsigned NOT NULL,
    -- FK la pack_status
    `status` int unsigned NOT NULL,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_pack_status)
)

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

VIEW_LOGGED
select `u`.`id_user` AS `id`,`u`.`password` AS `password`,`u`.`email` AS `email`,`u`.`first_name` AS `firstName`,`u`.`last_name` AS `lastName`,`u`.`avatar` AS `avatar`,concat(`u`.`last_name`,' ',`u`.`first_name`) AS `displayName`,`u`.`create_on` AS `memberSince`,`u`.`google_id` AS `googleId`,`u`.`facebook_id` AS `facebookId`,`u`.`phone` AS `phone`,`u`.`address` AS `address`,`u`.`city` AS `city`,`u`.`latitude` AS `lat`,`u`.`longitude` AS `lng`,`o`.`is_courier` AS `courier`,`o`.`is_working` AS `working`,`o`.`share_private_info` AS `share`,`o`.`goes_outside_city` AS `outside`,`c`.`id_request` AS `becomeCourier` from ((`users` `u` left join `users_options` `o` on(`o`.`user_id` = `u`.`id_user`)) left join `courier_requests` `c` on(`c`.`user_id` = `u`.`id_user`))


VIEW_VEHICLES

select `v`.`id_vehicle` AS `id`,`u`.`id_user` AS `id_user`,`v`.`vehicle_type_id` AS `type`,`v`.`description` AS `description`,`v`.`picture` AS `picture` from (`vehicles` `v` join `users` `u` on(`v`.`user_id` = `u`.`id_user`))

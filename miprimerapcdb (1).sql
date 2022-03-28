-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2022 a las 07:45:15
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `miprimerapcdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(15, 'Mouse', '2022-02-20 15:26:51', '2022-02-20 15:26:51'),
(16, 'Teclado', '2022-02-20 15:26:51', '2022-02-20 15:26:51'),
(17, 'Auriculares', '2022-02-20 15:27:37', '2022-02-20 15:27:37'),
(18, 'CPU', '2022-02-20 15:27:37', '2022-02-20 15:27:37'),
(19, 'Placa de video', '2022-02-20 15:28:06', '2022-02-20 15:28:06'),
(20, 'Procesador', '2022-02-20 15:28:06', '2022-02-20 15:28:06'),
(21, 'Pantalla', '2022-02-20 15:28:43', '2022-02-20 15:28:43'),
(22, 'Kit-Combo', '2022-02-20 15:28:43', '2022-02-20 15:28:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `numbersofinstallments`
--

CREATE TABLE `numbersofinstallments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `numbersofinstallments`
--

INSERT INTO `numbersofinstallments` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '3', '2022-02-20 04:14:44', '2022-02-20 04:14:44'),
(2, '6', '2022-02-20 04:14:44', '2022-02-20 04:14:44'),
(3, '12', '2022-02-20 04:14:44', '2022-02-20 04:14:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `duesId` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `stockMin` int(11) DEFAULT NULL,
  `stockMax` int(11) DEFAULT NULL,
  `sectionId` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `duesId`, `price`, `img`, `visibility`, `stock`, `stockMin`, `stockMax`, `sectionId`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'Kit Marvo Scorpion 4 en 1 Teclado RGB + combo', '¡TODO LO NECESARIO PARA JUGAR!. Este pack Scorpion agrupa un ratón, un teclado, unos auriculares con micrófono y una alfombrilla que combinan perfectamente para ser tremendamente eficaz en todos los juegos. Todos los periféricos reunidos en un solo pack y', 2, 4000, 'imagen-1645366230002', 1, 40, 1, 30, 2, 22, '2022-02-20 14:10:30', '2022-02-20 14:10:30'),
(11, ' Procesador AMD RYZEN 7 3700X 4.4 GHz AM4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 45900, 'imagen-1645419216450', 1, 80, 1, 70, 2, 18, '2022-02-20 14:42:32', '2022-02-21 04:53:36'),
(12, 'Auriculares Gamer Vincha Luz Led Microfono Sonido Hd', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 1699, 'imagen-1645426515546', 1, 23, 1, 20, 1, 17, '2022-02-20 14:49:08', '2022-02-21 06:55:15'),
(14, 'Auricuales gamer logitech g series g432 black', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 2, 8999, 'imagen-1645418192536', 1, 100, 10, 90, 2, 17, '2022-02-20 15:10:49', '2022-02-21 04:36:32'),
(18, ' Pc Armada Dual Core 4 Gigas Ram Hd 320g', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 3, 77144, 'imagen-1645418075439', 1, 100, 10, 100, 2, 18, '2022-02-21 04:34:35', '2022-02-21 04:34:35'),
(19, 'Water Cooler Master Masterliquid Ml240l V2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 2, 17495, 'imagen-1645418931921', 1, 50, 10, 40, 1, 20, '2022-02-21 04:48:51', '2022-02-21 04:48:51'),
(20, 'Mouse de juego Razer DeathAdder Essential', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 4500, 'imagen-1645426600267', 1, 300, 10, 300, 1, 15, '2022-02-21 04:58:14', '2022-02-21 06:56:40'),
(21, 'Mouse de juego HyperX Pulsefire Surge negro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 4800, 'imagen-1645419706658', 0, 500, 100, 500, 2, 15, '2022-02-21 05:01:46', '2022-02-21 05:01:46'),
(24, 'Placa de Video Asrock Radeon RX 580 8GB', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 125000, 'imagen-1645490162363', 1, 50, 10, 45, 1, 19, '2022-02-22 00:36:02', '2022-02-22 00:36:02'),
(26, 'Pc Armada Dual Core 4 Gigas Ram Hd ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 3, 80000, 'imagen-1645490551800', 1, 100, 2, 50, 2, 18, '2022-02-22 00:42:31', '2022-02-22 00:42:31'),
(27, 'Pc Armada Dual Core 32 Gigas Ram Hd ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 120000, 'imagen-1645490687904', 1, 20, 10, 20, 2, 18, '2022-02-22 00:44:47', '2022-02-22 00:44:47'),
(28, 'mouse gamer negro rgb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 4800, 'imagen-1645490757961', 1, 70, 2, 50, 2, 15, '2022-02-22 00:45:57', '2022-02-22 00:45:57'),
(29, 'memoria ram 32gbs', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 3, 20000, 'imagen-1645490868039', 1, 60, 1, 10, 2, 20, '2022-02-22 00:47:48', '2022-02-22 00:47:48'),
(30, 'mouse lila logitech', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 2, 4200, 'imagen-1645682722865', 1, 50, 2, 45, 2, 15, '2022-02-24 06:05:22', '2022-02-24 06:05:22'),
(31, 'Auriculares gamer HyperX Cloud Alpha S blue', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 3, 13000, 'imagen-1645683183660', 1, 80, 2, 55, 1, 17, '2022-02-24 06:13:03', '2022-02-24 06:13:03'),
(32, 'Auriculares gamer HyperX CloudX negro y verde', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 1, 4700, 'imagen-1645683334515', 1, 90, 2, 50, 1, 17, '2022-02-24 06:15:34', '2022-02-24 06:15:34'),
(33, 'Pc Escritorio Armada Cpu Intel Core I9 32gb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 3, 200000, 'imagen-1645683859105', 1, 50, 2, 50, 1, 18, '2022-02-24 06:24:19', '2022-02-24 06:24:19'),
(34, 'teclado y mouse gamer Redragon K551RGB-BA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 3, 6500, 'imagen-1645684412547', 1, 150, 2, 100, 1, 16, '2022-02-24 06:33:32', '2022-02-24 06:33:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'cliente', '2022-02-20 04:13:58', '2022-02-20 04:13:58'),
(2, 'admi', '2022-02-20 04:13:58', '2022-02-20 04:13:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sections`
--

INSERT INTO `sections` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Oferta', '2022-02-20 04:14:19', '2022-02-20 04:14:19'),
(2, 'Destacados', '2022-02-20 04:14:19', '2022-02-20 04:14:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220220021008-create-rols.js'),
('20220220021032-create-users.js'),
('20220220022215-create-numbersofinstallments.js'),
('20220220022231-create-sections.js'),
('20220220022241-create-categories.js'),
('20220220022256-create-products.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `cel` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rolId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `userName`, `email`, `cel`, `password`, `avatar`, `rolId`, `createdAt`, `updatedAt`) VALUES
(12, 'administrador', 'admin', 'admin22', 'administrador@mpc.com', 1160499896, '$2a$10$F886g.P2Sf0sBaLZk3F30./Np1sCNfBEzREu9j7HnFVkBG1WAaAGS', '1645489037553_img.jpg', 2, '2022-02-22 00:17:17', '2022-02-22 00:17:17'),
(13, 'usuario', 'prueba', 'usuario22', 'usuario@gmail.com', 1160499896, '$2a$10$ceQQPVrYLdeU8cDVZIeqaeErD5z6IsK7zO5FSaoLooc6V2TFbje4a', '1645685082925_img.jpg', 1, '2022-02-22 00:21:10', '2022-02-24 06:44:42');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `numbersofinstallments`
--
ALTER TABLE `numbersofinstallments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `duesId` (`duesId`),
  ADD KEY `sectionId` (`sectionId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rolId` (`rolId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `numbersofinstallments`
--
ALTER TABLE `numbersofinstallments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`duesId`) REFERENCES `numbersofinstallments` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`sectionId`) REFERENCES `sections` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-01-2021 a las 19:56:56
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `police_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assignments`
--

CREATE TABLE `assignments` (
  `idOrden` int(11) NOT NULL,
  `idTurno` int(11) NOT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `fechaEjecucion` datetime DEFAULT NULL,
  `numPlacaCreaOrden` varchar(255) NOT NULL,
  `firmadaTodos` tinyint(1) DEFAULT NULL,
  `pdfOrdenFirmada` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newsreports`
--

CREATE TABLE `newsreports` (
  `numRegistro` int(11) NOT NULL,
  `idOrden` int(11) NOT NULL,
  `informe` text DEFAULT NULL,
  `firmadoTodos` tinyint(1) DEFAULT NULL,
  `pdfNovedadesFirmado` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `police`
--

CREATE TABLE `police` (
  `numPlaca` varchar(255) NOT NULL,
  `idRol` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `police`
--

INSERT INTO `police` (`numPlaca`, `idRol`, `password`, `createdAt`, `updatedAt`) VALUES
('1234', 2, '12345', '2021-01-30 18:04:23', '2021-01-30 18:04:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `policeassignedorders`
--

CREATE TABLE `policeassignedorders` (
  `idOrden` int(11) NOT NULL,
  `numPlaca` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `policesignassignments`
--

CREATE TABLE `policesignassignments` (
  `numPlacaPolice` varchar(255) NOT NULL,
  `idOrdenAssignment` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `policesignnewsreports`
--

CREATE TABLE `policesignnewsreports` (
  `numPlacaPolice` varchar(255) NOT NULL,
  `numRegistroNewsReport` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolespolice`
--

CREATE TABLE `rolespolice` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rolespolice`
--

INSERT INTO `rolespolice` (`idRol`, `nombreRol`, `createdAt`, `updatedAt`) VALUES
(1, 'Jefe', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Policia', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
('20210126161937-create-assignment.js'),
('20210126180033-create-task.js'),
('20210126184650-create-news-report.js'),
('20210126192417-create-roles-police.js'),
('20210126192558-create-police-assigned-order.js'),
('20210126193038-create-police.js'),
('20210127200803-create-work-shift.js'),
('20210127201407-create-police-sign-news-report.js'),
('20210127201806-create-police-sign-assignment.js'),
('20210129115632-add-associations.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `idTarea` int(11) NOT NULL,
  `idOrden` int(11) NOT NULL,
  `horaPrevista` varchar(255) DEFAULT NULL,
  `horaRealizada` varchar(255) DEFAULT NULL,
  `realizada` tinyint(1) DEFAULT NULL,
  `motivoNoRealizada` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `descripcionRealizada` varchar(255) DEFAULT NULL,
  `novedad` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `workshifts`
--

CREATE TABLE `workshifts` (
  `idTurno` int(11) NOT NULL,
  `nombreTurno` varchar(255) NOT NULL,
  `horaInicio` time DEFAULT NULL,
  `horaFin` time DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`idOrden`),
  ADD KEY `fkey_Assignments_WorkShifts` (`idTurno`),
  ADD KEY `fkey_Assignments_Police` (`numPlacaCreaOrden`);

--
-- Indices de la tabla `newsreports`
--
ALTER TABLE `newsreports`
  ADD PRIMARY KEY (`numRegistro`),
  ADD KEY `fkey_NewsReports_Assignments` (`idOrden`);

--
-- Indices de la tabla `police`
--
ALTER TABLE `police`
  ADD PRIMARY KEY (`numPlaca`),
  ADD KEY `fkey_Police_RolesPolice` (`idRol`);

--
-- Indices de la tabla `policeassignedorders`
--
ALTER TABLE `policeassignedorders`
  ADD PRIMARY KEY (`idOrden`,`numPlaca`),
  ADD KEY `fkey_PoliceAssignedOrder_Police` (`numPlaca`);

--
-- Indices de la tabla `policesignassignments`
--
ALTER TABLE `policesignassignments`
  ADD PRIMARY KEY (`numPlacaPolice`,`idOrdenAssignment`),
  ADD KEY `fkey_PoliceSignAssignments_Assignment` (`idOrdenAssignment`);

--
-- Indices de la tabla `policesignnewsreports`
--
ALTER TABLE `policesignnewsreports`
  ADD PRIMARY KEY (`numPlacaPolice`,`numRegistroNewsReport`),
  ADD KEY `fkey_PoliceSignNewsReports_NewsReports` (`numRegistroNewsReport`);

--
-- Indices de la tabla `rolespolice`
--
ALTER TABLE `rolespolice`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`idTarea`),
  ADD KEY `fkey_Tasks_Assignments` (`idOrden`);

--
-- Indices de la tabla `workshifts`
--
ALTER TABLE `workshifts`
  ADD PRIMARY KEY (`idTurno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `assignments`
--
ALTER TABLE `assignments`
  MODIFY `idOrden` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `newsreports`
--
ALTER TABLE `newsreports`
  MODIFY `numRegistro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rolespolice`
--
ALTER TABLE `rolespolice`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `idTarea` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `workshifts`
--
ALTER TABLE `workshifts`
  MODIFY `idTurno` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `assignments`
--
ALTER TABLE `assignments`
  ADD CONSTRAINT `fkey_Assignments_Police` FOREIGN KEY (`numPlacaCreaOrden`) REFERENCES `police` (`numPlaca`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_Assignments_WorkShifts` FOREIGN KEY (`idTurno`) REFERENCES `workshifts` (`idTurno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `newsreports`
--
ALTER TABLE `newsreports`
  ADD CONSTRAINT `fkey_NewsReports_Assignments` FOREIGN KEY (`idOrden`) REFERENCES `assignments` (`idOrden`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `police`
--
ALTER TABLE `police`
  ADD CONSTRAINT `fkey_Police_RolesPolice` FOREIGN KEY (`idRol`) REFERENCES `rolespolice` (`idRol`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `policeassignedorders`
--
ALTER TABLE `policeassignedorders`
  ADD CONSTRAINT `fkey_PoliceAssignedOrder_Assignment` FOREIGN KEY (`idOrden`) REFERENCES `assignments` (`idOrden`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_PoliceAssignedOrder_Police` FOREIGN KEY (`numPlaca`) REFERENCES `police` (`numPlaca`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `policesignassignments`
--
ALTER TABLE `policesignassignments`
  ADD CONSTRAINT `fkey_PoliceSignAssignments_Assignment` FOREIGN KEY (`idOrdenAssignment`) REFERENCES `assignments` (`idOrden`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_PoliceSignAssignments_Police` FOREIGN KEY (`numPlacaPolice`) REFERENCES `police` (`numPlaca`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `policesignnewsreports`
--
ALTER TABLE `policesignnewsreports`
  ADD CONSTRAINT `fkey_PoliceSignNewsReports_NewsReports` FOREIGN KEY (`numRegistroNewsReport`) REFERENCES `newsreports` (`numRegistro`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_PoliceSignNewsReports_Police` FOREIGN KEY (`numPlacaPolice`) REFERENCES `police` (`numPlaca`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `fkey_Tasks_Assignments` FOREIGN KEY (`idOrden`) REFERENCES `assignments` (`idOrden`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

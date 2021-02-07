const checkRole = (roles) => (req, res, next) => {
    const isAllowed = roles.includes(req.police.idRol);
    if (!isAllowed) {
        return res.status(403).send({ message: "No tienes suficientes permisos" });
    }
    next();
}

module.exports = checkRole;
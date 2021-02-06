const checkRole = (roles) => (req, res, next) => {
    const isAllowed = roles.includes(req.user.role);
    if (!isAllowed) {
        return res.status(403).send({ message: "You don't have enough rights" });
    }
    next();
}

module.exports = checkRole;
const isAuthenticated = (req, res, next) => {
    const isLoggedIn = req.headers.authorization === "Bearer valid-token";
    if (isLoggedIn) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};
module.exports = isAuthenticated;

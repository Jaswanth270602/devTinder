const adminAuth = (req, res, next) => {
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if(!isAuthenticated) {
        res.status(401).send('Authentication failed');
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = "user";
    const isAuthenticated = token === "user";
    if(!isAuthenticated) {
        res.status(401).send('Authentication failed');
    } else {
        next();
    }
}

module.exports = { adminAuth, userAuth };
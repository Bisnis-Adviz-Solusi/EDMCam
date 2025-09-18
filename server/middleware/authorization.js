//GET ROLE FROM THE DATA OF WHO LOGGED IN (CREATE TOKEN IN USER CONTROLLER)
const authorization = (role) => {
    // RETURN FUNCTION
    return (req, res, next) => {
        //GET ROLE FROM JWT PAYLOAD (FROM CREATE TOKEN)
        const requiredRole = req.user.role;
        //VALIDATE IF NOT THE REQUESTED ROLE
        if (requiredRole !== role) {
            res.status(403).json({
                message: "Not Authorized",
            });
        }
        next();
    };
};

export default authorization;



const userLogout = async (req, res) => {
    res.cookie('token', null, { expires: new Date(Date.now())});
    res.send("Logout success..!!");
};

module.exports = {
    userLogout,
}
const showMessage = (req, res) => {
    res.status(200).send(`Here is you message:  ${req.params.message}`);
};

module.exports = { showMessage };
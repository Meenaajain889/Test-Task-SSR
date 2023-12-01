const fs = require('fs');

const storeValue = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data));
};

const getValue = (filePath) => {
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileData);
    } catch (error) {
        return null;
    }
};

const homePageController = (req, res) => {
    const storedValue = getValue('data.json');
    if (storedValue) {
        return res.render("homepage", { text: storedValue.value })
    }

    res.render("homepage", { text: "" })

}

const postValueController = (req, res) => {
    const { value } = req.body;
    storeValue('data.json', { value });
    res.json({ message: 'Value stored successfully' });
}

module.exports = {
    homePageController,
    postValueController
}
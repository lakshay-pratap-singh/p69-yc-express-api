const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const convertFormDataToJson = () => {
    return upload.any()
}

module.exports = convertFormDataToJson
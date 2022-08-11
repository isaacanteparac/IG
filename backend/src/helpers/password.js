
const bcryptjs = require('bcryptjs');

const helpers = {}

helpers.encryptPassword = async(password) =>{
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    return hash;
};


helpers.decryptPassword = async(password, hashPassword) =>{
    try {
        return await bcryptjs.compare(password, hashPassword);
    }
    catch(e){
        console.log(e);
    }
}

module.exports = helpers;
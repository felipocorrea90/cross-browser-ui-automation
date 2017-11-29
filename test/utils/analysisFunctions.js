/**
 * Created by felipe on 11/29/17.
 */

var compareImages = require('resemblejs/compareImages');
var fs = require('fs');

module.exports = {
    analyzeImages: async function (img1, img2, diffImg) {
        const dataL = await compareImages(
            fs.readFileSync(img1 + '-L.png'),
            fs.readFileSync(img2 + '-L.png')
        );

        fs.writeFileSync(diffImg + '-L.png', dataL.getBuffer());

        const dataM = await compareImages(
            fs.readFileSync(img1 + '-M.png'),
            fs.readFileSync(img2 + '-M.png')
        );

        fs.writeFileSync(diffImg + '-M.png', dataM.getBuffer());

        const dataS = await compareImages(
            fs.readFileSync(img1 + '-S.png'),
            fs.readFileSync(img2 + '-S.png')
        );

        fs.writeFileSync(diffImg + '-S.png', dataS.getBuffer());
    }
}